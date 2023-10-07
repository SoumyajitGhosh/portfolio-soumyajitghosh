import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  tradelabtech,
  uno_bank,
  topgram,
  jira,
  rest,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
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
    name: "Git",
    icon: git,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Rest API",
    icon: rest,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Tradelab Technologies Pvt. Ltd.",
    icon: tradelabtech,
    iconBg: "#383E56",
    date: "Sept 2021 - May 2023",
    points: [
      "Providing end-to-end ownership and stewardship of key functional and technical architecture & designs within the scope of application development projects",
      "Leading all Mutual Fund related coding development for the frontend team",
      "Managing project operations with key focus on defining Service Level Agreements (SLA’s), Standard Operating Procedures (SOP’s) & interacting with prestigious clients, business partners, industry leaders, vendors & key stakeholders",
      "Providing thought leadership and technical consulting in defining, implementing, ensuring, measuring and continuous improvement of process along with quality standards, frameworks, practices and measurements",
      "Designing and developing user interface using HTML & CSS; integrating RESTful APIs in the front-end and working on chart integration using chart.js",
      "Coordinating with software development team to define the scope and scale of software projects; designing end-to-end flow and implementation of business logic from a UI/UX perspective",
      "Preparing technical specifications according to business needs; suggesting improvements for existing system designs",
      "Designing pixel-perfect responsive web trading applications using React, Redux and Material UI",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Uno Digital Bank",
    icon: uno_bank,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Writin Unit Test Cases using testing-library/react and jest",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "TopGram",
    description:
      "TopGram is a dynamic social media platform that serves as an Instagram clone, offering users a seamless and captivating photosharing experience. Developed using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js, TopGram leverages the power of these technologies to create a feature-rich application.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },

      {
        name: "material-ui",
        color: "green-text-gradient",
      },
    ],
    image: topgram,
    source_code_link: "https://github.com/SoumyajitGhosh/topgram-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
