import mongoose, { Schema, models, model } from "mongoose";

const LeadSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: String,
    phone: String,
    service: String,
    budget: String,
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export const Lead = models.Lead || model("Lead", LeadSchema);
