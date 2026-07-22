import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, ArrowLeft, ArrowRight } from "lucide-react";
import { getBlogBySlug, getBlogs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { getArticleMetadata } from "@/lib/seo/page";

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
    .filter((b) => b.slug !== slug)
    .sort((a, b) => {
      const sameCategory = Number(b.category === post.category) - Number(a.category === post.category);
      if (sameCategory !== 0) return sameCategory;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    })
    .slice(0, 3);

  return (
    <article>
      <section className="relative section-padding page-hero-offset overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 brand-gradient-bg-soft opacity-60" />
        <div className="container-custom max-w-4xl">
          <Button variant="ghost" size="sm" asChild className="-ml-2 mb-8 text-muted-foreground hover:text-foreground">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="gradient">{post.category}</Badge>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" />
                {post.readTime} min read
              </span>
            </div>
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {post.excerpt}
          </p>
          <p className="mt-6 text-sm font-medium text-foreground">
            By {post.author}
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-custom max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 shadow-xl shadow-black/5 dark:shadow-black/30">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 1280px) 100vw, 1100px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding pt-10 sm:pt-14">
        <div className="container-custom max-w-3xl">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.tags.length > 0 && (
            <div className="mt-12 border-t border-border/60 pt-8">
              <p className="mb-3 text-sm font-medium text-muted-foreground">Tags</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 sm:p-6">
            <div>
              <p className="font-display text-lg font-semibold">Want something like this built?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your product and we&apos;ll map the next steps.
              </p>
            </div>
            <Button variant="gradient" asChild>
              <Link href="/contact">
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding border-t border-border/50 bg-card/30">
          <div className="container-custom">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <Badge variant="gradient" className="mb-3">
                  Keep reading
                </Badge>
                <h2 className="font-display text-2xl font-bold sm:text-3xl">Related Articles</h2>
              </div>
              <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
                <Link href="/blog">
                  View all
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <Card className="h-full overflow-hidden border-border/50 transition-shadow hover:shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={r.coverImage}
                        alt={r.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge variant="secondary" className="mb-3">
                        {r.category}
                      </Badge>
                      <h3 className="font-semibold leading-snug transition-colors group-hover:text-primary">
                        {r.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
