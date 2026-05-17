"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Testimonial } from "@/models/Testimonial";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import { checkboxValue } from "@/lib/admin/parse";
import type { ActionState } from "@/lib/admin/action-state";
import mongoose from "mongoose";

const testimonialSchema = z.object({
  quote: z.string().min(1, "Quote is required"),
  author: z.string().min(1, "Author is required"),
  role: z.string().min(1, "Role is required"),
  company: z.string().min(1, "Company is required"),
  avatar: z.string().url().optional().or(z.literal("")),
  rating: z.coerce.number().min(1).max(5),
  published: z.boolean(),
});

function parseTestimonialForm(formData: FormData) {
  return testimonialSchema.safeParse({
    quote: formData.get("quote"),
    author: formData.get("author"),
    role: formData.get("role"),
    company: formData.get("company"),
    avatar: String(formData.get("avatar") ?? ""),
    rating: formData.get("rating") ?? 5,
    published: checkboxValue(formData.get("published")),
  });
}

function revalidateTestimonialPaths() {
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
}

export async function createTestimonial(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    const parsed = parseTestimonialForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> };
    }
    await connectDB();
    await Testimonial.create({
      ...parsed.data,
      avatar: parsed.data.avatar || undefined,
    });
    revalidateTestimonialPaths();
    redirect("/admin/testimonials");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to create testimonial" };
  }
}

export async function updateTestimonial(
  id: string,
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid testimonial ID" };
    const parsed = parseTestimonialForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> };
    }
    await connectDB();
    const updated = await Testimonial.findByIdAndUpdate(
      id,
      { ...parsed.data, avatar: parsed.data.avatar || undefined },
      { new: true }
    );
    if (!updated) return { error: "Testimonial not found" };
    revalidateTestimonialPaths();
    redirect("/admin/testimonials");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to update testimonial" };
  }
}

export async function deleteTestimonial(id: string): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid testimonial ID" };
    await connectDB();
    const doc = await Testimonial.findByIdAndDelete(id);
    if (!doc) return { error: "Testimonial not found" };
    revalidateTestimonialPaths();
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to delete testimonial" };
  }
}
