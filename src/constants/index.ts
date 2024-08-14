import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  pyrox,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Ios Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Firebase",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Firebase",
    icon: creator,
  },
 
  {
    name: "Flutter",
    icon: mobile,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
   
  {
    name: "React JS",
    icon: reactjs,
  },
  
 
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences: TExperience[] = [
  {
    title: "associate software engineer ",
    companyName: "Pyrox I City Pvt Ltd",
    icon: pyrox,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "With a solid background in mobile app development and a deep understanding of the Flutter framework", " I am confident in my ability to contribute meaningful value to your projects.", " I have honed my skills through various projects where I have designed, developed, and maintained user-friendly and efficient mobile applications using Flutter",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Empezar software labs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2021 - Present",
    points: [
      "Engineered and deployed advanced text detection capabilities using Machine Learning algorithms",
      "facilitating the recognition of truck identification numbers, container details, and seals within mobile applications",
      " Architected and implemented an offline application leveraging Firebase and SQFlite",
      "optimizing data synchronization and storage efficiency Engineered geofencing functionalities for location-based services and seamlessly integrated home widgets to elevate the user experience Leveraged Google API to implement advanced speech-to-text functionality",
      "significantly enhancing user accessibility and engagement. Expertly architected and developed scalable mobile applications, proficiently administering Firebase collections and triggers. Exhibited exceptional multitasking abilities by concurrently managing multiple projects",
      "ensuring timely delivery and successful outcomes Implemented platform integrations to augment application functionality and bolster user engagement", "Excelled in problem-solving, analyzing complex challenges, and delivering innovative solutions to create high-quality applications",],
  },
 
   
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
