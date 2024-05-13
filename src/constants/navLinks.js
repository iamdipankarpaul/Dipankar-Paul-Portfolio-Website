import { randomId } from "@mantine/hooks";

import {
  Article,
  BookOpen,
  Folder,
  PaperPlaneTilt,
  ReadCvLogo
} from "@phosphor-icons/react";

const navLinks = [
  {
    id: randomId(),
    to: "/",
    label: "README.md",
    leftIcon: BookOpen,
    ariaLabel: "navlink to go to README.md page",
  },
  {
    id: randomId(),
    to: "/resume",
    label: "Resume",
    leftIcon: ReadCvLogo,
    ariaLabel: "navlink to go to resume page",
  },
  {
    id: randomId(),
    to: "/projects",
    label: "Projects",
    leftIcon: Folder,
    ariaLabel: "navlink to go to projects page",
  },
  {
    id: randomId(),
    to: "/blogs",
    label: "Blogs",
    leftIcon: Article,
    ariaLabel: "navlink to go to blogs page",
  },
  {
    id: randomId(),
    to: "/contact",
    label: "Contact Me",
    leftIcon: PaperPlaneTilt,
    ariaLabel: "navlink to go to contact page",
  },
];

export default navLinks;
