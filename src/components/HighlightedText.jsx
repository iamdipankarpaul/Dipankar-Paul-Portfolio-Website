import { Highlight } from "@mantine/core";

export default function HighlightedText({
  text,
  highlights,
  centered = false,
  size = "xl",
}) {
  return (
    <Highlight
      ta={centered ? "center" : "left"}
      highlight={highlights}
      highlightStyles={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      fz={size}
    >
      {text}
    </Highlight>
  );
}
