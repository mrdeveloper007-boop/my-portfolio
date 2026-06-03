// ============================================
// Abdul Qadeer — Portfolio content
// Single source of truth for every section.
// ============================================

export const profile = {
  name: "Abdul Qadeer",
  shortName: "AQ",
  role: "Shopify Full Stack Developer",
  tagline: "Shopify Plus Specialist · React · Node.js",
  location: "Lahore, Pakistan",
  availability: "Available for new projects",
  yearsExperience: "3+",
  email: "mr.developer38@gmail.com",
  phone: "+92 313 4503753",
  whatsapp: "https://wa.me/923134503753",
  linkedin: "https://www.linkedin.com/in/qadeer-ghaffar-665430197/",
  github: "https://github.com/mrdeveloper007-boop",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1UILznJ2ecVIazvRXywGsD6jPPfsMiAcm"
};

export const hero = {
  pitch:
    "I design and engineer Shopify stores that ship revenue — pixel-perfect themes, custom apps, and Plus-tier checkout customizations.",
  metrics: [
    {value: "3+", label: "Years on Shopify"},
    {value: "100+", label: "Stores delivered"},
    {value: "3", label: "Private apps shipped"},
    {value: "90+", label: "Avg Lighthouse"}
  ]
};

export const clients = [
  "Fashionphile",
  "The Kiddospace",
  "Scrubser",
  "Valley Eyewear",
  "Lumu"
];

export const services = [
  {
    icon: "fab fa-shopify",
    title: "Shopify Plus Themes",
    desc: "Dynamic sections, blocks, metafields and metaobjects on Dawn or Horizon. Pixel-perfect Figma-to-Liquid with merchant-editable architecture."
  },
  {
    icon: "fas fa-cube",
    title: "Custom Shopify Apps",
    desc: "Embedded private apps on Remix + Polaris + App Bridge with Admin GraphQL API, OAuth and webhooks. Three apps shipped to live stores."
  },
  {
    icon: "fas fa-code-branch",
    title: "Functions & Checkout",
    desc: "TypeScript Shopify Functions (discount, cart-transform, delivery), Checkout UI extensions and Branding API customizations on Plus."
  },
  {
    icon: "fas fa-layer-group",
    title: "Full Stack Web",
    desc: "Production React / Next.js frontends backed by Node.js and GraphQL/REST APIs. Auth, payments, dashboards, deployed to Vercel."
  },
  {
    icon: "fas fa-plug",
    title: "APIs & Integrations",
    desc: "REST and GraphQL API design, third-party integrations, webhook handlers, ERP / CRM sync and payment gateway wiring."
  },
  {
    icon: "fas fa-tachometer-alt",
    title: "Performance Tuning",
    desc: "Lighthouse audits, lazy loading, WebP/AVIF, code splitting, render profiling — measurable Core Web Vitals improvements."
  }
];

export const apps = [
  {
    name: "CartSense",
    sub: "Cart Abandonment Insight",
    desc: "Injects a lightweight feedback prompt into the cart and surfaces structured drop-off reasons (price, shipping, payment) in an embedded Admin dashboard.",
    stack: ["Remix", "Polaris", "App Bridge", "Admin GraphQL", "Theme App Ext."],
    accent: "#10b981",
    icon: "fas fa-shopping-cart",
    cta: "https://wa.me/923134503753?text=Hi%20Abdul%20Qadeer,%20I%20want%20a%20demo%20of%20CartSense."
  },
  {
    name: "Low Stock Tracker",
    sub: "Inventory Watcher",
    desc: "Background watcher on inventory_levels/update webhooks across the whole catalog. Pings the merchant the moment a SKU dips below a configurable threshold.",
    stack: ["Node.js", "Remix", "Polaris", "Webhooks", "Cron"],
    accent: "#f59e0b",
    icon: "fas fa-boxes",
    cta: "https://wa.me/923134503753?text=Hi%20Abdul%20Qadeer,%20I%20want%20a%20demo%20of%20Low%20Stock%20Tracker."
  },
  {
    name: "CronPilot",
    sub: "Scheduled Store Automations",
    desc: "Cron-job runner built natively for Shopify. Schedule recurring store operations — inventory syncs, scheduled publishing, metafield refreshes — from a single Admin dashboard.",
    stack: ["Remix", "Node.js", "Polaris", "Admin GraphQL", "Queues"],
    accent: "#6366f1",
    icon: "fas fa-clock",
    cta: "https://wa.me/923134503753?text=Hi%20Abdul%20Qadeer,%20I%20want%20a%20demo%20of%20CronPilot."
  }
];

