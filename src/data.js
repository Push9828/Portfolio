//  icons
import { FiLinkedin, FiGithub, FiPenTool, FiMail } from "react-icons/fi";

import Project1 from "./assets/img/projects/p1.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "projects",
    href: "projects",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/pushkarthakur28/",
  },
  {
    icon: <FiPenTool />,
    href: "https://medium.com/@pushkar-thakur28",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/Push9828",
  },
];

//Projects
export const projectData = [
  {
    id: 1,
    img: Project1,
    title: "Portfolio",
    description:
      "The website is built to showcase the business in the AI domain. It consists of all the essential information regarding the services provided. Designed and implemented a user-friendly interface that effectively communicates the services provided",
    repoLink: "https://github.com/Push9828/Portfolio",
    techStack: ["React.js", "Tailwind css", "Framer Animation"],
    demoLink: "https://project-demo2.com",
  },
  {
    id: 2,
    img: Project1,
    title: "Portfolio",
    description:
      "The website is built to showcase the business in the AI domain. It consists of all the essential information regarding the services provided. Designed and implemented a user-friendly interface that effectively communicates the services provided",
    repoLink: "https://github.com/Push9828/Portfolio",
    techStack: ["React.js", "Tailwind css", "Framer Animation"],
    demoLink: "https://project-demo2.com",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at pushkar.thakur28@gmail.com",
  },
];
