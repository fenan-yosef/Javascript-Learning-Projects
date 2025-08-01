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
    redux,
    docker,
    tailwind,
    nodejs,
    mongodb,
    flutter,
    telesun,
    // mongodb,
    git,
    figma,
    cpp,
    mysql,
    java,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    dink,
    python,
    // shopify,
    carrent,
    figoBot,
    jobit,
    tripguide,
    threejs,
    figo,
    mesob,
    ganprops,
    tgapi,
    chatbot,
    // python,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Designer",
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
        title: "Graphics Designer",
        company_name: "Dink Tv, Kestedemena",
        icon: dink,
        iconBg: "#000000",
        date: "October 2023 - December 2023",
        points: [
            "Brand Identity, Branding and theme determining since it was at startup stage when I was working.",
            "Collaborating with Architectural graduate graphic designers to design new themes for every show in Dink Tv.",
            "Contributing to Dink Tv instagram filter as a graphic designer.",
            "Event cards and 'step and repeat' banners.",
            "Casting in one of the Shows",
        ],
    },
    {
        title: "Telegram bot by TeleSun.js Developper",
        company_name: "Chef-Figo Cakes",
        icon: figo,
        iconBg: "#ffffff",
        date: "February 2024 - April 2024",
        points: [
            "Developing and maintaining Telegram Bots for the business.",
            "Mobilizing google apps to provide my clients with free Servers to produce high quality telegram bots.",
            "Reviewing previous versions for performance and reliability improvments.",
            "Build multiple bots for different client requirements.",
        ],
    },
    {
        title: "Full-stack Rental App",
        company_name: "Gan Properties",
        icon: ganprops,
        iconBg: "#ffffff",
        date: "January 2025 - June 2024",
        points: [
            "Developed a cross-platform rental marketplace app using Flutter for tenants and landlords, offering features similar to Airbnb.",
            "Built the backend with NestJS and PostgreSQL, deployed on cPanel with full REST API integration and Chapa payment gateway.",
            "Implemented full authentication (signup/login), listing CRUD operations, and user role separation between renters and property owners.",
            "Integrated full-text search and location-based filtering with Flutter Map, allowing users to explore properties near them.",
            "Designed the entire UI/UX on Figma and converted the designs into responsive Flutter components with smooth navigation and state management.",
            "Handled image uploads, property categorization, and rental request handling via intuitive user flows.",
            "Focused on performance, security, and user-centric design to ensure the platform was production-ready and scalable.",
        ],
    },
    {
        title: "Graphics Designer & Video Editor Intern",
        company_name: "Mesob Technologies PLC",
        icon: mesob, // replace with your actual icon reference
        iconBg: "#ffffff",
        date: "July 2025 – Present",
        points: [
            "Designed a variety of branded visuals, including social media posts, marketing banners, infographics, and print materials, tailored for diverse client campaigns.",
            "Edited promotional videos, testimonial reels, and short-form social content for platforms like Instagram and YouTube using Adobe Premiere, After Effects, and CapCut.",
            "Collaborated with the media team to ensure creative content aligns with client goals and audience preferences.",
            "Used Adobe Photoshop and Illustrator to create engaging, on-brand visual assets with attention to typography, layout, and visual hierarchy.",
            "Conducted performance analysis of client social media posts, compiled reports in spreadsheets, and proposed actionable content strategies to boost engagement.",
            "Contributed to the company’s digital media presence by blending visual storytelling with strategic content planning.",
        ]
    }




    ,//add more here in the future
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
        name: "Club  Event Management",
        description:
            "Web-based platform that allows users to View, book, and manage Events from various Other Users, providing a convenient and efficient solution for Event handling.",
        tags: [
            {
                name: "HTML, CSS, JS",
                color: "pink-text-gradient",
            },
            {
                name: "Mysql",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
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
