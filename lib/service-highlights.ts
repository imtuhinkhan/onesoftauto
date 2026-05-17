export type ServiceHighlightMeta = {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
};

const DEFAULT: ServiceHighlightMeta = {
  badge: "Scope",
  title: "How We Help With",
  highlight: "Your Project",
  subtitle: "Focused capabilities tailored to your goals, timeline, and technical requirements.",
};

export const SERVICE_HIGHLIGHTS: Record<string, ServiceHighlightMeta> = {
  "web-design-development": {
    badge: "Web Solutions",
    title: "What We Build For",
    highlight: "Your Brand",
    subtitle: "End-to-end web experiences designed to perform, convert, and scale with your business.",
  },
  "saas-product-development": {
    badge: "Platform Scope",
    title: "Core Product",
    highlight: "Capabilities",
    subtitle: "From MVP to enterprise — the building blocks of a revenue-ready SaaS platform.",
  },
  "shopify-store-development": {
    badge: "E-Commerce",
    title: "Store Features We",
    highlight: "Deliver",
    subtitle: "Everything needed to launch, sell, and grow your Shopify brand online.",
  },
  "mobile-app-development": {
    badge: "Mobile",
    title: "App Features We",
    highlight: "Develop",
    subtitle: "Native-quality experiences across iOS and Android — built for engagement and retention.",
  },
  "software-automation": {
    badge: "Automation",
    title: "Workflows We",
    highlight: "Automate",
    subtitle: "Eliminate manual work and connect your tools with reliable, maintainable automations.",
  },
  "ai-integrations": {
    badge: "AI Solutions",
    title: "Intelligence We",
    highlight: "Integrate",
    subtitle: "Practical AI features that enhance products, support teams, and drive efficiency.",
  },
  "digital-marketing": {
    badge: "Growth",
    title: "Channels We",
    highlight: "Manage",
    subtitle: "Data-driven marketing tactics engineered for visibility, leads, and measurable ROI.",
  },
  "ui-ux-design": {
    badge: "Design",
    title: "Experience We",
    highlight: "Craft",
    subtitle: "Research-led design that makes your product intuitive, accessible, and conversion-focused.",
  },
  "wordpress-development": {
    badge: "WordPress",
    title: "Site Solutions We",
    highlight: "Provide",
    subtitle: "Flexible WordPress builds your team can manage — fast, secure, and built to grow.",
  },
  "server-administration": {
    badge: "Infrastructure",
    title: "Server Services We",
    highlight: "Operate",
    subtitle: "Reliable hosting, monitoring, and DevOps so your applications stay online and fast.",
  },
  cybersecurity: {
    badge: "Security",
    title: "Protection We",
    highlight: "Provide",
    subtitle: "Proactive security measures to defend your apps, data, and infrastructure.",
  },
};

export function getServiceHighlights(slug: string, serviceTitle?: string): ServiceHighlightMeta {
  const meta = SERVICE_HIGHLIGHTS[slug];
  if (meta) return meta;

  return {
    ...DEFAULT,
    highlight: serviceTitle ?? DEFAULT.highlight,
  };
}
