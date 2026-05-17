import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, required: true },
    author: { type: String, required: true },
    authorAvatar: String,
    category: { type: String, required: true },
    tags: [String],
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    publishedAt: { type: Date, default: Date.now },
    readTime: { type: Number, default: 5 },
    seoTitle: String,
    seoDescription: String,
  },
  { timestamps: true }
);

export const Blog = models.Blog || model("Blog", BlogSchema);
