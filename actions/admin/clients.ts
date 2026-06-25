"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Client } from "@/models/Client";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import { checkboxValue } from "@/lib/admin/parse";
import type { ActionState } from "@/lib/admin/action-state";
import { saveUploadedImage } from "@/lib/admin/upload-image";
import mongoose from "mongoose";

const clientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  logo: z.string().min(1, "Logo is required"),
  website: z.string().url().optional().or(z.literal("")),
  order: z.coerce.number().min(0),
  published: z.boolean(),
});

async function resolveClientLogo(formData: FormData): Promise<
  | { logo: string }
  | { error: string; field: "logo" }
> {
  const file = formData.get("logoFile");
  if (file instanceof File && file.size > 0) {
    try {
      const logo = await saveUploadedImage(file, "clients");
      return { logo };
    } catch (e) {
      return {
        error: e instanceof Error ? e.message : "Failed to upload logo",
        field: "logo",
      };
    }
  }

  const existingLogo = String(formData.get("logo") ?? "").trim();
  if (existingLogo) return { logo: existingLogo };

  return { error: "Please upload a client logo", field: "logo" };
}

async function parseClientForm(formData: FormData) {
  const logoResult = await resolveClientLogo(formData);
  if ("error" in logoResult) {
    return {
      success: false as const,
      fieldErrors: { [logoResult.field]: [logoResult.error] },
    };
  }

  const parsed = clientSchema.safeParse({
    name: formData.get("name"),
    logo: logoResult.logo,
    website: String(formData.get("website") ?? ""),
    order: formData.get("order") ?? 0,
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
    const parsed = await parseClientForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.fieldErrors };
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
    const parsed = await parseClientForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.fieldErrors };
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
