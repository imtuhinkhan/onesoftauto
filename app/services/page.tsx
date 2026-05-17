import Link from "next/link";
import { getServices } from "@/lib/data";
import { getServiceIcon } from "@/lib/service-icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { CTASection } from "@/components/home/sections";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, SaaS, WordPress, server administration, cybersecurity, mobile apps, AI, and more.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="relative section-padding page-hero-offset overflow-hidden">
        <GradientBlob />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <Badge variant="gradient" className="mb-4">
            Services
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            Digital Solutions That <span className="gradient-text">Scale</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            From concept to launch — we deliver premium software across every digital channel.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="h-full glass border-border/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-2 flex-1 line-clamp-3">
                      {service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium mt-4 text-muted-foreground group-hover:text-primary transition-colors">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
