export interface Service {
  _id?: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  technologies: string[];
  process: { title: string; description: string }[];
  pricingTeaser: string;
  faqs: { question: string; answer: string }[];
  group?: string;
  groupOrder?: number;
  groupDescription?: string;
  order: number;
  published: boolean;
}

export interface Faq {
  _id?: string;
  group: string;
  question: string;
  answer: string;
  order: number;
  published: boolean;
}

export interface BlogPost {
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorAvatar?: string;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  publishedAt: Date | string;
  readTime: number;
  seoTitle?: string;
  seoDescription?: string;
}

export interface CaseStudy {
  _id?: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  excerpt: string;
  description: string;
  coverImage: string;
  gallery: string[];
  metrics: { label: string; value: string }[];
  beforeImage?: string;
  afterImage?: string;
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  timeline: { phase: string; description: string; date: string }[];
  tintKey?: "priyos" | "englishence" | "moochatai" | "clokwork" | "colornshapes";
  liveUrl?: string;
  mockup?: "shop" | "score" | "chat" | "dash" | "canvas";
  servicesLabel?: string;
  stackLabel?: string;
  timelineLabel?: string;
  brief?: string;
  builtItems?: string[];
  howItRan?: { title: string; body: string }[];
  featured: boolean;
  published: boolean;
  completedAt: Date | string;
}

export interface Testimonial {
  _id?: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  published: boolean;
}

export interface Lead {
  _id?: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
  status: "new" | "contacted" | "qualified" | "closed";
  createdAt: Date | string;
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "editor";
  image?: string;
}

export interface Media {
  _id?: string;
  url: string;
  filename: string;
  mimeType: string;
  size: number;
  alt?: string;
  uploadedBy: string;
  createdAt: Date | string;
}

export interface SiteSettings {
  _id?: string;
  siteName: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  calendlyUrl: string;
  socialLinks: { platform: string; url: string }[];
  stats: { label: string; value: number; suffix?: string }[];
  logoDark: string;
  logoWhite: string;
  favicon: string;
  appleTouchIcon: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  ogLocale: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
  linkedinUrl: string;
  robotsIndex: boolean;
  heroEyebrow?: string;
  heroHeadline?: string;
  heroHeadlineAccent?: string;
  heroSubcopy?: string;
  aboutLead?: string;
  aboutLeadEm?: string;
  aboutPoints?: { title: string; body: string }[];
  processSubcopy?: string;
  contactHeadline?: string;
  contactSubcopy?: string;
  whatsappUrl?: string;
}

/** @deprecated Use SiteSettings */
export type Settings = SiteSettings;
