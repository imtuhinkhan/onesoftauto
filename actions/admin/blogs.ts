"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Blog } from "@/models/Blog";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import { checkboxValue, commaToArray, toSlug } from "@/lib/admin/parse";
import { resolveUploadedImage } from "@/lib/admin/resolve-image";
import type { ActionState } from "@/lib/admin/action-state";
import mongoose from "mongoose";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  coverImage: z
    .string()
    .min(1, "Cover image is required")
    .refine(
      (v) => v.startsWith("/") || v.startsWith("http://") || v.startsWith("https://"),
      "Cover image must be a path or a full URL"
    ),
  author: z.string().min(1, "Author is required"),
  authorAvatar: z.string().url().optional().or(z.literal("")),
  category: z.string().min(1, "Category is required"),
  tags: z.string().optional(),
  featured: z.boolean(),
  published: z.boolean(),
  readTime: z.coerce.number().min(1),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

async function parseBlogForm(formData: FormData) {
  const title = String(formData.get("title") ?? "");
  const slugInput = String(formData.get("slug") ?? "");
  const image = await resolveUploadedImage(formData, {
    fileField: "coverImageFile",
    existingField: "coverImage",
    subdir: "blogs",
    requiredMessage: "Please upload a cover image",
  });
  if ("error" in image) {
    return {
      success: false as const,
      fieldErrors: { coverImage: [image.error] },
    };
  }

  const parsed = blogSchema.safeParse({
    title,
    slug: slugInput || toSlug(title),
    excerpt: formData.get("excerpt"),
    content: formData.get("content"),
    coverImage: image.url,
    author: formData.get("author"),
    authorAvatar: String(formData.get("authorAvatar") ?? ""),
    category: formData.get("category"),
    tags: formData.get("tags"),
    featured: checkboxValue(formData.get("featured")),
    published: checkboxValue(formData.get("published")),
    readTime: formData.get("readTime") ?? 5,
    seoTitle: String(formData.get("seoTitle") ?? ""),
    seoDescription: String(formData.get("seoDescription") ?? ""),
  });

  if (!parsed.success) {
    return {
      success: false as const,
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  return { success: true as const, data: parsed.data };
}

function blogPayload(data: z.infer<typeof blogSchema>, withDate = false) {
  return {
    ...data,
    slug: toSlug(data.slug),
    tags: commaToArray(data.tags),
    authorAvatar: data.authorAvatar || undefined,
    seoTitle: data.seoTitle || undefined,
    seoDescription: data.seoDescription || undefined,
    ...(withDate ? { publishedAt: new Date() } : {}),
  };
}

function revalidateBlogPaths(slug: string) {
  revalidatePath("/admin/blogs");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
}

export async function createBlog(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    const parsed = await parseBlogForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.fieldErrors };
    }
    await connectDB();
    const payload = blogPayload(parsed.data, true);
    const existing = await Blog.findOne({ slug: payload.slug });
    if (existing) return { error: "A blog with this slug already exists" };
    await Blog.create(payload);
    revalidateBlogPaths(payload.slug);
    redirect("/admin/blogs");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to create blog" };
  }
}

export async function updateBlog(
  id: string,
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid blog ID" };
    const parsed = await parseBlogForm(formData);
    if (!parsed.success) {
      return { fieldErrors: parsed.fieldErrors };
    }
    await connectDB();
    const payload = blogPayload(parsed.data);
    const conflict = await Blog.findOne({ slug: payload.slug, _id: { $ne: id } });
    if (conflict) return { error: "A blog with this slug already exists" };
    const updated = await Blog.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) return { error: "Blog not found" };
    revalidateBlogPaths(payload.slug);
    redirect("/admin/blogs");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to update blog" };
  }
}

export async function deleteBlog(id: string): Promise<ActionState> {
  try {
    await requireAdmin();
    if (!mongoose.Types.ObjectId.isValid(id)) return { error: "Invalid blog ID" };
    await connectDB();
    const doc = await Blog.findByIdAndDelete(id);
    if (!doc) return { error: "Blog not found" };
    revalidateBlogPaths(doc.slug);
    revalidatePath("/admin/blogs");
    return { success: true };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to delete blog" };
  }
}
