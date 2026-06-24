import type { Service, BlogPost, CaseStudy, Testimonial } from "@/types";

export const seedServices: Omit<Service, "_id">[] = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    shortDescription:
      "Stunning, high-performance websites that convert visitors into customers.",
    description:
      "We craft bespoke digital experiences that blend cutting-edge design with blazing-fast performance. From marketing sites to complex web applications, our team delivers pixel-perfect interfaces built on modern frameworks.",
    icon: "globe",
    features: [
      "Custom UI/UX design",
      "Responsive & accessible builds",
      "CMS integration",
      "Performance optimization",
      "SEO-ready architecture",
      "Ongoing maintenance",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    process: [
      { title: "Discovery", description: "We map goals, audience, and technical requirements." },
      { title: "Design", description: "High-fidelity prototypes and design systems." },
      { title: "Develop", description: "Clean, scalable code with rigorous QA." },
      { title: "Launch", description: "Deploy, monitor, and iterate for growth." },
    ],
    pricingTeaser: "",
    faqs: [
      { question: "How long does a website take?", answer: "Typically 6–12 weeks depending on scope." },
      { question: "Do you provide hosting?", answer: "Yes, we deploy on Vercel, AWS, or your preferred platform." },
    ],
    order: 1,
    published: true,
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    shortDescription:
      "End-to-end SaaS platforms from MVP to enterprise scale.",
    description:
      "Transform your vision into a revenue-generating SaaS product. We handle architecture, multi-tenancy, billing, analytics, and everything in between.",
    icon: "layers",
    features: [
      "MVP development",
      "Multi-tenant architecture",
      "Stripe billing integration",
      "Admin dashboards",
      "API design",
      "Scalable infrastructure",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
    process: [
      { title: "Validate", description: "Market research and technical feasibility." },
      { title: "Build MVP", description: "Core features shipped in 8–12 weeks." },
      { title: "Scale", description: "Performance, security, and feature expansion." },
      { title: "Grow", description: "Analytics, A/B testing, and optimization." },
    ],
    pricingTeaser: "",
    faqs: [
      { question: "Can you work with existing code?", answer: "Absolutely — we audit and extend existing codebases." },
    ],
    order: 2,
    published: true,
  },
  {
    slug: "shopify-store-development",
    title: "Shopify Store Development",
    shortDescription: "High-converting Shopify stores with custom themes and apps.",
    description:
      "Launch and scale your e-commerce brand with custom Shopify themes, headless storefronts, and conversion-optimized checkout flows.",
    icon: "shopping-bag",
    features: [
      "Custom theme development",
      "Headless Shopify",
      "Conversion optimization",
      "App integrations",
      "Migration services",
    ],
    technologies: ["Shopify", "Liquid", "Hydrogen", "React", "GraphQL"],
    process: [
      { title: "Strategy", description: "Brand, catalog, and funnel planning." },
      { title: "Design", description: "Mobile-first storefront design." },
      { title: "Build", description: "Theme dev, apps, and integrations." },
      { title: "Optimize", description: "CRO, speed, and retention tactics." },
    ],
    pricingTeaser: "",
    faqs: [],
    order: 3,
    published: true,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native-quality iOS and Android apps with React Native & Flutter.",
    description:
      "Ship beautiful mobile experiences that users love. Cross-platform efficiency without compromising on performance or polish.",
    icon: "smartphone",
    features: [
      "iOS & Android apps",
      "Cross-platform development",
      "Push notifications",
      "Offline support",
      "App Store deployment",
    ],
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "Supabase"],
    process: [
      { title: "Wireframe", description: "User flows and interactive prototypes." },
      { title: "Develop", description: "Agile sprints with weekly demos." },
      { title: "Test", description: "Device testing and beta programs." },
      { title: "Ship", description: "Store submission and launch support." },
    ],
    pricingTeaser: "",
    faqs: [],
    order: 4,
    published: true,
  },
  {
    slug: "software-automation",
    title: "Software Automation",
    shortDescription: "Automate workflows and eliminate manual bottlenecks.",
    description:
      "Connect your tools, automate repetitive tasks, and free your team to focus on what matters. Custom integrations, RPA, and workflow engines.",
    icon: "workflow",
    features: [
      "Workflow automation",
      "API integrations",
      "Custom bots",
      "Data pipelines",
      "Reporting dashboards",
    ],
    technologies: ["Node.js", "Python", "Zapier", "n8n", "AWS Lambda"],
    process: [
      { title: "Audit", description: "Map current processes and pain points." },
      { title: "Design", description: "Automation architecture and ROI model." },
      { title: "Implement", description: "Build, test, and deploy automations." },
      { title: "Monitor", description: "Alerts, logging, and continuous improvement." },
    ],
    pricingTeaser: "",
    faqs: [],
    order: 5,
    published: true,
  },
  {
    slug: "ai-integrations",
    title: "AI Integrations",
    shortDescription: "Embed AI into your products with LLMs, agents, and ML pipelines.",
    description:
      "Harness the power of AI to transform your business. Custom chatbots, RAG systems, predictive analytics, and intelligent automation.",
    icon: "brain",
    features: [
      "Custom AI chatbots",
      "RAG knowledge bases",
      "AI agents & workflows",
      "Model fine-tuning",
      "AI strategy consulting",
    ],
    technologies: ["OpenAI", "Anthropic", "LangChain", "Pinecone", "Python"],
    process: [
      { title: "Assess", description: "Identify high-impact AI use cases." },
      { title: "Prototype", description: "Rapid POC with real data." },
      { title: "Productionize", description: "Secure, scalable AI deployment." },
      { title: "Evolve", description: "Monitor, fine-tune, and expand capabilities." },
    ],
    pricingTeaser: "",
    faqs: [],
    order: 6,
    published: true,
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Data-driven campaigns that grow your brand and revenue.",
    description:
      "Full-funnel digital marketing — SEO, paid ads, content, email, and analytics — engineered for measurable ROI.",
    icon: "trending-up",
    features: [
      "SEO & content strategy",
      "Paid media management",
      "Email marketing",
      "Analytics & reporting",
      "Conversion optimization",
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "GA4", "Semrush"],
    process: [
      { title: "Research", description: "Competitor and keyword analysis." },
      { title: "Strategy", description: "Channel mix and budget allocation." },
      { title: "Execute", description: "Campaign launch and creative production." },
      { title: "Optimize", description: "A/B tests and performance reporting." },
    ],
    pricingTeaser: "",
    faqs: [],
    order: 7,
    published: true,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Human-centered design that delights users and drives conversions.",
    description:
      "Research-backed design systems, prototypes, and interfaces that make your product intuitive, accessible, and beautiful.",
    icon: "palette",
    features: [
      "User research",
      "Wireframing & prototyping",
      "Design systems",
      "Usability testing",
      "Brand identity",
    ],
    technologies: ["Figma", "Framer", "Principle", "Maze", "Hotjar"],
    process: [
      { title: "Research", description: "Interviews, surveys, and journey mapping." },
      { title: "Ideate", description: "Sketches, wireframes, and concepts." },
      { title: "Design", description: "High-fidelity UI and design tokens." },
      { title: "Validate", description: "Usability tests and iteration." },
    ],
    pricingTeaser: "",
    faqs: [],
    order: 8,
    published: true,
  },
  {
    slug: "wordpress-development",
    title: "WordPress Development",
    shortDescription:
      "Custom WordPress sites, themes, and plugins built for performance and easy management.",
    description:
      "We design and develop WordPress experiences that are fast, secure, and simple for your team to manage — from marketing sites to content-heavy platforms with custom plugins and integrations.",
    icon: "wordpress",
    features: [
      "Custom theme development",
      "Plugin development & customization",
      "WooCommerce integration",
      "Headless WordPress setups",
      "Migration & redesign",
      "Performance & security hardening",
    ],
    technologies: ["WordPress", "PHP", "WooCommerce", "ACF", "Elementor"],
    process: [
      { title: "Plan", description: "Site architecture, content model, and plugin requirements." },
      { title: "Design", description: "Custom theme design aligned with your brand." },
      { title: "Build", description: "Theme, plugins, and third-party integrations." },
      { title: "Launch", description: "Deploy, train your team, and ongoing support." },
    ],
    pricingTeaser: "",
    faqs: [
      { question: "Do you work with existing WordPress sites?", answer: "Yes — we audit, optimize, and extend existing installations." },
    ],
    order: 9,
    published: true,
  },
  {
    slug: "server-administration",
    title: "Server Administration",
    shortDescription:
      "Reliable cloud infrastructure, monitoring, and 24/7 server management.",
    description:
      "Keep your applications running smoothly with expert server administration — provisioning, scaling, backups, monitoring, and incident response across AWS, GCP, Azure, and dedicated environments.",
    icon: "server",
    features: [
      "Cloud server setup & migration",
      "Linux & Windows administration",
      "CI/CD pipeline configuration",
      "Backup & disaster recovery",
      "Performance monitoring & alerts",
      "SSL, DNS & domain management",
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Nginx", "Linux", "Terraform"],
    process: [
      { title: "Audit", description: "Review current infrastructure, bottlenecks, and risks." },
      { title: "Architect", description: "Design scalable, cost-efficient server topology." },
      { title: "Implement", description: "Provision, configure, and automate environments." },
      { title: "Maintain", description: "Monitor, patch, and optimize around the clock." },
    ],
    pricingTeaser: "",
    faqs: [],
    order: 10,
    published: true,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortDescription:
      "Protect your business with audits, hardening, and ongoing security operations.",
    description:
      "Safeguard your applications, data, and infrastructure with comprehensive cybersecurity services — vulnerability assessments, penetration testing, compliance readiness, and security-first development practices.",
    icon: "shield",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Application security (AppSec)",
      "Compliance (SOC 2, GDPR, HIPAA)",
      "Incident response planning",
      "Security training & policies",
    ],
    technologies: ["OWASP", "Burp Suite", "Snyk", "Cloudflare", "Vault", "SIEM"],
    process: [
      { title: "Assess", description: "Identify vulnerabilities across apps, infra, and processes." },
      { title: "Prioritize", description: "Risk-ranked remediation roadmap with clear timelines." },
      { title: "Remediate", description: "Fix critical issues and implement security controls." },
      { title: "Monitor", description: "Continuous scanning, alerts, and compliance reporting." },
    ],
    pricingTeaser: "",
    faqs: [
      { question: "How often should we run security audits?", answer: "We recommend quarterly scans with annual penetration tests for most businesses." },
    ],
    order: 11,
    published: true,
  },
];

