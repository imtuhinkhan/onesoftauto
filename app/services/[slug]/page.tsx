import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, getServices } from "@/lib/data";
import { getServiceIcon } from "@/lib/service-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { ServiceDetailSections } from "@/components/services/service-detail-sections";
import { ServiceProcess } from "@/components/services/service-process";
import { CTASection } from "@/components/home/sections";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = getServiceIcon(service.icon);
  const otherServices = (await getServices()).filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative section-padding-hero section-padding-hero-nav overflow-hidden">
        <GradientBlob />
        <div className="container-custom relative z-10">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
          </Button>
          <div className="max-w-3xl">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center mb-6 ring-1 ring-primary/20">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            <Button variant="gradient" size="lg" className="mt-8 mb-10 lg:mb-12" asChild>
              <Link href="/contact">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ServiceDetailSections service={service} />

      <ServiceProcess process={service.process} />

      {service.faqs.length > 0 && (
        <section className="section-padding section-padding-tight-top">
          <div className="container-custom max-w-3xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {otherServices.length > 0 && (
        <section className="section-padding border-t border-border/50 bg-card/20">
          <div className="container-custom">
            <h2 className="font-display text-2xl font-bold mb-8">Other Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((s) => {
                const OtherIcon = getServiceIcon(s.icon);
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group">
                    <Card className="glass border-border/50 hover:shadow-lg transition-all h-full">
                      <CardContent className="p-5">
                        <OtherIcon className="h-5 w-5 text-primary mb-3" />
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {s.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {s.shortDescription}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
