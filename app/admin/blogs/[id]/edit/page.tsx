import { auth } from "@/auth";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogForm } from "@/components/admin/blog-form";
import { updateBlog, deleteBlog } from "@/actions/admin/blogs";
import { getAdminBlogById } from "@/lib/data/admin";
import { DeleteButton } from "@/components/admin/delete-button";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) redirect("/admin/login");
  const { id } = await params;
  let blog;
  try {
    blog = await getAdminBlogById(id);
  } catch {
    notFound();
  }
  if (!blog) notFound();

  return (
    <div className="p-6 lg:p-8">
      <Link href="/admin/blogs" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to blogs
      </Link>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h1 className="font-display text-3xl font-bold">Edit blog post</h1>
        <DeleteButton onDelete={deleteBlog.bind(null, id)} redirectTo="/admin/blogs" label="blog post" />
      </div>
      <BlogForm action={updateBlog.bind(null, id)} blog={blog} />
    </div>
  );
}
