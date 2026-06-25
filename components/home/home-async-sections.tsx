import { getHomePageData } from "@/lib/data/home";
import { ClientsSection } from "@/components/home/clients-section";
import {
  ServicesPreview,
  PortfolioPreview,
  BlogPreview,
  TestimonialsSection,
} from "@/components/home/sections";

export async function HomeServicesPreview() {
  const { services } = await getHomePageData();
  return <ServicesPreview services={services} />;
}

export async function HomePortfolioPreview() {
  const { caseStudies } = await getHomePageData();
  return <PortfolioPreview caseStudies={caseStudies} />;
}

export async function HomeClientsSection() {
  const { clients } = await getHomePageData();
  return <ClientsSection clients={clients} />;
}

export async function HomeTestimonialsSection() {
  const { testimonials } = await getHomePageData();
  return <TestimonialsSection testimonials={testimonials} />;
}

export async function HomeBlogPreview() {
  const { blogs } = await getHomePageData();
  return <BlogPreview blogs={blogs} />;
}
