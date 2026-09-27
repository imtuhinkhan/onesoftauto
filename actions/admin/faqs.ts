"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Faq } from "@/models/Faq";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import { checkboxValue } from "@/lib/admin/parse";
import type { ActionState } from "@/lib/admin/action-state";
import mongoose from "mongoose";

const faqSchema = z.object({
  group: z.string().min(1, "Group is required"),
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
  order: z.coerce.number().min(0),
  published: z.boolean(),
});

function parseFaqForm(formData: FormData) {
  return faqSchema.safeParse({
    group: formData.get("group"),
    question: formData.get("question"),
    answer: formData.get("answer"),
    order: formData.get("order") ?? 0,
    published: checkboxValue(formData.get("published")),
  });
}

function revalidateFaqPaths() {
  revalidatePath("/admin/faqs");
  revalidatePath("/");
}

export async function createFaq(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    const parsed = parseFaqForm(formData);
    if (!parsed.success) {
      return {
        fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      };
    }
    await connectDB();
    await Faq.create(parsed.data);
    revalidateFaqPaths();
    redirect("/admin/faqs");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to create FAQ" };
  }
}

export async function updateFaq(
  id: string,
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid FAQ ID" };
    const parsed = parseFaqForm(formData);
    if (!parsed.success) {
      return {
        fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      };
    }
    await connectDB();
    const updated = await Faq.findByIdAndUpdate(id, parsed.data, { new: true });
    if (!updated) return { error: "FAQ not found" };
    revalidateFaqPaths();
    redirect("/admin/faqs");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to update FAQ" };
  }
}

export async function deleteFaq(id: string): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid FAQ ID" };
    await connectDB();
    const doc = await Faq.findByIdAndDelete(id);
    if (!doc) return { error: "FAQ not found" };
    revalidateFaqPaths();
    revalidatePath("/admin/faqs");
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to delete FAQ" };
  }
}