export const experience = [
  {
    role: "Shopify Full Stack Developer — Dawn Custom Pages",
    company: "Fashionphile",
    location: "Global · Fashion Resale",
    date: "Dec 2025 – Feb 2026",
    bullets: [
      "Built 12+ custom Dawn pages on Online Store 2.0 — reusable sections and blocks",
      "Shipped “Is This Authentic?” interactive game in vanilla JS — event-driven, dynamic DOM",
      "Implemented section-within-section rendering via Section Rendering API"
    ]
  },
  {
    role: "Shopify Full Stack Developer — International Storefront",
    company: "The Kiddospace",
    location: "42+ stores worldwide",
    date: "Mar 2025 – Oct 2025",
    bullets: [
      "Full storefront revamp powered by metafields and metaobjects",
      "Pixel-perfect Figma → Liquid translation with advanced filtering",
      "Lifted AOV via ReConvert / AfterSell; cut load times with lazy loading and WebP"
    ]
  },
  {
    role: "Shopify Full Stack Developer — Dawn From Scratch",
    company: "Scrubser",
    location: "Premium scrubs brand",
    date: "Mar 2024 – Dec 2024",
    bullets: [
      "Built the Dawn-based storefront from scratch — branding, layout, navigation, architecture",
      "Multi-level brand-based navigation + dynamic homepage sections",
      "Shopify-native filtering/facets; minimal third-party app dependency"
    ]
  },
  {
    role: "Shopify Full Stack Developer — Custom Product Page",
    company: "Valley Eyewear",
    location: "Premium eyewear · Australia",
    date: "Freelance",
    bullets: [
      "Pixel-perfect header + hover-triggered mega menu across desktop and mobile",
      "Custom product page with metafield lens bundles + dynamic pricing logic",
      "Integrated third-party virtual try-on tool with seamless UI placement"
    ]
  },
  {
    role: "Shopify Full Stack Developer",
    company: "Lumu.pk",
    location: "Lifestyle brand",
    date: "2022 – 2023",
    bullets: [
      "Custom homepage sections and collection layouts with reusable blocks",
      "Improved store speed, UX and mobile-first responsiveness",
      "Configured product structure, navigation and marketing integrations"
    ]
  }
];

export const stack = [
  {
    label: "Frontend",
    icon: "fas fa-paint-brush",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SCSS",
      "Web Components",
      "Vite",
      "Figma to Code"
    ]
  },
  {
    label: "Backend",
    icon: "fas fa-server",
    items: [
      "Node.js",
      "Remix",
      "Express",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "OAuth / JWT",
      "Webhooks"
    ]
  },
  {
    label: "Shopify",
    icon: "fab fa-shopify",
    items: [
      "Liquid",
      "Online Store 2.0",
      "Dawn & Horizon",
      "Shopify Functions",
      "Checkout Extensibility",
      "Polaris · App Bridge",
      "Admin GraphQL API",
      "Storefront API"
    ]
  },
  {
    label: "DevOps & Tools",
    icon: "fas fa-cogs",
    items: [
      "Git · GitHub",
      "GitHub Actions",
      "Vercel",
      "Docker",
      "npm · pnpm",
      "ESLint · Prettier",
      "Lighthouse",
      "Postman"
    ]
  }
];

export const education = [
  {
    school: "University of Engineering and Technology (UET), Lahore",
    degree: "BS Computer Science",
    date: "2019 – 2023",
    note:
      "Focus on web development, eCommerce architecture and software engineering."
  },
  {
    school: "Government College University (GCU), Lahore",
    degree: "Intermediate · Pre-Engineering",
    date: "2016 – 2018",
    note: "Early exposure to programming and web technologies."
  }
];

export const faqs = [
  {
    q: "What is your typical turnaround time?",
    a: "A custom Shopify theme section usually lands in 3–5 business days. A small private Shopify app or Function takes 1–3 weeks depending on scope. I scope realistically up-front and give a fixed delivery date."
  },
  {
    q: "Do you work hourly or fixed-price?",
    a: "Both. For well-defined work I prefer fixed-price with clear deliverables. For exploratory R&D, audits or open-ended retainer work, hourly makes sense. We pick the model that fits the work."
  },
  {
    q: "Who owns the code?",
    a: "You do. On project sign-off you receive the full source, a clean Git history and a walkthrough document. No vendor lock-in, no hidden licensing."
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes, gladly. I have shipped three private Shopify apps to live stores under NDA. A mutual NDA before scoping is normal in my workflow."
  },
  {
    q: "How do we communicate during the project?",
    a: "Async-first: Slack, WhatsApp or email for daily updates, plus a shared task board (Linear, Notion or Trello — your choice). One short weekly sync call. I post end-of-day progress every working day."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every project includes a 14-day post-launch support window for bug fixes and tweaks at no extra cost. After that, a flexible retainer is available if you want me on standby."
  }
];

export const nav = [
  {label: "Work", href: "#work"},
  {label: "Services", href: "#services"},
  {label: "Experience", href: "#experience"},
  {label: "Stack", href: "#stack"},
  {label: "FAQ", href: "#faq"},
  {label: "Contact", href: "#contact"}
];
