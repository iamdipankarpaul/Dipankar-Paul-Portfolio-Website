import { Link } from "react-router-dom";
import { Box, Flex, ActionIcon, Group, Tooltip, Text } from "@mantine/core";
import { Smiley } from "@phosphor-icons/react";

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
        {/* footer left text */}
        <Box>
          <Flex gap={5} align="center">
            <Text fw={500}>Thanks for visiting!</Text>
            <Smiley size={20} weight="bold" />
          </Flex>
        </Box>

        {/* social icons */}
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

        {/* footer right text */}
        <Box>
          <Text size="sm">Developed by me, Dipankar Paul.</Text>
          <Text size="sm">
            &copy;{" "}
            {`Copyright ${new Date().getFullYear()} - All Rights Reserved.`}
          </Text>
        </Box>
      </Flex>
    </footer>
  );
};

export default AppFooter;
