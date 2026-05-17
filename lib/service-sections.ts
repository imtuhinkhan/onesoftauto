export type ServiceBenefitsSection = {
  title: string;
  subtitle: string;
  items: string[];
};

const DEFAULT_BENEFITS: ServiceBenefitsSection = {
  title: "Why Work With Us",
  subtitle: "A partner invested in outcomes—not just deliverables.",
  items: [
    "Dedicated project manager and clear communication",
    "Transparent timelines and milestone-based delivery",
    "Post-launch support and documentation",
    "Scalable architecture built for future growth",
  ],
};

export const SERVICE_BENEFITS: Record<string, ServiceBenefitsSection> = {
  "web-design-development": {
    title: "Why Choose Us for Web",
    subtitle: "Partner with a team that treats your site as a growth engine—not just a brochure.",
    items: [
      "Pixel-perfect designs that reflect your brand",
      "Core Web Vitals and SEO baked in from day one",
      "CMS workflows your marketing team can own",
      "Accessible, mobile-first experiences",
      "Smooth handoff with documentation and training",
    ],
  },
  "saas-product-development": {
    title: "Built for Founders & Product Teams",
    subtitle: "Ship faster with architecture that won't break when you grow.",
    items: [
      "MVP scope focused on revenue-critical features",
      "Multi-tenant and billing patterns done right",
      "Security and compliance considerations early",
      "Analytics hooks for product-led growth",
      "Clear path from MVP to enterprise scale",
    ],
  },
  "shopify-store-development": {
    title: "Why Brands Trust Us on Shopify",
    subtitle: "We optimize for revenue, speed, and merchandising—not just aesthetics.",
    items: [
      "Conversion-focused UX across the full funnel",
      "Fast themes that don't sacrifice customization",
      "Seamless payments, shipping, and app integrations",
      "Migration support from other platforms",
      "Ongoing CRO and performance tuning",
    ],
  },
  "mobile-app-development": {
    title: "Why Build Your App With Us",
    subtitle: "One codebase, native feel, and a launch plan that includes the app stores.",
    items: [
      "Faster time-to-market with cross-platform efficiency",
      "Offline-ready flows and push notification strategy",
      "App Store and Play Store submission support",
      "Backend APIs and auth integrated from the start",
      "Post-launch analytics and iteration sprints",
    ],
  },
  "software-automation": {
    title: "ROI You Can Measure",
    subtitle: "Automations that pay for themselves in hours saved and errors avoided.",
    items: [
      "Process audits that find the highest-impact wins",
      "Reliable workflows with logging and error handling",
      "Reduced operational cost and human error",
      "Dashboards that prove time and cost savings",
      "Documentation so your team can own the flows",
    ],
  },
  "ai-integrations": {
    title: "AI That Works in Production",
    subtitle: "Secure, observable, and aligned with real user workflows.",
    items: [
      "Use-case discovery tied to business outcomes",
      "RAG and agents grounded in your own data",
      "Guardrails, monitoring, and cost controls",
      "Human-in-the-loop where accuracy matters",
      "Iterative improvement as models evolve",
    ],
  },
  "digital-marketing": {
    title: "Growth You Can Report On",
    subtitle: "Campaigns tied to KPIs—not vanity metrics.",
    items: [
      "Strategy rooted in your ICP and funnel stage",
      "Creative and copy tested for conversion",
      "Transparent reporting with actionable insights",
      "Budget efficiency through continuous optimization",
      "Alignment with sales and product goals",
    ],
  },
  "ui-ux-design": {
    title: "Design That Drives Adoption",
    subtitle: "Experiences backed by research—not guesswork.",
    items: [
      "User journeys mapped to business goals",
      "Consistent design systems for faster dev handoff",
      "Accessibility and usability built in",
      "Prototype testing before expensive builds",
      "Brand-aligned visuals that build trust",
    ],
  },
  "wordpress-development": {
    title: "Why WordPress With Onesoftauto",
    subtitle: "Enterprise-quality builds without enterprise complexity.",
    items: [
      "Custom themes—not bloated page-builder mess",
      "WooCommerce setups optimized for checkout",
      "Security hardening and update workflows",
      "Editor training so you're not dependent on us",
      "Migration from legacy sites with minimal downtime",
    ],
  },
  "server-administration": {
    title: "Peace of Mind for Your Stack",
    subtitle: "Infrastructure you don't have to think about at 2 a.m.",
    items: [
      "Proactive monitoring and alert response",
      "Backup and disaster recovery you can test",
      "Cost-optimized cloud architecture",
      "CI/CD pipelines for safer deployments",
      "Clear runbooks and incident communication",
    ],
  },
  cybersecurity: {
    title: "Security Without the Theater",
    subtitle: "Practical risk reduction—not checkbox compliance alone.",
    items: [
      "Prioritized remediation based on real risk",
      "Developer-friendly AppSec guidance",
      "Compliance roadmaps (SOC 2, GDPR, HIPAA)",
      "Incident response playbooks your team can run",
      "Continuous monitoring—not one-off audits",
    ],
  },
};

export function getServiceBenefits(slug: string, serviceTitle?: string): ServiceBenefitsSection {
  const meta = SERVICE_BENEFITS[slug];
  if (meta) return meta;

  return {
    ...DEFAULT_BENEFITS,
    subtitle: `A partner invested in outcomes for ${serviceTitle ?? "your project"}.`,
  };
}
