import { Link } from "react-router-dom";
import { Burger, Group, Title, Button } from "@mantine/core";
import ThemeToggleButton from "../components/applayout/ThemeToggleButton";
import { useMediaQuery } from "@mantine/hooks";
import StoryButton from "../components/storyviewer/StoryButton";

const AppHeader = ({ opened, toggleNavbar }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group gap={"xs"}>
        <StoryButton />
        <Title
          fz="h2"
          fw="700"
          component={Link}
          to={"/"}
          style={{ color: "var(--mantine-color-text)" }}
          td="none"
        >
          {isMobile ? "DP." : "Dipankar Paul"}
        </Title>
      </Group>
      <Group>
        <Button
          component="a"
          href="https://357429452906074112.hello.cv/"
          target="_blank"
          rel="noopener noreferrer"
          size="compact-md"
        >
          Resume
        </Button>

        <ThemeToggleButton />

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
