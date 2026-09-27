import { Hero2 } from "@/components/home/hero";
import { About2 } from "@/components/home/about";
import { ProcessSection } from "@/components/home/process";
import { ContactCTA } from "@/components/home/contact-cta";
import { TestimonialsSection } from "@/components/home/testimonials";
import { HtmlBlock } from "@/components/v2/html-block";
import { servicesHtml } from "@/components/v2/html/services";
import { workHomeHtml } from "@/components/v2/html/workHome";
import { getSiteSettings } from "@/lib/site-settings";

export const revalidate = 60;

export default async function HomePage() {
  const s = await getSiteSettings();

  return (
    <>
      <Hero2
        eyebrow={s.heroEyebrow}
        headline={s.heroHeadline}
        headlineAccent={s.heroHeadlineAccent}
        subcopy={s.heroSubcopy}
        calendlyUrl={s.calendlyUrl || undefined}
      />
      <About2
        lead={s.aboutLead}
        leadEm={s.aboutLeadEm}
        points={s.aboutPoints}
      />
      <HtmlBlock html={servicesHtml} />
      <HtmlBlock html={workHomeHtml} />
      <ProcessSection subcopy={s.processSubcopy} />
      <TestimonialsSection />
      <ContactCTA
        headline={s.contactHeadline}
        subcopy={s.contactSubcopy}
        calendlyUrl={s.calendlyUrl || undefined}
        email={s.email || undefined}
        studio={s.address ? `${s.address} · Mon–Fri, 9am–6pm GMT+6` : undefined}
      />
    </>
  );
}
