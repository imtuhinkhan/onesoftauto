import { BRAND, SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import type { SiteSettings } from "@/types";

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteName: SITE_NAME,
  tagline: "Premium Software Development",
  email: "hello@onesoftauto.com",
  phone: "",
  address: "Dhaka, Bangladesh",
  calendlyUrl: "https://calendly.com/onesoftauto/30min",
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
  heroEyebrow: "Product studio · Dhaka",
  heroHeadline: "We build digital products that",
  heroHeadlineAccent: "transform businesses.",
  heroSubcopy:
    "From stunning websites to AI-powered SaaS platforms, we craft software that drives growth and measurable results.",
  aboutLead:
    "We design, build and automate digital products for founders and growing businesses,",
  aboutLeadEm: "from the first sketch to launch and beyond.",
  aboutPoints: [
    {
      title: "Based in Dhaka",
      body: "GMT+6, working across time zones",
    },
    {
      title: "Weekly demos",
      body: "Real progress you can click, every week",
    },
    {
      title: "You own everything",
      body: "Code, designs and accounts from day one",
    },
  ],
  processSubcopy: "Five stages. A working demo every week from design onward.",
  contactHeadline: "Have a project in mind?",
  contactSubcopy:
    "Book a free 30-minute call or send a message. We reply within 24 hours on weekdays.",
  whatsappUrl: "",
};
