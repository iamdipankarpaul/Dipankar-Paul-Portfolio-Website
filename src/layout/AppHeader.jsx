import { Link } from "react-router-dom";
import {
  ActionIcon,
  Burger,
  Group,
  Tooltip,
  useMantineColorScheme,
  useComputedColorScheme,
  Title,
} from "@mantine/core";
import { MoonStars, Sun } from "@phosphor-icons/react";

const AppHeader = ({ opened, toggleNavbar }) => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  const darkTheme = computedColorScheme === "dark";
  // console.log(darkTheme);

  const toggleThemeIcon = darkTheme ? (
    <Sun size={"70%"} color="yellow" />
  ) : (
    <MoonStars size={"70%"} />
  );

  return (
    <Group h="100%" px="md" justify="space-between">
      <Title
        fz="h2"
        fw="700"
        component={Link}
        to={"/"}
        style={{ color: "var(--mantine-color-text)" }}
        td="none"
      >
        Dipankar Paul
      </Title>
      <Group>
        <Tooltip label="Toggle theme" position="bottom-end">
          <ActionIcon
            variant="outline"
            color={darkTheme ? "yellow" : "black"}
            onClick={() => setColorScheme(darkTheme ? "light" : "dark")}
          >
            {toggleThemeIcon}
          </ActionIcon>
        </Tooltip>
        <Burger
          opened={opened}
          onClick={toggleNavbar}
          hiddenFrom="sm"
          size="md"
        />
      </Group>
    </Group>
  );
};

export default AppHeader;
