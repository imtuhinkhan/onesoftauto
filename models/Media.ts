import mongoose, { Schema, models, model } from "mongoose";

const MediaSchema = new Schema(
  {
    url: { type: String, required: true },
    filename: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    alt: String,
    uploadedBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const Media = models.Media || model("Media", MediaSchema);
