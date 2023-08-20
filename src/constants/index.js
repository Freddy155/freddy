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
  shopify,
  carret,
  jobit,
  tripguide,
  threejs,
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
    title: "UI UX Designer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Educational Content Creator",
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
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Web Split",
    icon: web,
    iconBg: "#383E56",
    date: "Oct 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend & Backend developer",
    company_name: "freelancer",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, PHP, JS, Node and other langauges and frameworks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "You are the best and fastes developer we hired ever, The designs are stunning and the code is so fast and lightweight",
    name: "Youssef Hamed",
    designation: "N/A",
    company: "N/A",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like you do.",
    name: "Ahmed Ali",
    designation: "N/A",
    company: "N/A",
    image: "",
  },
  {
    testimonial:
      "After you optimized our website, our traffic increased by 50%. We can't thank you enough!",
    name: "Abdulrahman Omar",
    designation: "N/A",
    company: "N/A",
    image: "",
  },
];

const projects = [
  {
    name: "Nova Network",
    description:
      "Nova Network Tech is an online agency that offer online learning services and other privacy related services like VPNs and cryptography tools. https://nova-network.tech",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "WebSockets",
        color: "pink-text-gradient",
      },
    ],
    image: carret,
  },
  {
    name: "Net Node",
    description:
      "Net Node is an online private social media platform that focus on privacy, security and freedom of speech. It does not collect users' data. https://netnode.nova-network.tech ",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Ajax",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },
];

export { services, technologies, experiences, testimonials, projects };
