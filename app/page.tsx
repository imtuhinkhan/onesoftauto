import { Hero } from "@/components/home/hero";
import {
  ServicesPreview,
  PortfolioPreview,
  TestimonialsSection,
  ProcessSection,
  FAQSection,
  CTASection,
} from "@/components/home/sections";
import { getServices, getCaseStudies, getTestimonials } from "@/lib/data";

export default async function HomePage() {
  const [services, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
  ]);

  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesPreview services={services} />
      <ProcessSection />
      <PortfolioPreview caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection />
      <CTASection />
    </div>
  );
}
