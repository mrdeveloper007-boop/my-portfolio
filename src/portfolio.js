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
    "A Full Stack Shopify Developer 🚀 experienced in building custom Shopify stores, Liquid-based theme development, private app solutions, and advanced eCommerce features tailored to client needs."
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
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK SHOPIFY DEVELOPER SPECIALIZING IN CUSTOM STORES, THEMES & PRIVATE APPS",
  skills: [
    emoji("⚡ Build high-converting Shopify stores from scratch"),
    emoji(
      "⚡ Custom Shopify theme development using Liquid, HTML, CSS & JavaScript"
    ),
    emoji(
      "⚡ Develop advanced custom sections, features, and dynamic storefront UI"
    ),
    emoji("⚡ Create private Shopify apps tailored to client requirements"),
    emoji("⚡ Optimize store performance, speed, and user experience")
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
      role: "Shopify Developer (Enterprise Project)",
      company: "Fashionphile",
      companylogo: require("./assets/images/fahionphile.png"),
      date: "2024",
      desc: "Worked on Shopify development for a global fashion resale brand operating across 40+ stores worldwide.",
      descBullets: [
        "Built custom Shopify theme sections and scalable storefront components",
        "Implemented advanced UI enhancements and performance improvements",
        "Supported enterprise-level Shopify architecture and multi-store workflows"
      ]
    },

    {
      role: "Full Stack Shopify Developer (Multinational Brand)",
      company: "Kiddospace",
      companylogo: require("./assets/images/kiddospace.png"),
      date: "2023 – 2024",
      desc: "Revamped Shopify storefront using Debutify theme customization, metafields, and conversion-focused enhancements.",
      descBullets: [
        "Developed metafield-powered dynamic sections for product discovery",
        "Implemented upsell/cross-sell integrations and optimized store performance",
        "Implemented product page functionality using metafields, enabling dynamic image updates based on the selected color variant."
      ]
    },

    {
      role: "Shopify Theme & Custom Features Developer",
      company: "ValleyEyeWear",
      companylogo: require("./assets/images/valleyeyewear.png"),
      date: "2023",
      desc: "Delivered advanced Shopify custom development including mega menus, metafield bundles, and third-party tool integrations.",
      descBullets: [
        "Created a pixel-perfect header and hover-based mega menu structure",
        "Built custom product flow with lens bundle selection and dynamic pricing",
        "Integrated virtual try-on functionality seamlessly into the storefront"
      ]
    },

    {
      role: "Shopify Store Developer (International Brand)",
      company: "Scrubser",
      companylogo: require("./assets/images/scrubser.png"),
      date: "2023",
      desc: "Implemented and customized Shopify Dawn theme, building a scalable storefront with optimized navigation and conversion-focused sections.",
      descBullets: [
        "Customized homepage sections, promotional blocks, and branded UI using Shopify native architecture",
        "Configured product options, filtering, and Quick Buy functionality for smoother shopping experience",
        "Developed a clean store structure with minimal reliance on heavy third-party apps"
      ]
    },

    {
      role: "Shopify Theme Customization Developer",
      company: "Ammara Khan",
      companylogo: require("./assets/images/ammarakhan.png"),
      date: "2022 – 2023",
      desc: "Customized and configured a premium Shopify fashion theme with structured product metafields, navigation enhancements, and responsive UI refinements.",
      descBullets: [
        "Built homepage banners, featured collections, and promotional sections using Shopify Theme Customizer",
        "Implemented metafield-driven product information blocks (fabric, sizing, delivery)",
        "Integrated WhatsApp CTA, newsletter signup, and Shopify Search & Discovery filtering"
      ]
    },

    {
      role: "Shopify Developer",
      company: "Lumu.pk",
      companylogo: require("./assets/images/lumu.png"),
      date: "2022 – 2023",
      desc: "Designed and customized a modern Shopify store with responsive UI, branded sections, and performance improvements.",
      descBullets: [
        "Built custom homepage sections and collection layouts",
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
  title: "Shopify Apps Projects",
  subtitle: "SHOPIFY APPS THAT I HAVE BUILT TO HELP STORE OWNERS BOOST SALES",
  projects: [
    {
      image: require("./assets/images/low-stock.png"),
      projectName: "Low Stock Inventory Tracker (Private App)",
      projectDesc:
        "A Shopify app that automatically tracks low stock products and notifies store owners to restock before running out of inventory (code confidential).",
      footerLink: [
        {
          // name: "View App Details",
          // url: "#"
          name: "Request Demo",
          url: "https://wa.me/923134503753?text=Hi,%20I%20would%20like%20a%20demo%20of%20your%20Low%20Stock%20Inventory%20Tracker%20App."
        }
      ]
    },
    {
      image: require("./assets/images/cartsense-app.png"),
      projectName: "CartSense App (Private App)",
      projectDesc:
        "An abandoned cart feedback app that collects customer reviews and reasons for leaving products in the cart, helping merchants improve conversions (code confidential).",
      footerLink: [
        {
          // name: "View App Details",
          // url: "#"
          name: "Request Demo",
          url: "https://wa.me/923134503753?text=Hi%20Abdul%20Qadeer,%20I%20want%20a%20demo%20of%20CartSense%20App."
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
  title: "Shopify Skills & Expertise",
  subtitle: "TECHNOLOGIES AND SKILLS I USE TO BUILD SHOPIFY STORES AND APPS",
  achievementsCards: [
    {
      title: "Shopify Theme Development",
      subtitle: "Liquid, JSON templates, custom sections, Shopify OS 2.0",
      image: require("./assets/images/shopify-theme-dev.png"),
      footerLink: []
    },
    {
      title: "Shopify App Development",
      subtitle: "Remix, Node.js, Polaris, GraphQL Admin API",
      image: require("./assets/images/shopify-app-dev.png"),
      footerLink: []
    },
    {
      title: "Store Optimization",
      subtitle: "Speed improvements, SEO basics, conversion-focused UX",
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
