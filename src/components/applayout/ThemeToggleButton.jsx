import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonStars, Sun } from "@phosphor-icons/react";

const ThemeToggleButton = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  const isDarkTheme = computedColorScheme === "dark";

  const toggleThemeIcon = isDarkTheme ? (
    <Sun size={"70%"} color="yellow" />
  ) : (
    <MoonStars size={"70%"} />
  );

  return (
    <>
      <Tooltip label="Toggle theme ndndjbdc" position="bottom-end">
        <ActionIcon
          variant="outline"
          color={isDarkTheme ? "yellow" : "black"}
          onClick={() => setColorScheme(isDarkTheme ? "light" : "dark")}
        >
          {toggleThemeIcon}
        </ActionIcon>
      </Tooltip>
    </>
  );
};

export default ThemeToggleButton;
