"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Client } from "@/models/Client";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import { checkboxValue } from "@/lib/admin/parse";
import type { ActionState } from "@/lib/admin/action-state";
import mongoose from "mongoose";

const clientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  logo: z.string().min(1, "Logo URL or path is required"),
  website: z.string().url().optional().or(z.literal("")),
  order: z.coerce.number().min(0),
  published: z.boolean(),
});

function parseClientForm(formData: FormData) {
  return clientSchema.safeParse({
    name: formData.get("name"),
    logo: formData.get("logo"),
    website: String(formData.get("website") ?? ""),
    order: formData.get("order") ?? 0,
    published: checkboxValue(formData.get("published")),
  });
}

function revalidateClientPaths() {
  revalidatePath("/admin/clients");
  revalidatePath("/");
}

export async function createClient(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    const parsed = parseClientForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> };
    }
    await connectDB();
    await Client.create({
      ...parsed.data,
      website: parsed.data.website || undefined,
    });
    revalidateClientPaths();
    redirect("/admin/clients");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to create client" };
  }
}

export async function updateClient(
  id: string,
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid client ID" };
    const parsed = parseClientForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]> };
    }
    await connectDB();
    const updated = await Client.findByIdAndUpdate(
      id,
      { ...parsed.data, website: parsed.data.website || undefined },
      { new: true }
    );
    if (!updated) return { error: "Client not found" };
    revalidateClientPaths();
    redirect("/admin/clients");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to update client" };
  }
}

export async function deleteClient(id: string): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid client ID" };
    await connectDB();
    const doc = await Client.findByIdAndDelete(id);
    if (!doc) return { error: "Client not found" };
    revalidateClientPaths();
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to delete client" };
  }
}
