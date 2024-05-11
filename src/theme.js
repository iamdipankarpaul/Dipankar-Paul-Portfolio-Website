import { createTheme } from "@mantine/core";

const brightBlue = [
  "#e5f4ff",
  "#cde2ff",
  "#9bc2ff",
  "#64a0ff",
  "#3984fe",
  "#1d72fe",
  "#0969ff",
  "#0058e4",
  "#004ecc",
  "#0043b5",
];

const theme = createTheme({
  // primaryColor: "brightBlue",
  colors: {
    brightBlue,
  },
  autoContrast: true,
  luminanceThreshold: 0.3,
  defaultRadius: "md",
  fontFamily: "Outfit, sans-serif",
  headings: { fontFamily: "Space Grotesk, sans-serif" },
  other: {
    bgColorLight: "#FFFFFF",
    bgColorDark: "#0D1117",
  },
});

export const variableResolver = (theme) => ({
  light: {
    "--mantine-color-body": theme.other.bgColorLight,
  },
  dark: {
    "--mantine-color-body": theme.other.bgColorDark,
  },
});

export default theme;
