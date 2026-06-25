import { unstable_cache } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import { Service as ServiceModel } from "@/models/Service";
import { Blog as BlogModel } from "@/models/Blog";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { Testimonial as TestimonialModel } from "@/models/Testimonial";
import { Client as ClientModel } from "@/models/Client";
import { Lead as LeadModel } from "@/models/Lead";
import type { Service, BlogPost, CaseStudy, Testimonial } from "@/types";
import type { ClientBrand } from "@/types/client";

async function tryDb<T>(fn: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
  try {
    if (!process.env.MONGODB_URI) return fallback();
    await connectDB();
    return await fn();
  } catch {
    return fallback();
  }
}

async function loadSeed() {
  return import("@/lib/data/seed");
}

const getCachedServices = unstable_cache(
  () =>
    tryDb(
      async () => {
        const docs = await ServiceModel.find({ published: true }).sort("order").lean();
        return JSON.parse(JSON.stringify(docs)) as Service[];
      },
      async () => (await loadSeed()).seedServices as Service[]
    ),
  ["services-published"],
  { revalidate: 60 }
);

const getCachedBlogs = unstable_cache(
  () =>
    tryDb(
      async () => {
        const docs = await BlogModel.find({ published: true })
          .sort({ publishedAt: -1 })
          .lean();
        return JSON.parse(JSON.stringify(docs)) as BlogPost[];
      },
      async () => (await loadSeed()).seedBlogs as BlogPost[]
    ),
  ["blogs-published"],
  { revalidate: 60 }
);

const getCachedCaseStudies = unstable_cache(
  () =>
    tryDb(
      async () => {
        const docs = await CaseStudyModel.find({ published: true })
          .sort({ completedAt: -1 })
          .lean();
        return JSON.parse(JSON.stringify(docs)) as CaseStudy[];
      },
      async () => (await loadSeed()).seedCaseStudies as CaseStudy[]
    ),
  ["case-studies-published"],
  { revalidate: 60 }
);

const getCachedTestimonials = unstable_cache(
  () =>
    tryDb(
      async () => {
        const docs = await TestimonialModel.find({ published: true }).lean();
        return JSON.parse(JSON.stringify(docs)) as Testimonial[];
      },
      async () => (await loadSeed()).seedTestimonials as Testimonial[]
    ),
  ["testimonials-published"],
  { revalidate: 60 }
);

const getCachedClients = unstable_cache(
  () =>
    tryDb(
      async () => {
        const docs = await ClientModel.find({ published: true }).sort("order").lean();
        return JSON.parse(JSON.stringify(docs)) as ClientBrand[];
      },
      async () => {
        const { clientLogos } = await loadSeed();
        return clientLogos.map((c, i) => ({
          ...c,
          order: i,
          published: true,
        }));
      }
    ),
  ["clients-published"],
  { revalidate: 60 }
);

export async function getServices(): Promise<Service[]> {
  return getCachedServices();
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find((s) => s.slug === slug) ?? null;
}

export async function getBlogs(): Promise<BlogPost[]> {
  return getCachedBlogs();
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug) ?? null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return getCachedCaseStudies();
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const studies = await getCaseStudies();
  return studies.find((c) => c.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return getCachedTestimonials();
}

export async function getClients(): Promise<ClientBrand[]> {
  return getCachedClients();
}

export async function getLeads() {
  return tryDb(
    async () => {
      const docs = await LeadModel.find().sort({ createdAt: -1 }).lean();
      return JSON.parse(JSON.stringify(docs));
    },
    async () => []
  );
}

export async function getDashboardStats() {
  const [services, blogs, caseStudies, leads] = await Promise.all([
    getServices(),
    getBlogs(),
    getCaseStudies(),
    getLeads(),
  ]);
  return {
    services: services.length,
    blogs: blogs.length,
    caseStudies: caseStudies.length,
    leads: leads.length,
    newLeads: leads.filter((l: { status: string }) => l.status === "new").length,
  };
}
