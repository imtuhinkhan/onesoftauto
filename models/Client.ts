import mongoose, { Schema, models, model } from "mongoose";

const ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    website: String,
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Client = models.Client || model("Client", ClientSchema);
