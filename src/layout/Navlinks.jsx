import { NavLink } from "react-router-dom";
import classes from "./AppLayout.module.css";

import { randomId } from "@mantine/hooks";
import { Article, BookOpen, Folder, PaperPlaneTilt } from "@phosphor-icons/react";

export const navlinks = [
  {
    id: randomId(),
    to: "/",
    label: "README.md",
    icon: <BookOpen size={24} />,
  },
  {
    id: randomId(),
    to: "/projects",
    label: "Projects",
    icon: <Folder size={24} />,
  },
  {
    id: randomId(),
    to: "/blogs",
    label: "Blogs",
    icon: <Article size={24} />,
  },
  {
    id: randomId(),
    to: "/contact",
    label: "Contact Me",
    icon: <PaperPlaneTilt size={24} />,
  },
];

const Navlinks = ({ closeNavbar }) => {
  return navlinks.map((item) => (
    <NavLink
      key={item.id}
      to={item.to}
      onClick={closeNavbar}
      className={({ isActive }) =>
        isActive
          ? `${classes.navlink} ${classes.active_navlink}`
          : `${classes.navlink}`
      }
    >
      {item.icon}
      <span>{item.label}</span>
    </NavLink>
  ));
};

export default Navlinks;
