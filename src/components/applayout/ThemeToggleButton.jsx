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

  const themeToggleIcon = isDarkTheme ? (
    <Sun size={"70%"} color="yellow" />
  ) : (
    <MoonStars size={"70%"} />
  );

  const themeToggleLabel = isDarkTheme
    ? "You sure you want to do that?"
    : "Switch to dark mode";

  return (
    <>
      <Tooltip label={themeToggleLabel} position="bottom-end">
        <ActionIcon
          variant="outline"
          color={isDarkTheme ? "yellow" : "black"}
          onClick={() => setColorScheme(isDarkTheme ? "light" : "dark")}
        >
          {themeToggleIcon}
        </ActionIcon>
      </Tooltip>
    </>
  );
};

export default ThemeToggleButton;
