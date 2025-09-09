import { randomId } from "@mantine/hooks";

import {
  Article,
  BookOpen,
  Folder,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

const navLinks = [
  {
    id: randomId(),
    to: "/",
    label: "README.md",
    leftIcon: BookOpen,
    ariaLabel: "navigation link to README.md page",
  },
  {
    id: randomId(),
    to: "/projects",
    label: "Projects",
    leftIcon: Folder,
    ariaLabel: "navigation link to projects page",
  },
  {
    id: randomId(),
    to: "https://blog.iamdipankarpaul.com/",
    label: "Blogs",
    leftIcon: Article,
    ariaLabel: "navigation link to blogs page",
  },
  {
    id: randomId(),
    to: "/contact",
    label: "Contact Me",
    leftIcon: PaperPlaneTilt,
    ariaLabel: "navigation link to contact page",
  },
];

export default navLinks;
