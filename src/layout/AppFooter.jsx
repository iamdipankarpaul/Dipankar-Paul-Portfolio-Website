import {
  Box,
  Flex,
  ActionIcon,
  Group,
  Tooltip,
  Text,
  Title,
} from "@mantine/core";
import {
  CodepenLogo,
  DevToLogo,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

import classes from "./AppLayout.module.css";
import personalData from "../constants";

const AppFooter = () => {
  return (
    <footer className={classes.footer}>
      <Flex
        direction={{ base: "column", md: "row" }}
        ta="center"
        justify="space-between"
        align="center"
        gap={10}
      >
        <Box>
          <Text fw={500}>Made by me, Dipankar Paul.</Text>
        </Box>
        <Box>
          <Group>
            {personalData.socialLinks.map((item) => (
              <Tooltip label={item.label} key={item.id}>
                <ActionIcon
                  variant="default"
                  aria-label={item.label}
                  size="lg"
                  radius="xl"
                >
                  <item.leftIcon size={"70%"} />
                </ActionIcon>
              </Tooltip>
            ))}
          </Group>
        </Box>
        <Box>
          <Text size="sm">
            &copy;{" "}
            {`Copyright ${new Date().getFullYear()}. All Rights Reserved.`}
          </Text>
        </Box>
      </Flex>
    </footer>
  );
};

export default AppFooter;
