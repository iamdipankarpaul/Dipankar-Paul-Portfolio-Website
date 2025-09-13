import { NavLink } from "react-router-dom";
import { Group, Text } from "@mantine/core";
import classes from "./AppLayout.module.css";
// import { useMediaQuery } from "@mantine/hooks";

const AppNavbar = ({ links, closeNavbar }) => {
  // const isMobile = useMediaQuery("(max-width: 64em)");

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {links.map((item) => (
        <li key={item.id} aria-label={item.ariaLabel}>
          <NavLink
            to={item.to}
            onClick={closeNavbar}
            className={({ isActive }) =>
              isActive
                ? `${classes.navlink} ${classes.active_navlink}`
                : `${classes.navlink}`
            }
            target={item.target}
          >
            <Group gap="xs">
              <item.leftIcon size={24} />
              <Text span fw={600}>{item.label}</Text>
            </Group>
            {item.rightIcon && <item.rightIcon size={16} />}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AppNavbar;
