import mongoose, { Schema, models, model } from "mongoose";

const CaseStudySchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    client: { type: String, required: true },
    category: { type: String, required: true },
    excerpt: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    gallery: [String],
    metrics: [{ label: String, value: String }],
    beforeImage: String,
    afterImage: String,
    technologies: [String],
    testimonial: {
      quote: String,
      author: String,
      role: String,
      avatar: String,
    },
    timeline: [{ phase: String, description: String, date: String }],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    completedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const CaseStudy = models.CaseStudy || model("CaseStudy", CaseStudySchema);
