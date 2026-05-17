import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getPageMetadata } from "@/lib/seo/page";

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study" };
  return getPageMetadata({
    title: study.title,
    description: study.excerpt,
    path: `/case-studies/${slug}`,
    image: study.coverImage,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <article>
      <section className="section-padding page-hero-offset">
        <div className="container-custom">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/case-studies">
              <ArrowLeft className="h-4 w-4" /> Back to Case Studies
            </Link>
          </Button>
          <Badge className="mb-4">{study.category}</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold max-w-4xl">{study.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{study.client}</p>
          <div className="relative aspect-[21/9] mt-10 rounded-2xl overflow-hidden">
            <Image src={study.coverImage} alt={study.title} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {study.metrics.map((m) => (
              <Card key={m.label} className="glass text-center border-border/50">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold gradient-text">{m.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{m.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">{study.description}</p>
            {study.beforeImage && study.afterImage && (
              <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                <div>
                  <p className="text-sm font-medium mb-2">Before</p>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image src={study.beforeImage} alt="Before" fill className="object-cover" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">After</p>
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image src={study.afterImage} alt="After" fill className="object-cover" />
                  </div>
                </div>
              </div>
            )}
            {study.gallery.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4 my-10 not-prose">
                {study.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-xl overflow-hidden">
                    <Image src={img} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <aside className="space-y-6">
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Timeline</h3>
                <ol className="space-y-4">
                  {study.timeline.map((item) => (
                    <li key={item.phase} className="border-l-2 border-primary pl-4">
                      <p className="font-medium text-sm">{item.phase}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
            {study.testimonial && (
              <Card className="glass border-border/50">
                <CardContent className="p-6">
                  <p className="italic text-muted-foreground">&ldquo;{study.testimonial.quote}&rdquo;</p>
                  <p className="mt-4 font-semibold text-sm">{study.testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{study.testimonial.role}</p>
                </CardContent>
              </Card>
            )}
          </aside>
        </div>
      </section>
    </article>
  );
}
