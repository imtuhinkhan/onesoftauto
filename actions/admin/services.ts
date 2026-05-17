"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Service } from "@/models/Service";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import {
  checkboxValue,
  commaToArray,
  linesToArray,
  parseJsonField,
  toSlug,
} from "@/lib/admin/parse";
import type { ActionState } from "@/lib/admin/action-state";
import mongoose from "mongoose";

const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  description: z.string().min(1, "Description is required"),
  icon: z.string().min(1, "Icon is required"),
  features: z.string().optional(),
  technologies: z.string().optional(),
  processJson: z.string().optional(),
  faqsJson: z.string().optional(),
  pricingTeaser: z.string().optional(),
  order: z.coerce.number().min(0),
  published: z.boolean(),
});

function parseServiceForm(formData: FormData) {
  const title = String(formData.get("title") ?? "");
  const slugInput = String(formData.get("slug") ?? "");
  return serviceSchema.safeParse({
    title,
    slug: slugInput || toSlug(title),
    shortDescription: formData.get("shortDescription"),
    description: formData.get("description"),
    icon: formData.get("icon") ?? "code",
    features: formData.get("features"),
    technologies: formData.get("technologies"),
    processJson: formData.get("processJson"),
    faqsJson: formData.get("faqsJson"),
    pricingTeaser: String(formData.get("pricingTeaser") ?? ""),
    order: formData.get("order") ?? 0,
    published: checkboxValue(formData.get("published")),
  });
}

function servicePayload(data: z.infer<typeof serviceSchema>) {
  return {
    title: data.title,
    slug: toSlug(data.slug),
    shortDescription: data.shortDescription,
    description: data.description,
    icon: data.icon,
    features: linesToArray(data.features),
    technologies: commaToArray(data.technologies),
    process: parseJsonField(data.processJson, [] as { title: string; description: string }[]),
    faqs: parseJsonField(data.faqsJson, [] as { question: string; answer: string }[]),
    pricingTeaser: data.pricingTeaser ?? "",
    order: data.order,
    published: data.published,
  };
}

function revalidateServicePaths(slug: string) {
  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath(`/services/${slug}`);
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
}

export async function createService(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    const parsed = parseServiceForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> };
    }
    await connectDB();
    const payload = servicePayload(parsed.data);
    const existing = await Service.findOne({ slug: payload.slug });
    if (existing) return { error: "A service with this slug already exists" };
    await Service.create(payload);
    revalidateServicePaths(payload.slug);
    redirect("/admin/services");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to create service" };
  }
}

export async function updateService(
  id: string,
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid service ID" };
    const parsed = parseServiceForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> };
    }
    await connectDB();
    const payload = servicePayload(parsed.data);
    const conflict = await Service.findOne({ slug: payload.slug, _id: { $ne: id } });
    if (conflict) return { error: "A service with this slug already exists" };
    const updated = await Service.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) return { error: "Service not found" };
    revalidateServicePaths(payload.slug);
    redirect("/admin/services");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to update service" };
  }
}

export async function deleteService(id: string): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid service ID" };
    await connectDB();
    const doc = await Service.findByIdAndDelete(id);
    if (!doc) return { error: "Service not found" };
    revalidateServicePaths(doc.slug);
    revalidatePath("/admin/services");
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to delete service" };
  }
}
