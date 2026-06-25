import { cache } from "react";
import { unstable_cache } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import { Service as ServiceModel } from "@/models/Service";
import { Blog as BlogModel } from "@/models/Blog";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { Testimonial as TestimonialModel } from "@/models/Testimonial";
import { Client as ClientModel } from "@/models/Client";
import type { Service, BlogPost, CaseStudy, Testimonial } from "@/types";
import type { ClientBrand } from "@/types/client";

export type HomePageData = {
  services: Service[];
  caseStudies: CaseStudy[];
  testimonials: Testimonial[];
  clients: ClientBrand[];
  blogs: BlogPost[];
};

async function loadHomeSeedData(): Promise<HomePageData> {
  const seed = await import("@/lib/data/seed");
  return {
    services: seed.seedServices as Service[],
    caseStudies: seed.seedCaseStudies as CaseStudy[],
    testimonials: seed.seedTestimonials as Testimonial[],
    clients: seed.clientLogos.map((c, i) => ({
      ...c,
      order: i,
      published: true,
    })),
    blogs: seed.seedBlogs as BlogPost[],
  };
}

async function fetchHomePageData(): Promise<HomePageData> {
  try {
    if (!process.env.MONGODB_URI) {
      return loadHomeSeedData();
    }

    await connectDB();

    const [services, caseStudies, testimonials, clients, blogs] = await Promise.all([
      ServiceModel.find({ published: true })
        .select("slug title shortDescription icon order")
        .sort("order")
        .lean(),
      CaseStudyModel.find({ published: true })
        .select("slug title client category excerpt coverImage featured completedAt")
        .sort({ completedAt: -1 })
        .lean(),
      TestimonialModel.find({ published: true })
        .select("quote author role company avatar rating")
        .lean(),
      ClientModel.find({ published: true })
        .select("name logo order")
        .sort("order")
        .lean(),
      BlogModel.find({ published: true })
        .select("slug title excerpt coverImage category featured publishedAt readTime")
        .sort({ publishedAt: -1 })
        .limit(6)
        .lean(),
    ]);

    return JSON.parse(
      JSON.stringify({ services, caseStudies, testimonials, clients, blogs })
    ) as HomePageData;
  } catch {
    return loadHomeSeedData();
  }
}

const getCachedHomePageData = unstable_cache(
  fetchHomePageData,
  ["home-page-data"],
  { revalidate: 60 }
);

export const getHomePageData = cache(getCachedHomePageData);
