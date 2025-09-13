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
  colors: {
    brightBlue,
  },
  autoContrast: true,
  defaultRadius: "md",
  fontFamily: "Outfit, sans-serif",
  headings: { fontFamily: "Space Grotesk, sans-serif" },
});

export default theme;
