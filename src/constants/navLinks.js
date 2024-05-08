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
  },
];

export default navLinks;
