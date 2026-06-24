import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogBySlug, getBlogs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { getPageMetadata, getArticleMetadata } from "@/lib/seo/page";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Blog" };
  return getArticleMetadata({
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    path: `/blog/${slug}`,
    image: post.coverImage,
    author: post.author,
    publishedAt: post.publishedAt,
    tags: post.tags,
    category: post.category,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  const allBlogs = await getBlogs();
  const related = allBlogs
    .filter((b) => b.slug !== slug && b.category === post.category)
    .slice(0, 3);

  return (
    <article>
      <section className="section-padding page-hero-offset">
        <div className="container-custom max-w-3xl">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </Button>
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">{post.title}</h1>
          <p className="mt-4 text-muted-foreground">
            By {post.author} · {formatDate(post.publishedAt)} · {post.readTime} min read
          </p>
          <div className="relative aspect-[21/9] mt-8 rounded-2xl overflow-hidden">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
          </div>
          <div
            className="prose prose-invert max-w-none mt-10 prose-headings:font-display prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="flex flex-wrap gap-2 mt-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-card/30 border-t border-border/50">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block p-4 rounded-xl glass border border-border/50 hover:shadow-lg transition-all">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
