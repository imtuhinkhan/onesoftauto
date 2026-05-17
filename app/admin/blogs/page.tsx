import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getBlogs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default async function AdminBlogsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const blogs = await getBlogs();

  return (
    <div className="p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-display text-3xl font-bold">Blog Posts</h1>
        <p className="text-sm text-muted-foreground">{blogs.length} posts</p>
      </div>
      <div className="space-y-3">
        {blogs.map((blog) => (
          <Card key={blog.slug} className="glass border-border/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{blog.title}</p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">{blog.category}</Badge>
                  {blog.featured && <Badge variant="gradient" className="text-xs">Featured</Badge>}
                </div>
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/blog/${blog.slug}`} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
