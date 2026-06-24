import { connectDB } from "@/lib/mongodb";
import { Blog as BlogModel } from "@/models/Blog";
import { Service as ServiceModel } from "@/models/Service";
import { CaseStudy as CaseStudyModel } from "@/models/CaseStudy";
import { Testimonial as TestimonialModel } from "@/models/Testimonial";
import { Client as ClientModel } from "@/models/Client";
import type { BlogPost, CaseStudy, Service, Testimonial } from "@/types";
import type { ClientBrand } from "@/types/client";
import mongoose from "mongoose";

async function ensureDb() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB is not configured. Set MONGODB_URI in your environment.");
  }
  await connectDB();
}

function serialize<T>(doc: unknown): T {
  return JSON.parse(JSON.stringify(doc)) as T;
}

export async function getAdminBlogs(): Promise<BlogPost[]> {
  await ensureDb();
  const docs = await BlogModel.find().sort({ publishedAt: -1 }).lean();
  return serialize(docs);
}

export async function getAdminBlogById(id: string): Promise<BlogPost | null> {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  await ensureDb();
  const doc = await BlogModel.findById(id).lean();
  return doc ? serialize(doc) : null;
}

export async function getAdminServices(): Promise<Service[]> {
  await ensureDb();
  const docs = await ServiceModel.find().sort("order").lean();
  return serialize(docs);
}

export async function getAdminServiceById(id: string): Promise<Service | null> {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  await ensureDb();
  const doc = await ServiceModel.findById(id).lean();
  return doc ? serialize(doc) : null;
}

export async function getAdminCaseStudies(): Promise<CaseStudy[]> {
  await ensureDb();
  const docs = await CaseStudyModel.find().sort({ completedAt: -1 }).lean();
  return serialize(docs);
}

export async function getAdminCaseStudyById(
  id: string
): Promise<CaseStudy | null> {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  await ensureDb();
  const doc = await CaseStudyModel.findById(id).lean();
  return doc ? serialize(doc) : null;
}

export async function getAdminTestimonials(): Promise<Testimonial[]> {
  await ensureDb();
  const docs = await TestimonialModel.find().sort({ createdAt: -1 }).lean();
  return serialize(docs);
}

export async function getAdminTestimonialById(
  id: string
): Promise<Testimonial | null> {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  await ensureDb();
  const doc = await TestimonialModel.findById(id).lean();
  return doc ? serialize(doc) : null;
}

export async function getAdminClients(): Promise<ClientBrand[]> {
  await ensureDb();
  const docs = await ClientModel.find().sort("order").lean();
  return serialize(docs);
}

export async function getAdminClientById(id: string): Promise<ClientBrand | null> {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  await ensureDb();
  const doc = await ClientModel.findById(id).lean();
  return doc ? serialize(doc) : null;
}
