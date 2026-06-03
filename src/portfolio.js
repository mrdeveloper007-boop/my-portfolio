/* ============================================
   Abdul Qadeer — Shopify Full Stack Developer
   Portfolio configuration
   Edit this file to update site content.
   Colors live in src/_globalColor.scss
   ============================================ */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// ---- Splash screen ----
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1800
};

// ---- Hero illustration ----
const illustration = {
  animated: true
};

// ---- Greeting / Hero ----
const greeting = {
  username: "Abdul Qadeer",
  title: "Hi, I'm Abdul Qadeer",
  tagline: "Full Stack Developer · Shopify Plus Specialist",
  subTitle: emoji(
    "I build modern web apps end-to-end — from production-grade Shopify & Shopify Plus stores to custom React/Node applications, GraphQL APIs, and cloud-deployed backends. 3+ years shipping real products for real revenue."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1UILznJ2ecVIazvRXywGsD6jPPfsMiAcm",
  displayGreeting: true,
  badges: {
    status: "Available for new projects",
    location: "Lahore, Pakistan · Working globally"
  }
};

// ---- Social Media ----
const socialMediaLinks = {
  github: "https://github.com/mrdeveloper007-boop",
  linkedin: "https://www.linkedin.com/in/qadeer-ghaffar-665430197/",
  gmail: "mr.developer38@gmail.com",
  whatsapp: "https://wa.me/923134503753",
  display: true
};

// ---- Stats strip (NEW) — trust signals ----
const statsStrip = {
  display: true,
  stats: [
    {label: "Years building Shopify", value: 3, suffix: "+"},
    {label: "Private apps shipped", value: 3, suffix: ""},
    {label: "Client stores delivered", value: 100, suffix: "+"},
    {label: "Average Lighthouse score", value: 90, suffix: "+"}
  ]
};

// ---- Client logos marquee (NEW) — scrolling row ----
const clientLogosMarquee = {
  display: true,
  title: "Trusted by brands & agencies",
  clients: [
    {name: "Fashionphile", logo: require("./assets/images/fahionphile.png"), url: "https://www.fashionphile.com/"},
    {name: "The Kiddospace", logo: require("./assets/images/kiddospace.png"), url: "https://thekiddospacestore.com/"},
    {name: "Scrubser", logo: require("./assets/images/scrubser.png"), url: "https://scrubser-shop.com/"},
    {name: "Valley Eyewear", logo: require("./assets/images/valleyeyewear.png"), url: "https://valleyeyewear.com/"},
    {name: "Lumu", logo: require("./assets/images/lumu.png"), url: "#"}
  ]
};

// ---- Skills section ("What I do") ----
const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK SHOPIFY DEVELOPER — DYNAMIC THEMES, CUSTOM APPS, FUNCTIONS & CHECKOUT EXTENSIBILITY",
  skills: [
    emoji(
      "⚡ Build Shopify & Shopify Plus stores end-to-end on Dawn and the new Horizon theme"
    ),
    emoji(
      "⚡ Develop dynamic sections, blocks & metafield/metaobject-powered features"
    ),
    emoji(
      "⚡ Build custom Shopify apps with Remix, Polaris, App Bridge & Admin GraphQL API"
    ),
    emoji(
      "⚡ Ship Shopify Functions in TypeScript — discount, cart-transform, delivery"
    ),
    emoji(
      "⚡ Build Checkout UI Extensions & Branding API on Shopify Plus"
    )
  ],

  softwareSkills: [
    {skillName: "Shopify", fontAwesomeClassname: "fab fa-shopify"},
    {skillName: "Liquid", fontAwesomeClassname: "fas fa-code"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-file-code"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node"},
    {skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "Tailwind", fontAwesomeClassname: "fas fa-wind"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Figma", fontAwesomeClassname: "fab fa-figma"}
  ],
  display: true
};

// ---- Education ----
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Engineering and Technology (UET), Lahore",
      logo: require("./assets/images/uetlogo.png"),
      subHeader: "Bachelor of Science in Computer Science (BSCS)",
      duration: "2019 - 2023",
      desc: "Strong focus on web development, eCommerce architecture, and software engineering.",
      descBullets: [
        "Multiple web-based development projects",
        "Foundation in algorithms, data structures, and modern web tech"
      ]
    },
    {
      schoolName: "Government College University (GCU)",
      logo: require("./assets/images/gculogo.png"),
      subHeader: "Intermediate (Pre-Engineering)",
      duration: "2016 - 2018",
      desc: "Pre-engineering foundation with early exposure to programming.",
      descBullets: ["Built early interest in web technologies"]
    }
  ]
};

