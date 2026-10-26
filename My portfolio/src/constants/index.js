import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    docker,
    tailwind,
    nodejs,
    mongodb,
    flutter,
    git,
    figma,
    mysql,
    java,
    python,
    clubEvents,
    figoBot,
    threejs,
    figo,
    tgapi,
    chatbot,
    dalve,
    onlineDimensions,
    kegeberew,
    upwork,
    onesong,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "iOS & Mobile Developer",
        icon: mobile,
    },
    {
        title: "Backend & API Engineer",
        icon: backend,
    },
    {
        title: "AI Coding Trainer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Flutter",
        icon: flutter,
    },
    // {
    //     name: "Cpp",
    //     icon: cpp,
    // },
    {
        name: "Java",
        icon: java
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "Python",
        icon: python,
    },
    // {
    //     name: 'Telesun',
    //     icon: telesun,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Mobile Application Developer",
        company_name: "DALVE ME",
        icon: dalve,
        iconBg: "#ffffff",
        date: "July 2026 - Present",
        points: [
            "Leading mobile application engineering for UAE-based product initiatives, crafting responsive iOS and cross-platform experiences.",
            "Designing clean client architecture, reactive state management, and reusable UI components with optimal performance.",
            "Integrating secure REST APIs, data caching, and offline-first workflows for seamless mobile reliability.",
            "Collaborating closely with product and backend teams to deliver production-ready releases to the app store.",
        ],
    },
    {
        title: "Full Stack & Mobile Engineer",
        company_name: "Upwork (OneSong)",
        icon: upwork,
        iconBg: "#14a800",
        date: "June 2026 - Present",
        points: [
            "Engineering OneSong, a production monorepo platform spanning React/Vite web, Flutter mobile (iOS & Android), and Firebase Cloud Functions.",
            "Architected real-time event systems with Firestore, Firebase Realtime Database, and Spotify API for live crowd song queues, requests, and attendee voting.",
            "Engineered monetization infrastructure including dynamic paywall CMS, StoreKit / in-app purchase pricing sync, and secure tipping/payout workflows.",
            "Managed multi-platform release pipelines, publishing Flutter builds to the Apple App Store (Build 39) and Google Play Store with deep-linking and push notifications.",
            "Implemented robust security rules, direct password resets via Resend API, bounded notification inboxes, and automated background transaction handling.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Online Dimensions",
        icon: onlineDimensions,
        iconBg: "#ffffff",
        date: "August 2025 - July 2026",
        points: [
            "Architected and shipped full-stack features across backend APIs, frontend dashboards, and Flutter mobile applications.",
            "Engineered scalable backend services, schema models across PostgreSQL, MongoDB, and MySQL, and robust RESTful API endpoints.",
            "Built automated data processing pipelines and scheduled tasks in Python to streamline core business operations.",
            "Owned end-to-end CI/CD using GitHub Actions, containerized environments, and deployments on Linux VPS and Vercel.",
            "Participated in system design reviews, code refactoring, and resolved critical production issues with high reliability.",
        ],
    },
    {
        title: "Java Programmer",
        company_name: "Kegeberew Technology Solution",
        icon: kegeberew,
        iconBg: "#0b1b30",
        date: "July 2024 - September 2024",
        points: [
            "Developed robust backend modules in Java and responsive web interfaces using HTML and CSS for enterprise medical software.",
            "Designed clean UI/UX structures specifically tailored for clinical data entry, improving usability for healthcare professionals.",
            "Conducted system testing, database query tuning, and code maintenance to meet stringent enterprise reliability standards.",
        ],
    },
    {
        title: "Bot Developer",
        company_name: "Chef Figo",
        icon: figo,
        iconBg: "#1c1917",
        date: "March 2024",
        points: [
            "Engineered and launched an automated commercial Telegram cake-ordering bot end-to-end for a local bakery single-handedly.",
            "Built interactive product catalog navigation, seamless ordering flows, input validation, and conversational edge-case handling.",
            "Owned system architecture, payment notifications, and cloud deployment on a fixed commercial delivery timeline.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Very motivated young guy, was a pleasure working with him!",
        name: "Rustom Stehling",
        designation: "Owner",
        company: "Vitis Clinic, Germany",
        // image: "https://avatars.githubusercontent.com/u/71874927?v=4",
        image: "https://www.upwork.com/profile-portraits/c1bqDfEIAADuXxycWwe1I7Owm5ZiU3u2PShfgUq5WfzyWLnajYgosvyz8N_8xfO-tX"
    },

    {
        testimonial:
            "Fenan is fast and very easy to work with. Thank you!",
        name: "Michelle NG LLC",
        designation: "Upwork Client",
        company: "Private Ciient",
        image: "https://www.upwork.com/profile-portraits/c1f4XEB7ixc3L3QatnbWhAWuQP6dQyOt9_4AkNOCj6UO8S_g0eYOOum9DjRZ7Ia80r",
    },
    {
        testimonial: "Fenan is a great and dedicated developer who have shown me his amazing abilities on creating beautiful and pretty functional websites plus bots.",
        name: "Naod Alemu",
        designation: "Top Rated Freelancer",
        company: "Upwork",
        image: "https://www.upwork.com/profile-portraits/c1dppFZjQqI7L_70wAK6JV9RFPHkh6Yd1rZwGI4JkMYL2_ItuAUu_QT19B_54N1Ujf",
    },
];

const projects = [
    {
        name: "OneSong — Live Music Platform",
        description:
            "Full-stack real-time music request platform connecting DJs and event attendees. Features live queue voting, Spotify API integration, dynamic paywall monetization, and cross-platform mobile apps deployed to App Store & Google Play.",
        tags: [
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "red-yellow-gradient",
            },
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Spotify API",
                color: "teal-blue-text-gradient",
            },
        ],
        image: onesong,
        source_code_link: "https://github.com/fenan-yosef",
    },
    {
        name: "AI chatbot",
        description:
            "AI chat bot that can answer questions about a specific topic, It remembers past conversations and can provide answers based on the context of the conversation.",
        tags: [
            {
                name: "AI_chat_bot",
                color: "blue-text-gradient",
            },
            {
                name: "nextjs",
                color: "red-yellow-gradient",
            },
            {
                name: "Gemini",
                color: "teal-blue-text-gradient",
            },
            {
                name: "V0",
                color: "green-text-gradient",
            },
            {
                name: "AI",
                color: "purple-pink-text-gradient",
            },
        ],
        image: chatbot,
        source_code_link: "https://github.com/fenan-yosef/ai-chat-bot",
    },
    {
        name: "Free storage Site",
        description:
            "Let's you use your own telegram bot to upload files and get a link to download them later, it uses Rest API to handle the telegram bot and uses telegram as a storage.",
        tags: [
            {
                name: "Developer tool",
                color: "blue-text-gradient",
            },
            {
                name: "Next Js",
                color: "green-text-gradient",
            },
            {
                name: "Storage",
                color: "pink-text-gradient",
            },
            {
                name: "Vercel",
                color: "blue-text-gradient",
            },
        ],
        image: tgapi,
        source_code_link: "https://github.com/fenan-yosef/storage-api",
    },
    {
        name: "Campus Event Platform",
        description:
            "Web-based platform that allows students and organizations to discover, book, and manage campus events and reservations with interactive schedules.",
        tags: [
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
            {
                name: "MySQL",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: clubEvents,
        source_code_link: "https://github.com/pal-oe/club-management-CSEC",
    },
    {
        name: "Figo Bot",
        description:
            "Telegram Bot that enables users to easily place their order from telegram channels, it handles payments and organizes orders and notifications",
        tags: [
            {
                name: "telesun",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "telegram",
                color: "blue-text-gradient",
            },
        ],
        image: figoBot,
        source_code_link: "https://github.com/pal-oe/telegram-bot-using-telesun/tree/main/Cake%20Ordering%20Bot",
    },
    //add more projects here
];

export { services, technologies, experiences, testimonials, projects };
