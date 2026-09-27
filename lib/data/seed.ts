import type { Service, BlogPost, CaseStudy, Testimonial, Faq } from "@/types";

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
    group: "Web & design",
    groupOrder: 1,
    groupDescription: "Sites and interfaces people enjoy using.",
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
    group: "SaaS & AI",
    groupOrder: 3,
    groupDescription: "Products that scale, with intelligence built in.",
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
    group: "Commerce & mobile",
    groupOrder: 2,
    groupDescription: "Stores and apps built for how your customers buy.",
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
    group: "Commerce & mobile",
    groupOrder: 2,
    groupDescription: "Stores and apps built for how your customers buy.",
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
    group: "Automation & growth",
    groupOrder: 5,
    groupDescription: "Less busywork, more of the right customers.",
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
    group: "SaaS & AI",
    groupOrder: 3,
    groupDescription: "Products that scale, with intelligence built in.",
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
    group: "Automation & growth",
    groupOrder: 5,
    groupDescription: "Less busywork, more of the right customers.",
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
    group: "Web & design",
    groupOrder: 1,
    groupDescription: "Sites and interfaces people enjoy using.",
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
    group: "Web & design",
    groupOrder: 1,
    groupDescription: "Sites and interfaces people enjoy using.",
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
    group: "Network & security",
    groupOrder: 4,
    groupDescription: "Reliable networks and systems you can trust.",
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
    group: "Network & security",
    groupOrder: 4,
    groupDescription: "Reliable networks and systems you can trust.",
    order: 11,
    published: true,
  },
];

