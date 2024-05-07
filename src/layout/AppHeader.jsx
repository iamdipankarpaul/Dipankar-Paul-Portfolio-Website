import {
  ActionIcon,
  Burger,
  Group,
  Text,
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

  return (
    <Group h="100%" px="md" justify="space-between">
      <Title fz={{ base: "h3", sm: "h2" }} fw="700">
        Dipankar Paul
      </Title>
      <Group>
        <Tooltip label="Toggle theme" position="bottom-end">
          <ActionIcon
            variant="default"
            size='lg'
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
          >
            {computedColorScheme === "dark" ? (
              <Sun size={"70%"} />
            ) : (
              <MoonStars size={"70%"} />
            )}
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
