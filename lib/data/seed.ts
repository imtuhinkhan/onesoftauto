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
    slug: "priyos-shop",
    title: "Priyos Shop — Thai Beauty & Tech Commerce",
    client: "Priyos Shop",
    category: "E-commerce",
    excerpt:
      "High-converting storefront for authentic Thai beauty and trusted gadgets, built for Bangladesh shoppers.",
    description:
      "We designed and engineered Priyos Shop (priyos.shop) as a modern e-commerce experience focused on Thai beauty products and consumer tech. The build includes a conversion-led hero, category discovery, promotional merchandising, secure checkout, and logistics messaging tailored to Bangladesh — free shipping thresholds, local currency, and mobile-first browsing.",
    coverImage: "/portfolio/priyos-shop.jpg",
    gallery: ["/portfolio/priyos-shop-full.jpg"],
    metrics: [
      { label: "Market", value: "Bangladesh" },
      { label: "Catalog Focus", value: "Beauty + Tech" },
      { label: "Checkout", value: "SSL secure" },
    ],
    technologies: ["Next.js", "E-commerce", "Tailwind CSS", "Payment Gateway"],
    timeline: [
      { phase: "Discovery", description: "Brand positioning, catalog structure, and local buyer journeys", date: "Week 1-2" },
      { phase: "Design", description: "Hero storytelling, category UX, and promotional layouts", date: "Week 3-5" },
      { phase: "Build", description: "Storefront, cart, checkout, and operations tooling", date: "Week 6-12" },
      { phase: "Launch", description: "Go-live, performance polish, and campaign readiness", date: "Week 13-14" },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2026-03-01"),
  },
  {
    slug: "englishence-pte",
    title: "Englishence — AI PTE Practice Platform",
    client: "Englishence",
    category: "EdTech / SaaS",
    excerpt:
      "AI-powered PTE Academic practice platform with scoring, mock tests, and progress analytics.",
    description:
      "Englishence (englishencypte.com) is a full learning product for PTE Academic candidates. We built a conversion-focused marketing site and product funnel around AI scoring, personalized feedback, mock exams, study tools, and subscription plans — helping students practice with real-exam fidelity and track score improvement over time.",
    coverImage: "/portfolio/english-encypte.jpg",
    gallery: ["/portfolio/english-encypte-full.jpg"],
    metrics: [
      { label: "Success Rate", value: "95%" },
      { label: "Students", value: "50K+" },
      { label: "Practice Items", value: "2M+" },
    ],
    technologies: ["Next.js", "AI Scoring", "SaaS Billing", "Analytics"],
    timeline: [
      { phase: "Product Strategy", description: "Learner journeys, scoring UX, and monetization", date: "Week 1-3" },
      { phase: "Platform Build", description: "Practice flows, mock tests, and dashboards", date: "Week 4-14" },
      { phase: "Growth Layer", description: "Landing pages, blog, and plan conversion paths", date: "Week 15-18" },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2026-02-15"),
  },
  {
    slug: "moochatai",
    title: "MooChatAI — AI Commerce Chat for Stores",
    client: "MooChatAI",
    category: "AI / SaaS",
    excerpt:
      "Productized AI shopping assistant for WooCommerce and Shopify that turns browsers into buyers.",
    description:
      "MooChatAI (moochatai.com) is a SaaS product that embeds an AI shopping assistant into WooCommerce and Shopify stores. We delivered a high-trust marketing site and product narrative covering intelligent product search, in-chat cart actions, abandoned-cart recovery, multilingual support, human handoff, analytics, and pricing — positioned for merchants who need measurable conversion lift without custom AI engineering.",
    coverImage: "/portfolio/moocha-tai.jpg",
    gallery: ["/portfolio/moocha-tai-full.jpg"],
    metrics: [
      { label: "Sales Lift", value: "+32%" },
      { label: "Languages", value: "90+" },
      { label: "Setup Time", value: "5 min" },
    ],
    technologies: ["Next.js", "OpenAI", "WooCommerce", "Shopify", "WordPress"],
    timeline: [
      { phase: "Positioning", description: "Feature hierarchy, proof points, and competitor framing", date: "Week 1-2" },
      { phase: "Site & Product Story", description: "Hero demos, feature sections, and pricing UX", date: "Week 3-8" },
      { phase: "Launch", description: "Conversion QA, SEO, and documentation pathways", date: "Week 9-10" },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2026-01-20"),
  },
  {
    slug: "the-clokwork",
    title: "Clokwork — Employee Time Tracking & Productivity",
    client: "Clokwork",
    category: "SaaS",
    excerpt:
      "Workforce time tracking platform with desktop sync, activity analytics, and productivity dashboards.",
    description:
      "Clokwork (theclokwork.com) helps remote and distributed teams automate attendance, monitor active vs idle time, and generate productivity reports. We built a dark, conversion-focused SaaS marketing site around the product story — real-time dashboards, screenshot sync, role-based portals, desktop tracker downloads, and transparent pricing — so organizations can understand the value and get started quickly.",
    coverImage: "/portfolio/the-clokwork.jpg",
    gallery: ["/portfolio/the-clokwork-full.jpg"],
    metrics: [
      { label: "Countries", value: "35+" },
      { label: "Tracked Hours", value: "180K+" },
      { label: "Sync Interval", value: "30s" },
    ],
    technologies: ["Next.js", "Desktop Tracker", "Real-time Sync", "Analytics"],
    timeline: [
      { phase: "Product Story", description: "Position time tracking, idle analytics, and admin portals", date: "Week 1-2" },
      { phase: "Design & Build", description: "Hero dashboard preview, features, pricing, and downloads", date: "Week 3-8" },
      { phase: "Launch", description: "Conversion polish, FAQ trust, and blog content paths", date: "Week 9-10" },
    ],
    featured: true,
    published: true,
    completedAt: new Date("2025-12-10"),
  },
  {
    slug: "color-n-shapes",
    title: "Color N Shape — Interactive Learning for Toddlers",
    client: "Color N Shape",
    category: "EdTech / Consumer",
    excerpt:
      "Playful coloring and shapes web app that helps babies and toddlers learn through creativity.",
    description:
      "Color N Shape (colornshapes.com) is a joyful learning product where toddlers explore shapes and colors through interactive drawing. We crafted a simple, bright experience with category discovery, reference-based coloring, an on-canvas palette, and parent-friendly content — designed for focus, motor skills, and early creativity in a safe digital environment.",
    coverImage: "/portfolio/color-n-shapes.jpg",
    gallery: ["/portfolio/color-n-shapes-full.jpg"],
    metrics: [
      { label: "Audience", value: "Toddlers" },
      { label: "Learning Focus", value: "Shapes + Color" },
      { label: "UX Goal", value: "Simple & joyful" },
    ],
    technologies: ["Next.js", "Canvas", "Interactive UI", "Content CMS"],
    timeline: [
      { phase: "Concept", description: "Child-safe UX principles and activity flows", date: "Week 1-2" },
      { phase: "Product Build", description: "Canvas coloring, categories, and content library", date: "Week 3-10" },
      { phase: "Launch", description: "Parent education content and polish", date: "Week 11-12" },
    ],
    featured: false,
    published: true,
    completedAt: new Date("2025-11-05"),
  },
];

export const seedTestimonials: Omit<Testimonial, "_id">[] = [
  {
    quote:
      "Priyos Shop finally feels like a real brand online — fast, clear, and built for how our customers actually buy.",
    author: "Operations Lead",
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
