import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAdminBlogs } from "@/lib/data/admin";
import { ResourceList } from "@/components/admin/resource-list";
import { deleteBlog } from "@/actions/admin/blogs";

export default async function AdminBlogsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  let error: string | null = null;
  let blogs: Awaited<ReturnType<typeof getAdminBlogs>> = [];
  try {
    blogs = await getAdminBlogs();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load blogs";
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold">Blog Posts</h1>
          <p className="text-sm text-muted-foreground mt-1">{blogs.length} posts</p>
        </div>
        <Button variant="gradient" asChild>
          <Link href="/admin/blogs/new">
            <Plus className="h-4 w-4" />
            Add blog
          </Link>
        </Button>
      </div>
      {error ? (
        <p className="text-destructive">{error}</p>
      ) : (
        <ResourceList
          emptyMessage="No blog posts yet. Create your first post."
          items={blogs.map((blog) => ({
            id: String(blog._id),
            title: blog.title,
            subtitle: blog.excerpt,
            badges: [
              { label: blog.category, variant: "outline" as const },
              ...(blog.featured ? [{ label: "Featured", variant: "gradient" as const }] : []),
              ...(!blog.published ? [{ label: "Draft", variant: "secondary" as const }] : []),
            ],
            publicHref: blog.published ? `/blog/${blog.slug}` : undefined,
            editHref: `/admin/blogs/${blog._id}/edit`,
            deleteAction: deleteBlog.bind(null, String(blog._id)),
            deleteRedirect: "/admin/blogs",
            deleteLabel: "blog post",
          }))}
        />
      )}
    </div>
  );
}
