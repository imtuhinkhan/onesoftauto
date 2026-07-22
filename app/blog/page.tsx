import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { formatDate } from "@/lib/utils";
import { getPageMetadata } from "@/lib/seo/page";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Blog",
    description: "Insights on software development, SaaS, AI, and digital strategy.",
    path: "/blog",
  });
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  const featured = blogs.filter((b) => b.featured);
  const rest = blogs.filter((b) => !b.featured);

  return (
    <>
      <section className="relative section-padding page-hero-offset overflow-hidden">
        <GradientBlob />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="gradient" className="mb-4">Blog</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Insights & <span className="gradient-text">Ideas</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Expert perspectives on building software that scales.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom space-y-16">
          {featured.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-bold mb-8">Featured</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featured.map((post, i) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card className="overflow-hidden glass border-border/50 h-full hover:shadow-xl transition-all">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={i < 2}
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                        <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                        <p className="text-xs text-muted-foreground mt-4">
                          {formatDate(post.publishedAt)} · {post.readTime} min read
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.length === 0 && featured.length === 0 ? (
              <p className="text-muted-foreground col-span-full text-center py-12">
                No blog posts yet. Check back soon for new insights.
              </p>
            ) : (
              rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="overflow-hidden glass border-border/50 h-full hover:shadow-lg transition-all">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-2 text-xs">{post.category}</Badge>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-3">
                      {formatDate(post.publishedAt)} · {post.readTime} min
                    </p>
                  </CardContent>
                </Card>
              </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
