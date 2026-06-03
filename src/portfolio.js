/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abdul Qadeer",
  title: "Hi all, I'm Abdul Qadeer",
  subTitle: emoji(
    "Shopify Full Stack Developer 🚀 with 3+ years building Shopify & Shopify Plus stores end-to-end — dynamic Liquid theme development on Dawn & Horizon, custom apps with Remix & Polaris, Shopify Functions, and Checkout Extensibility."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1UILznJ2ecVIazvRXywGsD6jPPfsMiAcm", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrdeveloper007-boop",
  linkedin: "https://www.linkedin.com/in/qadeer-ghaffar-665430197/",
  gmail: "mr.developer38@gmail.com",
  whatsapp: "https://wa.me/923134503753",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK SHOPIFY DEVELOPER — DYNAMIC THEMES, CUSTOM APPS, FUNCTIONS & CHECKOUT EXTENSIBILITY",
  skills: [
    emoji(
      "⚡ Build Shopify & Shopify Plus stores end-to-end on Dawn and the new Horizon theme"
    ),
    emoji(
      "⚡ Develop dynamic sections, blocks & metafield/metaobject-powered features in Liquid + Web Components"
    ),
    emoji(
      "⚡ Build custom Shopify apps with Remix, Polaris, App Bridge & Admin GraphQL API"
    ),
    emoji(
      "⚡ Ship Shopify Functions — discount, cart-transform, delivery customization in TypeScript"
    ),
    emoji(
      "⚡ Build Checkout UI Extensions & Branding API customizations on Shopify Plus"
    ),
    emoji(
      "⚡ Optimize storefront performance — Lighthouse, lazy loading, WebP, code splitting"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css5",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "Liquid",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Theme Dev",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      skillName: "Speed",
      fontAwesomeClassname: "fas fa-tachometer-alt"
    },
    {
      skillName: "Checkout",
      fontAwesomeClassname: "fas fa-credit-card"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "REST APIs",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Integrations",
      fontAwesomeClassname: "fas fa-project-diagram"
    }
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Engineering and Technology (UET), Lahore",
      logo: require("./assets/images/uetlogo.png"),
      subHeader: "Bachelor of Science in Computer Science (BSCS)",
      duration: "2019 - 2023",
      desc: "Completed my BS in Computer Science with a strong focus on web development, eCommerce solutions, and software engineering.",
      descBullets: [
        "Worked on multiple web-based development projects during my degree",
        "Developed skills in Shopify, JavaScript, and modern web technologies"
      ]
    },
    {
      schoolName: "Government College University (GCU)",
      logo: require("./assets/images/gculogo.png"),
      subHeader: "Intermediate (Pre-Engineering)",
      duration: "2016 - 2018",
      desc: "Completed college education and built my foundation in computer science and programming.",
      descBullets: [
        "Developed interest in web technologies and software development"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Shopify Theme Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Liquid Custom Coding",
      progressPercentage: "90%"
    },
    {
      Stack: "Shopify App Development (Private Apps)",
      progressPercentage: "85%"
    },
    {
      Stack: "Store Speed Optimization",
      progressPercentage: "88%"
    },
    {
      Stack: "API Integrations & Custom Features",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Shopify Full Stack Developer — Dawn Custom Pages",
      company: "Fashionphile",
      companylogo: require("./assets/images/fahionphile.png"),
      date: "Dec 2025 – Feb 2026",
      desc: "Dynamic page development on Dawn for a global fashion resale brand operating across 40+ stores worldwide.",
      descBullets: [
        "Built 12+ custom Dawn pages on Online Store 2.0 — reusable sections/blocks for scalable, merchant-editable content",
        "Built the \"Is This Authentic?\" interactive game page entirely in vanilla JavaScript — event-driven progression, dynamic DOM rendering, no page reloads",
        "Implemented section-within-section rendering via Section Rendering API for dynamic UI state swaps"
      ]
    },

    {
      role: "Shopify Full Stack Developer — International Brand",
      company: "The Kiddospace",
      companylogo: require("./assets/images/kiddospace.png"),
      date: "Mar 2025 – Oct 2025",
      desc: "Full storefront revamp for an international children's brand with 42+ stores worldwide; design consistency, navigation, and mobile responsiveness rebuilt from the ground up.",
      descBullets: [
        "Built dynamic sections powered by metafields and metaobjects for product discovery",
        "Translated Figma into pixel-perfect Liquid sections with advanced filtering",
        "Lifted AOV with ReConvert / AfterSell upsells; reduced page load times with lazy loading, WebP, and code minification"
      ]
    },

    {
      role: "Shopify Full Stack Developer — Dawn From Scratch",
      company: "Scrubser",
      companylogo: require("./assets/images/scrubser.png"),
      date: "Mar 2024 – Dec 2024",
      desc: "Built the Dawn-based storefront from scratch — branding, layout, navigation, and core storefront architecture.",
      descBullets: [
        "Built multi-level brand-based navigation, dynamic homepage sections, and Quick Buy on collection pages",
        "Configured product option interfaces (size, color) and Shopify-native filtering / facets — minimal third-party app dependency",
        "Developed clean, modular section architecture with metafield-driven content blocks"
      ]
    },

    {
      role: "Shopify Full Stack Developer — Custom Product Page Engineering",
      company: "ValleyEyeWear",
      companylogo: require("./assets/images/valleyeyewear.png"),
      date: "Freelance",
      desc: "Advanced Shopify development — custom mega menu, metafield-driven product bundles, and third-party tool integration.",
      descBullets: [
        "Built pixel-perfect header and hover-triggered mega menu matched to reference design across desktop/mobile",
        "Developed a fully custom product page using metafields for lens bundles (Non-Prescription, Single Vision, Progressive) with dynamic pricing logic",
        "Integrated third-party virtual try-on tool with seamless UI placement on the product page"
      ]
    },

    {
      role: "Shopify Full Stack Developer",
      company: "Lumu.pk",
      companylogo: require("./assets/images/lumu.png"),
      date: "2022 – 2023",
      desc: "Built a modern Shopify storefront with dynamic sections, branded UI, and performance-optimized architecture.",
      descBullets: [
        "Built custom homepage sections and collection layouts with reusable blocks",
        "Improved store speed, UX, and mobile-first responsiveness",
        "Configured product structure, navigation, and marketing integrations"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Custom Shopify Apps",
  subtitle:
    "PRIVATE SHOPIFY APPS I'VE BUILT — SHIPPED TO LIVE CLIENT STORES (CODE CONFIDENTIAL UNDER CLIENT AGREEMENTS)",
  projects: [
    {
      image: require("./assets/images/cartsense-app.png"),
      projectName: "CartSense — Cart Abandonment Insight",
      projectDesc:
        "Turn silent abandonment into actionable insight. Injects a lightweight feedback prompt into the cart and surfaces structured drop-off reasons (price, shipping, payment) plus free-text feedback in an embedded Admin dashboard. Built on Remix, Polaris, App Bridge, Admin GraphQL API, and a theme app extension.",
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
        "Never let a bestseller go out of stock. A background watcher that listens to inventory_levels/update webhooks across the whole catalog and pings the merchant the moment a SKU dips below a configurable threshold. Built on Node.js + Remix with an embedded Polaris UI.",
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
        "A cron-job runner built natively for Shopify. Lets merchants schedule recurring store operations — inventory syncs, scheduled product publishing/un-publishing, metafield refreshes, draft order creation — from a single Admin dashboard. Replaces brittle Zapier setups with a store-scoped, reliable solution. Built on Node.js, Remix, Polaris, Admin GraphQL API, and a server-side cron worker.",
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

// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

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

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "SERVICES",
  subtitle: emoji(
    "I HELP SHOPIFY STORE OWNERS BUILD, CUSTOMIZE, AND OPTIMIZE THEIR STORES 🚀"
  ),

  talks: [
    {
      title: "Shopify Development Services",
      subtitle:
        "I build custom Shopify themes, private apps, and optimize stores.",
      slides_url: "#contact",
      event_url: "#projects"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-313-4503753",
  email_address: "mr.developer38@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
