import { randomId } from "@mantine/hooks";
import {
  ArrowUpRight,
  Article,
  BookOpen,
  CodepenLogo,
  DevToLogo,
  Folder,
  GithubLogo,
  LinkedinLogo,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

export const navLinks = [
  {
    id: randomId(),
    to: "/",
    label: "README.md",
    leftIcon: BookOpen,
  },
  {
    id: randomId(),
    to: "/projects",
    label: "Projects",
    leftIcon: Folder,
  },
  {
    id: randomId(),
    to: "/blogs",
    label: "Blogs",
    leftIcon: Article,
  },
  {
    id: randomId(),
    to: "/contact",
    label: "Contact Me",
    leftIcon: PaperPlaneTilt,
    // rightIcon: PaperPlaneTilt,
  },
];

export const socialLinks = [
  {
    id: randomId(),
    to: "https://www.linkedin.com/in/iamdipankarpaul/",
    label: "LinkedIn",
    leftIcon: LinkedinLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
  },
  {
    id: randomId(),
    to: "https://github.com/dipankarpaul2k",
    label: "GitHub",
    leftIcon: GithubLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
  },
  {
    id: randomId(),
    to: "https://codepen.io/dipankarpaul2k",
    label: "CodePen",
    leftIcon: CodepenLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
  },
  {
    id: randomId(),
    to: "https://dev.to/dipankarpaul",
    label: "Dev.to",
    leftIcon: DevToLogo,
    rightIcon: ArrowUpRight,
    target: "_blank",
  },
];

export const skillList = {
  languages: [
    {
      src: "https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white",
      alt: "html image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white",
      alt: "css image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black",
      alt: "javascript image",
      id: randomId(),
    },
  ],
  frontend: [
    {
      src: "https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black",
      alt: "reactjs image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white",
      alt: "react router dom image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Redux-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white",
      alt: "redux image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/MUI-007FFF.svg?style=for-the-badge&logo=MUI&logoColor=white",
      alt: "mui image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Mantine-339AF0.svg?style=for-the-badge&logo=Mantine&logoColor=white",
      alt: "mantine image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white",
      alt: "tailwind css image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white",
      alt: "bootstrap image",
      id: randomId(),
    },
  ],
  backend: [
    {
      src: "https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white",
      alt: "nodejs image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white",
      alt: "express image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white",
      alt: "mongodb image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white",
      alt: "mongoose image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white",
      alt: "nodemon image",
      id: randomId(),
    },
  ],
  hosting: [
    {
      src: "https://img.shields.io/badge/Netlify-00C7B7.svg?style=for-the-badge&logo=Netlify&logoColor=white",
      alt: "netlify image",
      id: randomId(),
    },
    {
      src: "https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white",
      alt: "vercel image",
      id: randomId(),
    },
  ],
};
