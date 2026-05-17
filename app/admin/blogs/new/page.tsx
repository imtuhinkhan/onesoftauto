import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogForm } from "@/components/admin/blog-form";
import { createBlog } from "@/actions/admin/blogs";

export default async function NewBlogPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  return (
    <div className="p-6 lg:p-8">
      <Link href="/admin/blogs" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to blogs
      </Link>
      <h1 className="font-display text-3xl font-bold mb-8">New blog post</h1>
      <BlogForm action={createBlog} />
    </div>
  );
}
