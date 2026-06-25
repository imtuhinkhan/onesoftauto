import { Suspense } from "react";
import { Hero } from "@/components/home/hero";
import { ProcessSection, FAQSection, CTASection } from "@/components/home/sections";
import {
  HomeServicesPreview,
  HomePortfolioPreview,
  HomeClientsSection,
  HomeTestimonialsSection,
  HomeBlogPreview,
} from "@/components/home/home-async-sections";
import {
  SectionSkeleton,
  ClientsSkeleton,
  TestimonialsSkeleton,
} from "@/components/home/section-skeletons";

export const revalidate = 60;

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Suspense fallback={<SectionSkeleton cards={4} />}>
        <HomeServicesPreview />
      </Suspense>
      <ProcessSection />
      <Suspense fallback={<SectionSkeleton cards={3} />}>
        <HomePortfolioPreview />
      </Suspense>
      <Suspense fallback={<ClientsSkeleton />}>
        <HomeClientsSection />
      </Suspense>
      <Suspense fallback={<TestimonialsSkeleton />}>
        <HomeTestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton cards={3} />}>
        <HomeBlogPreview />
      </Suspense>
      <FAQSection />
      <CTASection />
    </div>
  );
}
