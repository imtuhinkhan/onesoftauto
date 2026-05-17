import mongoose, { Schema, models, model } from "mongoose";

const TestimonialSchema = new Schema(
  {
    quote: { type: String, required: true },
    author: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    avatar: String,
    rating: { type: Number, default: 5 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Testimonial =
  models.Testimonial || model("Testimonial", TestimonialSchema);
