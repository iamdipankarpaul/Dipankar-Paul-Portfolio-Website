import { Link } from "react-router-dom";
import { Box, Flex, ActionIcon, Group, Tooltip, Text } from "@mantine/core";

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
                  aria-label={item.ariaLabel}
                  size="lg"
                  radius="xl"
                  component={Link}
                  to={item.to}
                  target={item.target}
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