export const seedCaseStudies: Omit<CaseStudy, "_id">[] = [
  {
    slug: "fintech-dashboard",
    title: "NovaPay Analytics Dashboard",
    client: "NovaPay",
    category: "SaaS",
    excerpt: "Real-time financial analytics platform serving 50K+ users.",
    description:
      "We rebuilt NovaPay's legacy dashboard into a blazing-fast Next.js application with real-time data streaming, custom charting, and role-based access control.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    metrics: [
      { label: "Load Time", value: "-68%" },
      { label: "User Retention", value: "+42%" },
      { label: "Revenue", value: "+$2.1M" },
    ],
    beforeImage: "https://images.unsplash.com/photo-1555421689-491a97ff9880?w=600&q=80",
    afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "D3.js"],
    testimonial: {
      quote: "Onesoftauto transformed our product. The new dashboard is night and day.",
      author: "Sarah Chen",
      role: "CTO, NovaPay",
    },
    timeline: [
      { phase: "Discovery", description: "Requirements & architecture", date: "Week 1-2" },
      { phase: "Design", description: "UI/UX & design system", date: "Week 3-5" },
      { phase: "Development", description: "Core platform build", date: "Week 6-14" },
      { phase: "Launch", description: "Deploy & optimize", date: "Week 15-16" },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2025-11-01"),
  },
  {
    slug: "luxury-ecommerce",
    title: "Maison Élégance Shopify Store",
    client: "Maison Élégance",
    category: "E-commerce",
    excerpt: "Luxury fashion e-commerce with 3x conversion rate improvement.",
    description:
      "A headless Shopify storefront with immersive product storytelling, AR try-on, and a seamless checkout experience.",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"],
    metrics: [
      { label: "Conversion Rate", value: "+210%" },
      { label: "AOV", value: "+35%" },
      { label: "Page Speed", value: "98/100" },
    ],
    technologies: ["Shopify", "Hydrogen", "React", "Tailwind CSS"],
    timeline: [
      { phase: "Strategy", description: "Brand & catalog planning", date: "Week 1-3" },
      { phase: "Build", description: "Theme & integrations", date: "Week 4-10" },
      { phase: "Launch", description: "Go-live & CRO", date: "Week 11-12" },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2025-09-15"),
  },
  {
    slug: "healthcare-app",
    title: "VitalTrack Mobile App",
    client: "HealthCore",
    category: "Mobile",
    excerpt: "Patient health tracking app with 100K+ downloads.",
    description:
      "Cross-platform mobile app for chronic disease management with wearable integration and HIPAA-compliant data handling.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    gallery: [],
    metrics: [
      { label: "Downloads", value: "100K+" },
      { label: "App Rating", value: "4.8★" },
      { label: "Engagement", value: "+65%" },
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
    timeline: [
      { phase: "Discovery", description: "User research & requirements", date: "Week 1-3" },
      { phase: "Development", description: "Cross-platform build", date: "Week 4-16" },
      { phase: "Launch", description: "App store release", date: "Week 17-18" },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2025-07-20"),
  },
  {
    slug: "ai-support-bot",
    title: "SupportAI Agent Platform",
    client: "CloudServe",
    category: "AI",
    excerpt: "AI support agent reducing ticket volume by 60%.",
    description:
      "Custom RAG-powered support bot integrated with Zendesk, handling 10K+ queries daily with 94% resolution rate.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    gallery: [],
    metrics: [
      { label: "Ticket Reduction", value: "-60%" },
      { label: "Resolution Rate", value: "94%" },
      { label: "CSAT", value: "+28%" },
    ],
    technologies: ["OpenAI", "LangChain", "Pinecone", "Next.js"],
    timeline: [
      { phase: "POC", description: "RAG prototype with client data", date: "Week 1-4" },
      { phase: "Integration", description: "Zendesk & production deploy", date: "Week 5-10" },
      { phase: "Optimize", description: "Fine-tuning & monitoring", date: "Week 11-12" },
    ],
    featured: false,
    published: true,
    completedAt: new Date("2025-12-01"),
  },
];

export const seedTestimonials: Omit<Testimonial, "_id">[] = [
  {
    quote:
      "Onesoftauto delivered beyond our expectations. Their attention to detail and technical expertise is unmatched in the industry.",
    author: "Michael Rodriguez",
    role: "CEO",
    company: "TechVentures Inc",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    published: true,
  },
  {
    quote:
      "Our SaaS platform went from concept to $1M ARR in 14 months. The Onesoftauto team was instrumental in every milestone.",
    author: "Emily Watson",
    role: "Founder",
    company: "FlowStack",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    published: true,
  },
  {
    quote:
      "The redesign increased our conversion rate by 210%. ROI was clear within the first month of launch.",
    author: "James Park",
    role: "CMO",
    company: "Maison Élégance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    published: true,
  },
];

export const seedBlogs: Omit<BlogPost, "_id">[] = [
  {
    slug: "future-of-ai-in-software-development",
    title: "The Future of AI in Software Development",
    excerpt:
      "How AI is reshaping how teams build, test, and ship software — and what it means for your business.",
    content: `<p>Artificial intelligence is no longer a futuristic concept — it's actively transforming how software teams work today.</p><h2>Code Generation</h2><p>Tools like GitHub Copilot and Cursor are accelerating development cycles by 30-50% for routine tasks.</p><h2>Automated Testing</h2><p>AI-powered test generation catches edge cases humans miss, improving quality while reducing QA time.</p><h2>What This Means For You</h2><p>Companies that embrace AI-augmented development ship faster, with fewer bugs and lower costs.</p>`,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    author: "Alex Thompson",
    category: "AI",
    tags: ["AI", "Development", "Future"],
    featured: true,
    published: true,
    publishedAt: new Date("2026-05-01"),
    readTime: 6,
  },
  {
    slug: "saas-mvp-guide-2026",
    title: "The Complete Guide to Building a SaaS MVP in 2026",
    excerpt:
      "A step-by-step playbook for launching your SaaS product in 8-12 weeks without overbuilding.",
    content: `<p>Building an MVP doesn't mean cutting corners — it means focusing ruthlessly on what validates your idea.</p><h2>Step 1: Define Your Core Loop</h2><p>Identify the single workflow that delivers value. Everything else is v2.</p><h2>Step 2: Choose Your Stack</h2><p>Next.js + PostgreSQL + Stripe remains the gold standard for B2B SaaS in 2026.</p>`,
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    author: "Sarah Kim",
    category: "SaaS",
    tags: ["SaaS", "MVP", "Startup"],
    featured: true,
    published: true,
    publishedAt: new Date("2026-04-15"),
    readTime: 8,
  },
  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization: A Technical Deep Dive",
    excerpt:
      "Practical techniques to achieve 95+ Lighthouse scores and sub-second load times.",
    content: `<p>Performance is a feature. Slow sites lose users, rankings, and revenue.</p><h2>Core Web Vitals</h2><p>LCP, FID, and CLS are now ranking factors. Here's how to optimize each.</p>`,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    author: "David Chen",
    category: "Development",
    tags: ["Performance", "Next.js", "SEO"],
    featured: false,
    published: true,
    publishedAt: new Date("2026-03-20"),
    readTime: 10,
  },
];

export const clientLogos: { name: string; logo: string }[] = [
  { name: "NovaPay", logo: "/clients/novapay.svg" },
  { name: "FlowStack", logo: "/clients/flowstack.svg" },
  { name: "HealthCore", logo: "/clients/healthcore.svg" },
  { name: "CloudServe", logo: "/clients/cloudserve.svg" },
  { name: "Maison Élégance", logo: "/clients/maison-elegance.svg" },
  { name: "TechVentures", logo: "/clients/techventures.svg" },
  { name: "DataPulse", logo: "/clients/datapulse.svg" },
  { name: "GreenLeaf", logo: "/clients/greenleaf.svg" },
];

export const agencyStats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Team Experts", value: 25, suffix: "+" },
  { label: "Years Experience", value: 8, suffix: "+" },
];

