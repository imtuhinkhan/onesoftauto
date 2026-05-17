import { BRAND, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import type { SiteSettings } from "@/types";

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteName: SITE_NAME,
  tagline: "Premium Software Development",
  email: "hello@onesoftauto.com",
  phone: "",
  address: "Dhaka, Bangladesh",
  calendlyUrl: "",
  socialLinks: [],
  stats: [],
  logoDark: BRAND.logoDark,
  logoWhite: BRAND.logoWhite,
  favicon: BRAND.favicon,
  appleTouchIcon: BRAND.favicon,
  metaTitle: `${SITE_NAME} | Premium Software Development Agency`,
  metaDescription: SITE_DESCRIPTION,
  metaKeywords: [
    "software agency",
    "web development",
    "SaaS development",
    "mobile apps",
    "AI solutions",
    "Shopify development",
  ],
  ogTitle: SITE_NAME,
  ogDescription: SITE_DESCRIPTION,
  ogImage:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop&q=80",
  ogType: "website",
  ogLocale: "en_US",
  twitterCard: "summary_large_image",
  twitterSite: "",
  twitterCreator: "",
  linkedinUrl: "",
  robotsIndex: true,
};
