export const SITE_NAME = "Onesoftauto";

export const BRAND = {
  logoDark: "/logo/logo-dark.png",
  logoWhite: "/logo/logo-white.png",
  favicon: "/logo/favicon.png",
} as const;
export const SITE_EMAIL = "hello@onesoftauto.com";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const SITE_DESCRIPTION =
  "Onesoftauto crafts web apps, SaaS products, mobile experiences, and AI-powered solutions for ambitious brands.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICE_NAV_ITEMS = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    description: "High-performance websites that convert",
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    description: "MVP to enterprise-scale platforms",
  },
  {
    slug: "shopify-store-development",
    title: "Shopify Store Development",
    description: "E-commerce stores that scale revenue",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description: "iOS & Android apps users love",
  },
  {
    slug: "software-automation",
    title: "Software Automation",
    description: "Workflows that save time and cost",
  },
  {
    slug: "ai-integrations",
    title: "AI Integrations",
    description: "LLMs, agents, and intelligent systems",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description: "SEO, ads, and growth campaigns",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Research-driven product design",
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    description: "Custom themes, plugins & WooCommerce",
  },
  {
    slug: "server-administration",
    title: "Server Administration",
    description: "Cloud infra, monitoring & DevOps",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description: "Audits, hardening & compliance",
  },
] as const;

export const SERVICE_SLUGS = [
  "web-design-development",
  "saas-product-development",
  "shopify-store-development",
  "mobile-app-development",
  "software-automation",
  "ai-integrations",
  "digital-marketing",
  "ui-ux-design",
  "wordpress-development",
  "server-administration",
  "cybersecurity",
] as const;

export const CASE_STUDY_CATEGORIES = [
  "All",
  "Web",
  "SaaS",
  "Mobile",
  "E-commerce",
  "Automation",
  "AI",
] as const;

export const SOCIAL_LINKS = [
  { href: "https://twitter.com", label: "Twitter", icon: "twitter" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "linkedin" },
  { href: "https://github.com", label: "GitHub", icon: "github" },
  { href: "https://dribbble.com", label: "Dribbble", icon: "dribbble" },
] as const;
