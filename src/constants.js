import { randomId } from "@mantine/hooks";
import { BookOpen } from "@phosphor-icons/react";

export const navlinks = [
  {
    id: randomId(),
    to: "/",
    label: "README.md",
    icon: BookOpen,
  },
  {
    id: randomId(),
    to: "/projects",
    label: "Projects",
    icon: BookOpen,
  },
  {
    id: randomId(),
    to: "/blogs",
    label: "Blogs",
    icon: BookOpen,
  },
  {
    id: randomId(),
    to: "/contact",
    label: "Contact Me",
    icon: BookOpen,
  },
];

{/* <BookOpen size={24} /> */}
