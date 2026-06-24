import { Hero } from "@/components/home/hero";
import { ClientsSection } from "@/components/home/clients-section";
import {
  ServicesPreview,
  PortfolioPreview,
  BlogPreview,
  TestimonialsSection,
  ProcessSection,
  FAQSection,
  CTASection,
} from "@/components/home/sections";
import { getServices, getCaseStudies, getTestimonials, getClients, getBlogs } from "@/lib/data";

export default async function HomePage() {
  const [services, caseStudies, testimonials, clients, blogs] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
    getClients(),
    getBlogs(),
  ]);

  return (
    <div className="flex flex-col">
      <Hero />
      <ServicesPreview services={services} />
      <ProcessSection />
      <PortfolioPreview caseStudies={caseStudies} />
      <ClientsSection clients={clients} />
      <TestimonialsSection testimonials={testimonials} />
      <BlogPreview blogs={blogs} />
      <FAQSection />
      <CTASection />
    </div>
  );
}