export const seedCaseStudies: Omit<CaseStudy, "_id">[] = [
  {
    slug: "priyos-shop",
    title: "Priyos Shop",
    client: "Priyos Shop",
    category: "E-commerce",
    excerpt:
      "High-converting storefront for authentic Thai beauty and trusted gadgets, built for shoppers in Bangladesh.",
    description:
      "We designed and engineered Priyos Shop as a modern e-commerce experience focused on Thai beauty products and consumer tech — conversion-led hero, category discovery, secure checkout, and logistics messaging tailored to Bangladesh.",
    coverImage: "/portfolio/priyos-shop.jpg",
    gallery: ["/portfolio/priyos-shop-full.jpg"],
    metrics: [
      { label: "Market", value: "Bangladesh" },
      { label: "Catalog Focus", value: "Beauty + Tech" },
      { label: "Checkout", value: "SSL secure" },
    ],
    technologies: ["Next.js", "Tailwind CSS", "E-commerce", "Payment Gateway"],
    timeline: [],
    tintKey: "priyos",
    liveUrl: "https://priyos.shop",
    mockup: "shop",
    servicesLabel: "Storefront design and development, UX optimisation",
    stackLabel: "Next.js, Tailwind CSS, SSL checkout",
    timelineLabel: "14 weeks · priyos.shop",
    brief:
      "Priyos Shop sells authentic Thai beauty products and trusted gadgets to shoppers in Bangladesh. Global template themes rarely fit local buying behaviour, so the store had to communicate authenticity quickly, make discovery simple and reduce checkout anxiety.",
    builtItems: [
      "Conversion-focused hero that sells the brand promise at a glance",
      "Category entry points for beauty and electronics",
      "Promotional merchandising layouts",
      "Secure SSL checkout",
      "Local logistics cues: currency and free-shipping thresholds",
      "Mobile-first browsing throughout",
    ],
    howItRan: [
      {
        title: "Weeks 1–2 · Discovery",
        body: "Brand positioning, catalogue structure and local buyer-journey mapping.",
      },
      {
        title: "Weeks 3–5 · Design",
        body: "Hero storytelling, category UX and promotional layouts.",
      },
      {
        title: "Weeks 6–12 · Build",
        body: "Storefront, cart, checkout and operations tooling.",
      },
      {
        title: "Weeks 13–14 · Launch",
        body: "Go-live, performance tuning and campaign preparation.",
      },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2026-03-01"),
  },
  {
    slug: "englishence",
    title: "Englishence",
    client: "Englishence",
    category: "EdTech · SaaS",
    excerpt:
      "AI-powered PTE Academic practice platform with scoring, mock tests and progress analytics.",
    description:
      "Englishence is a full learning product for PTE Academic candidates — AI scoring, mock tests, study tools, and subscription billing with a conversion-focused marketing site.",
    coverImage: "/portfolio/english-encypte.jpg",
    gallery: ["/portfolio/english-encypte-full.jpg"],
    metrics: [
      { label: "Success rate", value: "95%" },
      { label: "Students", value: "50K+" },
      { label: "Practice items", value: "2M+" },
    ],
    technologies: ["Next.js", "AI scoring", "SaaS billing", "Analytics"],
    timeline: [],
    tintKey: "englishence",
    liveUrl: "https://englishencypte.com",
    mockup: "score",
    servicesLabel: "SaaS product development, Marketing site",
    stackLabel: "Next.js, AI scoring, SaaS billing",
    timelineLabel: "18 weeks",
    brief:
      "PTE candidates need more than static question banks. They need instant scoring, personalised feedback and a clear path from weak areas to their target score. Englishence needed a learning product with real-exam fidelity, plus conversion-focused marketing to bring learners in.",
    builtItems: [
      "AI scoring for speaking and writing tasks",
      "Personalised feedback on every attempt",
      "Full-length mock tests that mirror exam pressure",
      "Study tools and progress tracking",
      "Subscription billing and a clear trial-to-paid path",
    ],
    howItRan: [
      {
        title: "Weeks 1–3 · Product strategy",
        body: "Learner journeys, scoring UX and monetisation planning.",
      },
      {
        title: "Weeks 4–14 · Platform build",
        body: "Practice flows, mock tests and learner dashboards.",
      },
      {
        title: "Weeks 15–18 · Growth layer",
        body: "Landing pages, blog and conversion optimisation.",
      },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2026-02-15"),
  },
  {
    slug: "moochatai",
    title: "MooChatAI",
    client: "MooChatAI",
    category: "AI · SaaS",
    excerpt:
      "A SaaS platform that embeds an AI shopping assistant into WooCommerce and Shopify stores.",
    description:
      "MooChatAI connects conversational AI to live catalogues, carts, and orders so merchants get measurable conversion lift without building custom AI engineering in-house.",
    coverImage: "/portfolio/moocha-tai.jpg",
    gallery: ["/portfolio/moocha-tai-full.jpg"],
    metrics: [
      { label: "Sales lift", value: "32%" },
      { label: "Setup time", value: "5 min" },
      { label: "Languages", value: "90+" },
    ],
    technologies: ["Next.js", "OpenAI", "WooCommerce", "Shopify"],
    timeline: [],
    tintKey: "moochatai",
    liveUrl: "https://www.moochatai.com",
    mockup: "chat",
    servicesLabel: "Marketing site development, Product narrative and positioning",
    stackLabel: "Next.js, OpenAI, WooCommerce",
    timelineLabel: "10 weeks · moochatai.com",
    brief:
      "Merchants want measurable conversion gains without hiring an AI team. MooChatAI connects chat to the live catalogue, cart and orders, so the assistant stops being a support cost and becomes a sales channel. The product needed a high-trust site that told that story clearly.",
    builtItems: [
      "Natural-language product search across the live catalogue",
      "In-chat cart actions and recommendations",
      "Abandoned-cart recovery with proactive prompts",
      "Multilingual conversations in 90+ languages",
      "Human handoff when a question needs a person",
      "Analytics dashboard and tiered pricing",
    ],
    howItRan: [
      {
        title: "Weeks 1–2 · Positioning",
        body: "Positioning strategy and competitor analysis.",
      },
      {
        title: "Weeks 3–8 · Site and story",
        body: "Site development and product storytelling.",
      },
      {
        title: "Weeks 9–10 · Launch",
        body: "SEO, documentation and launch preparation.",
      },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2026-01-20"),
  },
  {
    slug: "clokwork",
    title: "Clokwork",
    client: "Clokwork",
    category: "SaaS",
    excerpt:
      "Workforce time-tracking platform with desktop sync, activity analytics and productivity dashboards.",
    description:
      "Clokwork helps remote teams automate attendance, see active versus idle time, and turn activity into productivity insight — with a marketing site that shows the dashboard early.",
    coverImage: "/portfolio/the-clokwork.jpg",
    gallery: ["/portfolio/the-clokwork-full.jpg"],
    metrics: [
      { label: "Countries", value: "35+" },
      { label: "Hours tracked", value: "180K+" },
      { label: "Sync interval", value: "30 sec" },
    ],
    technologies: ["Next.js", "Desktop tracker", "Real-time sync", "Analytics"],
    timeline: [],
    tintKey: "clokwork",
    liveUrl: "https://theclokwork.com",
    mockup: "dash",
    servicesLabel: "SaaS marketing website, Product positioning",
    stackLabel: "Next.js, Desktop tracker, Real-time sync",
    timelineLabel: "10 weeks · theclokwork.com",
    brief:
      "Clokwork helps remote and distributed teams automate attendance, see active versus idle time and turn activity into productivity insight. We built a dark, conversion-focused marketing site that shows the dashboard early, because buyers need to see tracked hours and live activity before they trust the pitch.",
    builtItems: [
      "Real-time dashboard preview in the hero",
      "Screenshot sync that keeps working offline",
      "Role-based portals for admins and employees",
      "Desktop tracker downloads",
      "Transparent pricing page",
    ],
    howItRan: [
      {
        title: "Weeks 1–2 · Product story",
        body: "Positioning time tracking, idle analytics and admin portals.",
      },
      {
        title: "Weeks 3–8 · Design and build",
        body: "Hero dashboard, features, pricing and download pages.",
      },
      {
        title: "Weeks 9–10 · Launch",
        body: "Conversion tuning, trust-building FAQ and blog content.",
      },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2025-12-10"),
  },
  {
    slug: "color-n-shape",
    title: "Color N Shape",
    client: "Color N Shape",
    category: "EdTech · Consumer",
    excerpt:
      "An interactive drawing platform that helps young children explore shapes and colours.",
    description:
      "Color N Shape is a joyful learning product where toddlers explore shapes and colours through interactive drawing — large touch targets, bright visuals, and parent-friendly content.",
    coverImage: "/portfolio/color-n-shapes.jpg",
    gallery: ["/portfolio/color-n-shapes-full.jpg"],
    metrics: [
      { label: "Audience", value: "Toddlers" },
      { label: "Learning focus", value: "Shapes + colour" },
      { label: "UX goal", value: "Simple, joyful" },
    ],
    technologies: ["Next.js", "Canvas", "Interactive UI"],
    timeline: [],
    tintKey: "colornshapes",
    liveUrl: "https://colornshapes.com",
    mockup: "canvas",
    servicesLabel: "Web development, Interactive UI design",
    stackLabel: "Next.js, Canvas, Interactive UI",
    timelineLabel: "12 weeks · colornshapes.com",
    brief:
      "Toddler products fail when they look like adult dashboards. Color N Shape needed to feel like play: reference images, simple outlines and an inviting colour wheel, so kids practise focus and hand-eye coordination while they learn shapes and colours, in a safe space parents trust.",
    builtItems: [
      "Canvas colouring with an on-canvas palette",
      "Reference-based colouring activities",
      "Large touch targets and minimal chrome",
      "Bright, high-contrast visuals with instant feedback",
      "Category discovery that feels like exploring",
      "Content written for parents",
    ],
    howItRan: [
      {
        title: "Weeks 1–2 · Concept",
        body: "Child-safe UX principles and activity-flow design.",
      },
      {
        title: "Weeks 3–10 · Product build",
        body: "Canvas colouring, categories and content library.",
      },
      {
        title: "Weeks 11–12 · Launch",
        body: "Parent-education content and final refinements.",
      },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2025-11-05"),
  },
];

export const seedTestimonials: Omit<Testimonial, "_id">[] = [
  {
    quote:
      "Priyos Shop finally feels like a real brand online. Fast, clear, and built for how our customers actually buy.",
    author: "Sharfuddin Ahmed",
    role: "Founder",
    company: "Priyos Shop",
    avatar: "",
    rating: 5,
    published: true,
  },
  {
    quote:
      "Englishence’s AI practice experience is exactly what PTE students needed. The product story and platform UX are excellent.",
    author: "Product Lead",
    role: "Co-founder",
    company: "Englishence",
    avatar: "",
    rating: 5,
    published: true,
  },
  {
    quote:
      "MooChatAI’s site makes the value obvious in seconds. Merchants instantly understand how AI chat recovers carts and lifts sales.",
    author: "Growth Lead",
    role: "Founder",
    company: "MooChatAI",
    avatar: "",
    rating: 5,
    published: true,
  },
  {
    quote:
      "Clokwork gives our remote teams a clear picture of activity without micromanaging. Payroll and coaching are finally grounded in data.",
    author: "People Ops",
    role: "Head of Operations",
    company: "Clokwork",
    avatar: "",
    rating: 5,
    published: true,
  },
  {
    quote:
      "Color N Shape feels like play, not a dashboard. Our toddlers stay engaged while exploring shapes and colours.",
    author: "Parent",
    role: "Early adopter",
    company: "Color N Shape",
    avatar: "",
    rating: 5,
    published: true,
  },
];

export const seedBlogs: Omit<BlogPost, "_id">[] = [
  {
    slug: "ai-shopping-assistants-that-actually-convert",
    title: "AI Shopping Assistants That Actually Convert",
    excerpt:
      "Lessons from building MooChatAI: how conversational commerce recovers carts, guides checkout, and lifts revenue.",
    content: `<p>Most store chat widgets answer FAQs. The ones that move revenue help shoppers find products, compare options, and complete checkout without friction.</p>
<h2>What high-converting AI chat does</h2>
<p>From our work on <a href="https://www.moochatai.com/">MooChatAI</a>, the winning pattern is clear:</p>
<ul>
<li>Natural-language product search across the live catalog</li>
<li>In-chat cart actions and recommendations</li>
<li>Abandoned cart recovery with proactive prompts</li>
<li>Multilingual conversations for international buyers</li>
<li>Human handoff when the question needs a person</li>
</ul>
<figure>
<img src="/portfolio/moocha-tai.jpg" alt="MooChatAI marketing site screenshot" />
<figcaption>MooChatAI positions AI chat as a conversion channel, not just a support widget.</figcaption>
</figure>
<h2>Why merchants care</h2>
<p>When AI chat is connected to catalog, cart, and order data, it stops being a support cost center and becomes a conversion channel. Merchants see faster answers, fewer abandoned carts, and clearer attribution from conversation to purchase.</p>
<h2>What to build first</h2>
<p>Start with product discovery and cart recovery. Those two workflows create measurable lift quickly. Layer in order tracking, coupons, and training content once the core loop is proven.</p>`,
    coverImage: "/portfolio/moocha-tai.jpg",
    author: "Onesoftauto Team",
    category: "AI",
    tags: ["AI", "E-commerce", "Conversion", "SaaS"],
    featured: true,
    published: true,
    publishedAt: new Date("2026-06-10"),
    readTime: 7,
  },
  {
    slug: "building-an-ai-powered-pte-practice-platform",
    title: "Building an AI-Powered PTE Practice Platform",
    excerpt:
      "How Englishence combines scoring, mock tests, and learner analytics into a focused EdTech product.",
    content: `<p>EdTech products succeed when they feel like the real exam — and then make improvement obvious.</p>
<h2>The product problem</h2>
<p>PTE candidates need more than static question banks. They need instant scoring, personalized feedback, and a path from weak areas to target scores. That is the foundation we shaped for <a href="https://englishencypte.com/">Englishence</a>.</p>
<figure>
<img src="/portfolio/english-encypte.jpg" alt="Englishence PTE platform homepage" />
<figcaption>Englishence leads with proof metrics and a clear start path for PTE candidates.</figcaption>
</figure>
<h2>Core product pillars</h2>
<ul>
<li>AI scoring for speaking and writing tasks</li>
<li>Full-length mock tests that mirror exam pressure</li>
<li>Progress analytics so learners see what improved</li>
<li>Clear trial and pricing conversion on the marketing site</li>
</ul>
<h2>Design takeaway</h2>
<p>For learning products, trust is UI. Clean hierarchy, proof metrics, and a frictionless start path matter as much as the model quality behind the scenes.</p>`,
    coverImage: "/portfolio/english-encypte.jpg",
    author: "Onesoftauto Team",
    category: "EdTech",
    tags: ["EdTech", "AI", "SaaS", "Product"],
    featured: true,
    published: true,
    publishedAt: new Date("2026-05-28"),
    readTime: 6,
  },
  {
    slug: "ecommerce-for-local-markets-priyos-shop",
    title: "E-commerce for Local Markets: Lessons from Priyos Shop",
    excerpt:
      "How we designed a Bangladesh-first storefront for Thai beauty and tech with trust, speed, and clear merchandising.",
    content: `<p>Global template themes rarely fit local buying behavior. Currency, shipping thresholds, trust signals, and category storytelling all need to feel native.</p>
<h2>What Priyos needed</h2>
<p><a href="https://priyos.shop/">Priyos Shop</a> sells authentic Thai beauty and trusted gadgets to Bangladesh shoppers. The site had to communicate authenticity quickly, make discovery simple, and reduce checkout anxiety.</p>
<figure>
<img src="/portfolio/priyos-shop.jpg" alt="Priyos Shop homepage screenshot" />
<figcaption>Priyos Shop balances brand storytelling with category discovery for local shoppers.</figcaption>
</figure>
<h2>What we prioritized</h2>
<ul>
<li>Hero messaging that sells the brand promise in one glance</li>
<li>Category entry points for beauty and electronics</li>
<li>Local logistics cues like free shipping thresholds</li>
<li>Mobile-first browsing and secure payment confidence</li>
</ul>
<h2>Result</h2>
<p>A storefront that feels premium without becoming complicated — and that is tuned for the market it actually serves.</p>`,
    coverImage: "/portfolio/priyos-shop.jpg",
    author: "Onesoftauto Team",
    category: "E-commerce",
    tags: ["E-commerce", "UX", "Local Markets"],
    featured: true,
    published: true,
    publishedAt: new Date("2026-05-12"),
    readTime: 5,
  },
  {
    slug: "employee-time-tracking-that-remote-teams-trust",
    title: "Employee Time Tracking That Remote Teams Trust",
    excerpt:
      "Lessons from building Clokwork: attendance, idle analytics, screenshot sync, and dashboards remote teams actually use.",
    content: `<p>Remote teams do not need more surveillance theater. They need reliable attendance, clear activity signals, and reports that support payroll and coaching.</p>
<h2>What Clokwork focuses on</h2>
<p><a href="https://theclokwork.com/">Clokwork</a> combines desktop tracking with organization dashboards so admins can see active time, idle time, app usage, and productivity scores — with real-time sync and screenshot monitoring that keeps working even offline.</p>
<figure>
<img src="/portfolio/the-clokwork.jpg" alt="Clokwork time tracking homepage screenshot" />
<figcaption>Clokwork leads with dashboard clarity so buyers can trust the product story immediately.</figcaption>
</figure>
<ul>
<li>Automated attendance and activity capture</li>
<li>Active vs idle analytics for coaching conversations</li>
<li>Role-based portals for admins and employees</li>
<li>CSV exports for payroll and audit workflows</li>
</ul>
<h2>Product storytelling tip</h2>
<p>For workforce tools, show the dashboard early. Buyers need to see tracked hours, live activity, and sync reliability before they trust the pitch.</p>`,
    coverImage: "/portfolio/the-clokwork.jpg",
    author: "Onesoftauto Team",
    category: "SaaS",
    tags: ["SaaS", "Productivity", "Remote Work"],
    featured: false,
    published: true,
    publishedAt: new Date("2026-04-22"),
    readTime: 5,
  },
  {
    slug: "designing-playful-learning-apps-for-toddlers",
    title: "Designing Playful Learning Apps for Toddlers",
    excerpt:
      "UX principles from Color N Shape: simplicity, color, motor skills, and joy-first interaction design.",
    content: `<p>Toddler products fail when they look like adult dashboards. They succeed when every interaction feels like play.</p>
<h2>Principles we used on Color N Shape</h2>
<p>For <a href="https://colornshapes.com/">Color N Shape</a>, the experience centers on reference images, simple outlines, and an inviting color wheel. Kids learn shapes and colors while practicing focus and hand-eye coordination.</p>
<figure>
<img src="/portfolio/color-n-shapes.jpg" alt="Color N Shape coloring experience" />
<figcaption>Color N Shape keeps chrome minimal so toddlers can stay focused on the canvas.</figcaption>
</figure>
<ul>
<li>Large touch targets and minimal chrome</li>
<li>Bright, high-contrast visuals</li>
<li>Immediate feedback from coloring actions</li>
<li>Category discovery that feels like exploration</li>
</ul>
<h2>For parents and product teams</h2>
<p>The best early-learning apps hide complexity. Keep the canvas joyful, keep instructions visual, and let learning emerge from play rather than lectures.</p>`,
    coverImage: "/portfolio/color-n-shapes.jpg",
    author: "Onesoftauto Team",
    category: "Product Design",
    tags: ["EdTech", "UX", "Kids Apps"],
    featured: false,
    published: true,
    publishedAt: new Date("2026-04-05"),
    readTime: 5,
  },
];

export const clientLogos: { name: string; logo: string }[] = [
  { name: "Priyos Shop", logo: "/clients/priyos.svg" },
  { name: "Englishence", logo: "/clients/englishence.svg" },
  { name: "MooChatAI", logo: "/clients/moochatai.svg" },
  { name: "Clokwork", logo: "/clients/the-clokwork.svg" },
  { name: "Color N Shape", logo: "/clients/colornshapes.svg" },
];

export const agencyStats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 80, suffix: "+" },
  { label: "Team Experts", value: 25, suffix: "+" },
  { label: "Years Experience", value: 8, suffix: "+" },
];

export const processSteps = [
  {
    title: "Discover",
    description: "Your goals, users and market.",
    icon: "search",
  },
  {
    title: "Plan",
    description: "Roadmap, architecture and success metrics.",
    icon: "map",
  },
  {
    title: "Design",
    description: "Wireframes to tested, polished screens.",
    icon: "palette",
  },
  {
    title: "Build",
    description: "Sprints with a demo every week.",
    icon: "code",
  },
  {
    title: "Launch",
    description: "Deploy, monitor and keep improving.",
    icon: "rocket",
  },
];

export const seedFaqs: Omit<Faq, "_id">[] = [
  {
    group: "Working together",
    question: "How long does a project take?",
    answer:
      "It depends on the size and scope of your project. After a short discovery call, we send a clear plan with milestones, so you know what to expect before we start.",
    order: 1,
    published: true,
  },
  {
    group: "Working together",
    question: "Do you work with startups?",
    answer:
      "Yes. We help you cut scope to what you need for launch, then grow the product with you.",
    order: 2,
    published: true,
  },
  {
    group: "Working together",
    question: "How do we stay in touch during the project?",
    answer:
      "A shared chat channel, a live task board and a demo call every week, so you always see real progress.",
    order: 3,
    published: true,
  },
  {
    group: "Working together",
    question: "Where are you based?",
    answer:
      "Dhaka, Bangladesh (GMT+6). We work with clients across time zones and plan calls around your working hours.",
    order: 4,
    published: true,
  },
  {
    group: "Pricing and ownership",
    question: "How much does a project cost?",
    answer:
      "It depends on scope. After the first call we send a written quote, so you know the price before any work starts.",
    order: 5,
    published: true,
  },
  {
    group: "Pricing and ownership",
    question: "Who owns the code and designs?",
    answer: "You do. Code, designs and accounts are yours from day one.",
    order: 6,
    published: true,
  },
  {
    group: "Services",
    question: "Which technologies do you use?",
    answer:
      "We choose the stack for each project. Most of our work uses modern web frameworks, mobile frameworks, e-commerce platforms and AI models.",
    order: 7,
    published: true,
  },
  {
    group: "Services",
    question: "Can you help secure our existing systems?",
    answer:
      "Yes. Our network and cybersecurity service covers security audits, hardening and ongoing monitoring for existing systems as well as new ones.",
    order: 8,
    published: true,
  },
  {
    group: "After launch",
    question: "Do you support the product after launch?",
    answer:
      "Yes. Monthly care plans cover hosting, updates, monitoring and small improvements.",
    order: 9,
    published: true,
  },
];

/** @deprecated Use getFaqs() or seedFaqs — flat list for legacy homepage accordion */
export const faqs = seedFaqs.map(({ question, answer }) => ({ question, answer }));

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
