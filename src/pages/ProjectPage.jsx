import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Badge,
  Box,
  Flex,
  Alert,
  List,
  Text,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useScrollIntoView } from "@mantine/hooks";
import { Warning } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import classes from "./pages.module.css";

import personalData from "../constants";
import Topbar from "../components/Topbar";
import CarouselImage from "../components/CarouselImage";
import SectionTitle from "../components/SectionTitle";
import formatDate from "../utils/formatDate";

const ProjectPage = () => {
  const [closeWarningAlert, setCloseWarningAlert] = useState(false);

  const { slug } = useParams();
  const project = personalData.projects.find((p) => p.slug === slug);

  const { scrollIntoView, targetRef: wrapperRef } = useScrollIntoView({
    offset: 100,
    duration: 500,
  });

  useEffect(() => {
    scrollIntoView({ alignment: "start" });
  }, []);

  return (
    <Box className={classes.wrapper} ref={wrapperRef}>
      {/* seo */}
      <Helmet>
        <title>Dipankar Paul's Project - {project.title}</title>
        <meta
          name="description"
          content={`Explore the details and technologies used in my ${project.title} project. Discover the features, showcasing my skills in frontend development and creative problem-solving.`}
        />
      </Helmet>
      {/* topbar */}
      <Topbar label={project.title} />
      {/* project details body */}
      <Box
        pt={{ base: "sm", sm: "md", md: "lg" }}
        px={{ base: 0, sm: "xs" }}
        pb={{ base: 0, sm: "xs" }}
      >
        {/* author's warnings or notes */}

        {project.warning && (
          <Alert
            variant="filled"
            color="red"
            withCloseButton
            icon={<Warning size={16} />}
            onClose={() => setCloseWarningAlert(true)}
            style={{ display: closeWarningAlert ? "none" : "block" }}
            mb="xs"
          >
            {project.warning}
          </Alert>
        )}

        {/* Image carousel */}
        <Box>
          <Carousel withIndicators w={{ base: "100%", sm: "70%" }} mx="auto">
            {project.images.map((src, idx) => (
              <Carousel.Slide key={idx}>
                <CarouselImage src={src} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
        {/* project details */}
        <Box my="md" px="xs">
          {/* title date */}
          <Box mb={{ base: "xs", sm: 0 }}>
            <Flex
              direction={{ base: "column", sm: "row" }}
              align={{ base: "start", sm: "center" }}
              justify={{ base: "center", sm: "space-between" }}
              gap={0}
            >
              <SectionTitle
                text={project.title}
                baseAs="h3"
                smAs="h2"
                pyAs={{ base: 0, sm: "xs" }}
              />
              <Text c="dimmed">{formatDate(project.date)}</Text>
            </Flex>
          </Box>
          {/* description */}
          <Text size="lg">{project.description}</Text>
          {/* features */}
          <Box>
            <SectionTitle text="Features" baseAs="h4" smAs="h3" />
            <List type="ordered" withPadding>
              {project.features.map((feature, idx) => (
                <List.Item key={idx}>
                  <Text size="lg">{feature}</Text>
                </List.Item>
              ))}
            </List>
          </Box>
          {/* tags */}
          <Box mb="xs">
            <SectionTitle text="Technology used" baseAs="h4" smAs="h3" />
            <Flex gap={"3px"} wrap="wrap" mt="xs">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="light" m="0px">
                  {tag}
                </Badge>
              ))}
            </Flex>
          </Box>
          {/* links */}
          <Box>
            <SectionTitle text="Links" baseAs="h4" smAs="h3" />
            <SimpleGrid cols={{ base: 1, sm: 3, lg: 5 }} mt="xs">
              <Box>
                <Button
                  variant="light"
                  fullWidth
                  component={Link}
                  to={project.links.demo}
                  target="_blank"
                >
                  Live
                </Button>
              </Box>
              <Box>
                <Button
                  component={Link}
                  to={project.links.github}
                  target="_blank"
                  fullWidth
                >
                  GitHub
                </Button>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;
