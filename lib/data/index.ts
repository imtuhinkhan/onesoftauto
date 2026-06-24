import { connectDB } from "@/lib/mongodb";
import { Service as ServiceModel } from "@/models/Service";
import { Blog as BlogModel } from "@/models/Blog";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { Testimonial as TestimonialModel } from "@/models/Testimonial";
import { Client as ClientModel } from "@/models/Client";
import { Lead as LeadModel } from "@/models/Lead";
import {
  seedServices,
  seedBlogs,
  seedCaseStudies,
  seedTestimonials,
  clientLogos,
} from "@/lib/data/seed";
import type { Service, BlogPost, CaseStudy, Testimonial } from "@/types";
import type { ClientBrand } from "@/types/client";

async function tryDb<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    if (!process.env.MONGODB_URI) return fallback;
    await connectDB();
    return await fn();
  } catch {
    return fallback;
  }
}

export async function getServices(): Promise<Service[]> {
  return tryDb(
    async () => {
      const docs = await ServiceModel.find({ published: true }).sort("order").lean();
      return JSON.parse(JSON.stringify(docs)) as Service[];
    },
    seedServices as Service[]
  );
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getServices();
  return services.find((s) => s.slug === slug) ?? null;
}

export async function getBlogs(): Promise<BlogPost[]> {
  return tryDb(
    async () => {
      const docs = await BlogModel.find({ published: true })
        .sort({ publishedAt: -1 })
        .lean();
      return JSON.parse(JSON.stringify(docs)) as BlogPost[];
    },
    seedBlogs as BlogPost[]
  );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug) ?? null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return tryDb(
    async () => {
      const docs = await CaseStudyModel.find({ published: true })
        .sort({ completedAt: -1 })
        .lean();
      return JSON.parse(JSON.stringify(docs)) as CaseStudy[];
    },
    seedCaseStudies as CaseStudy[]
  );
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const studies = await getCaseStudies();
  return studies.find((c) => c.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return tryDb(
    async () => {
      const docs = await TestimonialModel.find({ published: true }).lean();
      return JSON.parse(JSON.stringify(docs)) as Testimonial[];
    },
    seedTestimonials as Testimonial[]
  );
}

export async function getClients(): Promise<ClientBrand[]> {
  return tryDb(
    async () => {
      const docs = await ClientModel.find({ published: true }).sort("order").lean();
      return JSON.parse(JSON.stringify(docs)) as ClientBrand[];
    },
    clientLogos.map((c, i) => ({
      ...c,
      order: i,
      published: true,
    }))
  );
}

export async function getLeads() {
  return tryDb(
    async () => {
      const docs = await LeadModel.find().sort({ createdAt: -1 }).lean();
      return JSON.parse(JSON.stringify(docs));
    },
    []
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
