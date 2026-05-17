import mongoose, { Schema, models, model } from "mongoose";

const ServiceSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, default: "code" },
    features: [String],
    technologies: [String],
    process: [{ title: String, description: String }],
    pricingTeaser: String,
    faqs: [{ question: String, answer: String }],
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Service = models.Service || model("Service", ServiceSchema);
