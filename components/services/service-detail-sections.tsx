import { Sparkles } from "lucide-react";
import { getServiceBenefits } from "@/lib/service-sections";
import type { Service } from "@/types";

export function ServiceDetailSections({ service }: { service: Service }) {
  const benefits = getServiceBenefits(service.slug, service.title);

  if (benefits.items.length === 0) return null;

  return (
    <section className="section-padding section-padding-tight-top">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold">{benefits.title}</h2>
          <p className="mt-3 text-muted-foreground">{benefits.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {benefits.items.map((item) => (
            <div
              key={item}
              className="flex gap-3 items-start p-5 rounded-2xl border border-border/50 bg-gradient-to-br from-indigo-500/5 to-pink-500/5"
            >
              <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
