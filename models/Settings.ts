import mongoose, { Schema, models, model } from "mongoose";

const SettingsSchema = new Schema(
  {
    siteName: { type: String, default: "Onesoftauto" },
    tagline: String,
    email: String,
    phone: String,
    address: String,
    calendlyUrl: String,
    socialLinks: [{ platform: String, url: String }],
    stats: [{ label: String, value: Number, suffix: String }],
  },
  { timestamps: true }
);

export const Settings = models.Settings || model("Settings", SettingsSchema);
