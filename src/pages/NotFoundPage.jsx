import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

// styles
import styles from "./pages.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="sm" h="80vh">
      <Center h="100%">
        <Box ta="center">
          <Title order={1} my={10}>
            404
          </Title>
          <Title order={2} my={10}>
            You have found a secret place.
          </Title>
          <Text c="dimmed" size="lg" ta="center">
            Unfortunately, this is only a 404 page. You may have mistyped the
            address, or the page has been moved to another URL.
          </Text>
          <SimpleGrid maw="300px" cols={2} my={20} mx="auto">
            <Button variant="outline" size="md" onClick={() => navigate("/")}>
              Home page
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate("/contact")}
            >
              Contact me
            </Button>
          </SimpleGrid>
        </Box>
      </Center>
    </Container>
  );
};

export default NotFoundPage;
