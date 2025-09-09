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
    target: "_self",
    ariaLabel: "navigation link to README.md page",
  },
  {
    id: randomId(),
    to: "/projects",
    label: "Projects",
    leftIcon: Folder,
    target: "_self",
    ariaLabel: "navigation link to projects page",
  },
  {
    id: randomId(),
    to: "https://blog.iamdipankarpaul.com/",
    label: "Blogs",
    leftIcon: Article,
    target: "_blank",
    ariaLabel: "navigation link to blogs page. Opens in new tab.",
  },
  {
    id: randomId(),
    to: "/contact",
    label: "Contact Me",
    leftIcon: PaperPlaneTilt,
    target: "_self",
    ariaLabel: "navigation link to contact page",
  },
];

export default navLinks;