// ---- Tech proficiency (legacy progress bars — hidden) ----
const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// ---- Full Stack tech grid (NEW) — replaces dated progress bars ----
const techStackGrid = {
  display: true,
  title: "My Full Stack Toolkit",
  subtitle: "The technologies I reach for every day — from pixel to production",
  columns: [
    {
      label: "Frontend",
      icon: "fas fa-paint-brush",
      stack: [
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
      stack: [
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
      stack: [
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
      stack: [
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
  ]
};

// ---- Process Timeline (NEW) — how I work ----
const processTimeline = {
  display: true,
  title: "How I work",
  subtitle: "A predictable, low-risk path from idea to launch",
  steps: [
    {
      icon: "fas fa-search",
      label: "Discovery",
      desc: "Understand goals, audience, constraints, success metrics."
    },
    {
      icon: "fas fa-drafting-compass",
      label: "Architecture",
      desc: "Scope features, model data, pick the right stack, agree on shape."
    },
    {
      icon: "fas fa-bolt",
      label: "Build",
      desc: "Ship in small reviewable slices — sections, blocks, endpoints, screens."
    },
    {
      icon: "fas fa-vial",
      label: "QA",
      desc: "Lighthouse, accessibility, cross-browser, real-device, edge cases."
    },
    {
      icon: "fas fa-rocket",
      label: "Launch",
      desc: "Production deploy, smoke tests, monitoring hooks, rollback plan."
    },
    {
      icon: "fas fa-handshake",
      label: "Handover",
      desc: "Docs, walk-through video, post-launch support window."
    }
  ]
};

// ---- Work experience (clients) ----
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Shopify Full Stack Developer — Dawn Custom Pages",
      company: "Fashionphile",
      companylogo: require("./assets/images/fahionphile.png"),
      date: "Dec 2025 – Feb 2026",
      desc: "Dynamic page development on Dawn for a global fashion resale brand with 40+ stores worldwide.",
      descBullets: [
        "Built 12+ custom Dawn pages on Online Store 2.0 — reusable sections/blocks",
        "Shipped \"Is This Authentic?\" interactive game in vanilla JS — event-driven, dynamic DOM",
        "Implemented section-within-section rendering via Section Rendering API"
      ]
    },
    {
      role: "Shopify Full Stack Developer — International Brand",
      company: "The Kiddospace",
      companylogo: require("./assets/images/kiddospace.png"),
      date: "Mar 2025 – Oct 2025",
      desc: "Full storefront revamp for an international children's brand operating 42+ stores worldwide.",
      descBullets: [
        "Built dynamic sections powered by metafields and metaobjects",
        "Translated Figma into pixel-perfect Liquid sections; advanced filtering",
        "Lifted AOV via ReConvert / AfterSell; cut load times with lazy loading & WebP"
      ]
    },
    {
      role: "Shopify Full Stack Developer — Dawn From Scratch",
      company: "Scrubser",
      companylogo: require("./assets/images/scrubser.png"),
      date: "Mar 2024 – Dec 2024",
      desc: "Built the Dawn-based storefront from scratch — branding, layout, navigation, and core architecture.",
      descBullets: [
        "Multi-level brand-based navigation + dynamic homepage sections",
        "Shopify-native filtering / facets; minimal third-party app dependency",
        "Clean modular section architecture with metafield-driven content blocks"
      ]
    },
    {
      role: "Shopify Full Stack Developer — Custom Product Page Engineering",
      company: "Valley Eyewear",
      companylogo: require("./assets/images/valleyeyewear.png"),
      date: "Freelance",
      desc: "Advanced Shopify development — custom mega menu, metafield-driven bundles, and third-party tool integration.",
      descBullets: [
        "Pixel-perfect header + hover-triggered mega menu across desktop/mobile",
        "Custom product page with metafield lens bundles + dynamic pricing logic",
        "Integrated third-party virtual try-on tool with seamless UI placement"
      ]
    },
    {
      role: "Shopify Full Stack Developer",
      company: "Lumu.pk",
      companylogo: require("./assets/images/lumu.png"),
      date: "2022 – 2023",
      desc: "Built a modern Shopify storefront with dynamic sections, branded UI, and performance-optimized architecture.",
      descBullets: [
        "Custom homepage sections and collection layouts with reusable blocks",
        "Improved store speed, UX, and mobile-first responsiveness",
        "Configured product structure, navigation, and marketing integrations"
      ]
    }
  ]
};

// ---- Open Source (GitHub pinned) — hidden until repos pinned ----
const openSource = {
  showGithubProfile: false,
  display: false
};

// ---- Big Projects (Custom Shopify Apps) ----
const bigProjects = {
  title: "Custom Shopify Apps",
  subtitle:
    "PRIVATE APPS SHIPPED TO LIVE CLIENT STORES — CODE CONFIDENTIAL UNDER CLIENT AGREEMENTS",
  projects: [
    {
      image: require("./assets/images/cartsense-app.png"),
      projectName: "CartSense — Cart Abandonment Insight",
      projectDesc:
        "Injects a lightweight feedback prompt into the cart and surfaces structured drop-off reasons (price, shipping, payment) in an embedded Admin dashboard. Built on Remix, Polaris, App Bridge, Admin GraphQL API, and a theme app extension.",
      footerLink: [
        {
          name: "Request Demo",
          url: "https://wa.me/923134503753?text=Hi%20Abdul%20Qadeer,%20I%20want%20a%20demo%20of%20CartSense%20App."
        }
      ]
    },
    {
      image: require("./assets/images/low-stock.png"),
      projectName: "Low Stock Inventory Tracker",
      projectDesc:
        "Background watcher on inventory_levels/update webhooks across the whole catalog. Pings the merchant the moment a SKU dips below a configurable threshold. Built on Node.js + Remix with embedded Polaris UI.",
      footerLink: [
        {
          name: "Request Demo",
          url: "https://wa.me/923134503753?text=Hi,%20I%20would%20like%20a%20demo%20of%20your%20Low%20Stock%20Inventory%20Tracker%20App."
        }
      ]
    },
    {
      image: require("./assets/images/shopify-app-dev.png"),
      projectName: "CronPilot — Scheduled Store Automations",
      projectDesc:
        "Cron-job runner built natively for Shopify. Schedule recurring store operations — inventory syncs, scheduled publishing, metafield refreshes, draft order creation — from a single Admin dashboard. Replaces brittle Zapier setups.",
      footerLink: [
        {
          name: "Request Demo",
          url: "https://wa.me/923134503753?text=Hi%20Abdul%20Qadeer,%20I%20want%20a%20demo%20of%20CronPilot%20App."
        }
      ]
    }
  ],
  display: true
};

// ---- Achievements / Skills cards ----
const achievementSection = {
  title: "Core Shopify Expertise",
  subtitle:
    "THE STACK I USE EVERY DAY TO SHIP DYNAMIC SHOPIFY STORES, APPS, AND PLUS-TIER FEATURES",
  achievementsCards: [
    {
      title: "Dynamic Theme Development",
      subtitle:
        "Liquid · Online Store 2.0 · Dawn · Horizon · Web Components · metafields / metaobjects",
      image: require("./assets/images/shopify-theme-dev.png"),
      footerLink: []
    },
    {
      title: "Custom App Development",
      subtitle:
        "Remix · Polaris · App Bridge · Admin GraphQL API · OAuth · Webhooks · Shopify Functions",
      image: require("./assets/images/shopify-app-dev.png"),
      footerLink: []
    },
    {
      title: "Performance & Checkout Extensibility",
      subtitle:
        "Lighthouse audits · lazy loading · WebP · Checkout UI Extensions · Branding API (Plus)",
      image: require("./assets/images/store-opt.png"),
      footerLink: []
    }
  ],
  display: true
};

// ---- Blogs (hidden until written) ----
const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// ---- Services grid (NEW) — 6 cards showcasing full stack range ----
const servicesGrid = {
  display: true,
  title: "Services",
  subtitle: "What I can build for you — end-to-end engineering, not just patches.",
  services: [
    {
      icon: "fab fa-shopify",
      title: "Shopify Plus Theme Development",
      desc: "Dynamic sections, blocks, metafields/metaobjects on Dawn or Horizon. Pixel-perfect Figma-to-Liquid with merchant-editable architecture."
    },
    {
      icon: "fas fa-cube",
      title: "Custom Shopify App Development",
      desc: "Embedded private apps on Remix + Polaris + App Bridge with Admin GraphQL API, OAuth, and webhooks. Three apps shipped to live stores."
    },
    {
      icon: "fas fa-code-branch",
      title: "Shopify Functions & Checkout Extensibility",
      desc: "TypeScript Shopify Functions (discount, cart-transform, delivery), Checkout UI extensions, and Branding API customizations on Plus."
    },
    {
      icon: "fas fa-layer-group",
      title: "Full Stack Web Development",
      desc: "Production React / Next.js frontends backed by Node.js + GraphQL/REST APIs. Auth, payments, dashboards, real-time features — deployed to Vercel."
    },
    {
      icon: "fas fa-plug",
      title: "API Design & Integrations",
      desc: "REST and GraphQL API design, third-party integrations, webhook handlers, ERP / CRM sync, payment gateway wiring."
    },
    {
      icon: "fas fa-tachometer-alt",
      title: "Performance Optimization",
      desc: "Lighthouse audits, lazy loading, WebP/AVIF, code splitting, render profiling — measurable Core Web Vitals improvements."
    }
  ]
};

// ---- Talks (kept for legacy template compatibility, hidden) ----
const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false
};

// ---- Podcast (hidden) ----
const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

// ---- FAQ (NEW) ----
const faqSection = {
  display: true,
  title: "Common questions",
  subtitle: "Quick answers to what most clients ask before we kick off.",
  items: [
    {
      q: "What's your typical turnaround time?",
      a: "A custom theme section usually lands in 3–5 business days. A small private Shopify app or Function takes 1–3 weeks depending on scope. I scope realistically up-front and give a fixed delivery date."
    },
    {
      q: "Do you work hourly or fixed-price?",
      a: "Both. For well-defined work I prefer fixed-price with clear deliverables. For exploratory R&D, audits, or open-ended retainer work, hourly makes sense. We pick the model that fits the work."
    },
    {
      q: "Who owns the code?",
      a: "You do. On project sign-off you receive the full source, a clean Git history, and a walkthrough document. No vendor lock-in, no hidden licensing."
    },
    {
      q: "Will you sign an NDA?",
      a: "Yes, gladly. I've shipped three private Shopify apps to live stores under NDA. Mutual NDA before scoping is normal in my workflow."
    },
    {
      q: "How do we communicate during the project?",
      a: "Async-first: Slack / WhatsApp / email for daily updates, plus a shared task board (Linear / Notion / Trello — your choice). One short weekly sync call. I post end-of-day progress every working day."
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes. Every project includes a 14-day post-launch support window for bug-fixes and tweaks at no extra cost. After that, a flexible retainer is available if you want me on standby."
    }
  ]
};

// ---- Resume ----
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// ---- Contact ----
const contactInfo = {
  title: emoji("Let's Build Something Great Together 🚀"),
  subtitle:
    "Have a Shopify project in mind, or just want to say hi? My inbox is open.",
  number: "+92-313-4503753",
  email_address: "mr.developer38@gmail.com"
};

// ---- Twitter (hidden) ----
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  statsStrip,
  clientLogosMarquee,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  techStackGrid,
  processTimeline,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  servicesGrid,
  faqSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
