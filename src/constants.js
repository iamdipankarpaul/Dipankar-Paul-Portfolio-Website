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
