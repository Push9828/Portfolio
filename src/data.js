//  icons
import { FiLinkedin, FiTwitter, FiGithub, FiPenTool } from "react-icons/fi";

import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";
import Project4 from "./assets/img/projects/p4.png";

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
    icon: <FiTwitter />,
    href: "https://twitter.com/PushkarThakur28",
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
      "A personal developer portfolio site that provides a concise introduction about me and demonstrates my programming skills and experience.",
    repoLink: "https://github.com/Push9828/Portfolio",
    techStack: ["React.js", "Tailwind css", "Framer Animation"],
    demoLink: "https://project-demo2.com",
  },
  {
    id: 2,
    img: Project2,
    title: "Ultranous AI",
    description:
      "The website is built to showcase the business in the AI domain. It consists of all the essential information regarding the services provided. Designed and implemented a user-friendly interface that effectively communicates the services provided.",
    techStack: ["React.js", "Styled Components"],
    demoLink: "https://www.ultranous.com/",
  },
  {
    id: 3,
    img: Project3,
    title: "AWS User Group Nashik",
    description:
      "It is the offical AWS User Group Nashik website. Build a user-friendly interface to effectively communicate information about the group's activities. It displays the data of the events conducted, learning resources, and a core team of AWS UG Nashik.",
    techStack: ["Vue.js", "Firebase"],
    demoLink: "https://www.awsugnsk.in/#/",
  },
  {
    id: 4,
    img: Project4,
    title: "Netflix Homepage",
    description: "The website is the clone of Netflix India's home page.",
    repoLink: "https://github.com/Push9828/Netflix-clone",
    techStack: ["React.js", "Styled Components"],
    demoLink: "https://netflix-clone-nu-flax.vercel.app/",
  },
];
