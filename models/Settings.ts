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
    logoDark: { type: String, default: "/logo/logo-dark.png" },
    logoWhite: { type: String, default: "/logo/logo-white.png" },
    favicon: { type: String, default: "/logo/favicon.png" },
    appleTouchIcon: String,
    metaTitle: String,
    metaDescription: String,
    metaKeywords: [String],
    ogTitle: String,
    ogDescription: String,
    ogImage: String,
    ogType: { type: String, default: "website" },
    ogLocale: { type: String, default: "en_US" },
    twitterCard: { type: String, default: "summary_large_image" },
    twitterSite: String,
    twitterCreator: String,
    linkedinUrl: String,
    robotsIndex: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Settings = models.Settings || model("Settings", SettingsSchema);