export const processSteps = [
  {
    title: "Discovery",
    description: "We dive deep into your goals, users, and competitive landscape.",
    icon: "search",
  },
  {
    title: "Strategy",
    description: "Roadmap, architecture, and success metrics defined collaboratively.",
    icon: "map",
  },
  {
    title: "Design",
    description: "Wireframes evolve into polished, tested interfaces.",
    icon: "palette",
  },
  {
    title: "Develop",
    description: "Agile sprints with transparent progress and weekly demos.",
    icon: "code",
  },
  {
    title: "Launch",
    description: "Deploy, monitor, and optimize for maximum impact.",
    icon: "rocket",
  },
];

export const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by scope. Websites take 6–12 weeks, SaaS MVPs 8–16 weeks, and mobile apps 10–20 weeks. We provide detailed timelines during discovery.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes! We've helped dozens of startups go from idea to funded product. We offer flexible engagement models including fixed-price MVPs.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "The ones that fit your problem—not our favorite logo wall. We've shipped with Next.js, React, and TypeScript; Laravel and PHP; Flutter and React Native; Go, .NET, Java, and Node; Python and WordPress; Shopify and custom stacks—plus the glue in between (PostgreSQL, MongoDB, APIs, cloud, DevOps, AI). Share your goals and constraints; we'll pick the approach that ships reliably, not the stack that wins a Twitter poll.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "Weekly sprint demos, Slack/Teams channels, and a dedicated project manager ensure you're always in the loop.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Absolutely. We offer maintenance retainers, SLA-backed support, and dedicated engineering pods for long-term partnerships.",
  },
];

export const teamMembers = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "15+ years building digital products for Fortune 500 and startups.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Sarah Kim",
    role: "Head of Design",
    bio: "Award-winning designer passionate about human-centered experiences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "David Chen",
    role: "Lead Engineer",
    bio: "Full-stack architect specializing in scalable SaaS platforms.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Maria Santos",
    role: "AI Lead",
    bio: "ML engineer bringing cutting-edge AI to production systems.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];
