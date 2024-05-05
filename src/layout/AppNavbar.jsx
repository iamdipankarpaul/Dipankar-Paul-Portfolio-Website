import { NavLink } from "react-router-dom";
import { Group, Text } from "@mantine/core";
import classes from "./AppLayout.module.css";

const AppNavbar = ({ links, closeNavbar }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {links.map((item) => (
        <li>
          <NavLink
            key={item.id}
            to={item.to}
            onClick={closeNavbar}
            className={({ isActive }) =>
              isActive
                ? `${classes.navlink} ${classes.active_navlink}`
                : `${classes.navlink}`
            }
            target={item.target}
          >
            <Group>
              <item.leftIcon size={24} />
              <Text span>{item.label}</Text>
            </Group>
            {item.rightIcon && <item.rightIcon size={16} />}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AppNavbar;
