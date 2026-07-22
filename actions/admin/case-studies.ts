"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { CaseStudy } from "@/models/CaseStudy";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import {
  checkboxValue,
  commaToArray,
  linesToArray,
  parseJsonField,
  toSlug,
} from "@/lib/admin/parse";
import { resolveUploadedImage } from "@/lib/admin/resolve-image";
import type { ActionState } from "@/lib/admin/action-state";
import mongoose from "mongoose";

const caseStudySchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  client: z.string().min(1, "Client is required"),
  category: z.string().min(1, "Category is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  description: z.string().min(1, "Description is required"),
  coverImage: z
    .string()
    .min(1, "Cover image is required")
    .refine(
      (v) => v.startsWith("/") || v.startsWith("http://") || v.startsWith("https://"),
      "Cover image must be a path or a full URL"
    ),
  gallery: z.string().optional(),
  technologies: z.string().optional(),
  metricsJson: z.string().optional(),
  timelineJson: z.string().optional(),
  featured: z.boolean(),
  published: z.boolean(),
});

async function parseCaseStudyForm(formData: FormData) {
  const title = String(formData.get("title") ?? "");
  const slugInput = String(formData.get("slug") ?? "");
  const image = await resolveUploadedImage(formData, {
    fileField: "coverImageFile",
    existingField: "coverImage",
    subdir: "case-studies",
    requiredMessage: "Please upload a cover image",
  });
  if ("error" in image) {
    return {
      success: false as const,
      fieldErrors: { coverImage: [image.error] },
    };
  }

  const parsed = caseStudySchema.safeParse({
    title,
    slug: slugInput || toSlug(title),
    client: formData.get("client"),
    category: formData.get("category"),
    excerpt: formData.get("excerpt"),
    description: formData.get("description"),
    coverImage: image.url,
    gallery: formData.get("gallery"),
    technologies: formData.get("technologies"),
    metricsJson: formData.get("metricsJson"),
    timelineJson: formData.get("timelineJson"),
    featured: checkboxValue(formData.get("featured")),
    published: checkboxValue(formData.get("published")),
  });

  if (!parsed.success) {
    return {
      success: false as const,
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  return { success: true as const, data: parsed.data };
}

function caseStudyPayload(data: z.infer<typeof caseStudySchema>, withDate = false) {
  return {
    title: data.title,
    slug: toSlug(data.slug),
    client: data.client,
    category: data.category,
    excerpt: data.excerpt,
    description: data.description,
    coverImage: data.coverImage,
    gallery: linesToArray(data.gallery),
    technologies: commaToArray(data.technologies),
    metrics: parseJsonField(data.metricsJson, [] as { label: string; value: string }[]),
    timeline: parseJsonField(
      data.timelineJson,
      [] as { phase: string; description: string; date: string }[]
    ),
    featured: data.featured,
    published: data.published,
    ...(withDate ? { completedAt: new Date() } : {}),
  };
}

function revalidateCaseStudyPaths(slug: string) {
  revalidatePath("/admin/case-studies");
  revalidatePath("/case-studies");
  revalidatePath(`/case-studies/${slug}`);
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
}

export async function createCaseStudy(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    const parsed = await parseCaseStudyForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.fieldErrors };
    }
    await connectDB();
    const payload = caseStudyPayload(parsed.data, true);
    const existing = await CaseStudy.findOne({ slug: payload.slug });
    if (existing) return { error: "A case study with this slug already exists" };
    await CaseStudy.create(payload);
    revalidateCaseStudyPaths(payload.slug);
    redirect("/admin/case-studies");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to create case study" };
  }
}

export async function updateCaseStudy(
  id: string,
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid case study ID" };
    const parsed = await parseCaseStudyForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.fieldErrors };
    }
    await connectDB();
    const payload = caseStudyPayload(parsed.data);
    const conflict = await CaseStudy.findOne({ slug: payload.slug, _id: { $ne: id } });
    if (conflict) return { error: "A case study with this slug already exists" };
    const updated = await CaseStudy.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) return { error: "Case study not found" };
    revalidateCaseStudyPaths(payload.slug);
    redirect("/admin/case-studies");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to update case study" };
  }
}

export async function deleteCaseStudy(id: string): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid case study ID" };
    await connectDB();
    const doc = await CaseStudy.findByIdAndDelete(id);
    if (!doc) return { error: "Case study not found" };
    revalidateCaseStudyPaths(doc.slug);
    revalidatePath("/admin/case-studies");
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to delete case study" };
  }
}
