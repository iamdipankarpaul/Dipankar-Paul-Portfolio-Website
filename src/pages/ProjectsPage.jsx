import { useState, useEffect } from "react";
import { Box, MultiSelect, Select, Flex } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { Folder } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import classes from "./pages.module.css";

import Topbar from "../components/Topbar";
import personalData from "../constants";
import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("Newest");

  const { scrollIntoView, targetRef: wrapperRef } = useScrollIntoView({
    offset: 100,
    duration: 500,
  });

  useEffect(() => {
    scrollIntoView({ alignment: "start" });
  }, []);

  const tagOptions = Array.from(
    new Set(personalData.projects.flatMap((project) => project.tags))
  );

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filteredProjects = personalData.projects.filter((project) =>
    selectedTags.every((tag) => project.tags.includes(tag))
  );

  if (sortBy === "Newest") {
    filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    filteredProjects.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
    <Box className={classes.wrapper} ref={wrapperRef}>
      {/* seo */}
      <Helmet>
        <title>Dipankar Paul's Projects</title>
        <meta
          name="description"
          content="Explore a collection of my innovative projects showcasing my skills in frontend development and creative problem-solving. Each project demonstrates my commitment to delivering engaging user experiences and technical excellence."
        />
      </Helmet>
      <Topbar label="Projects" icon={<Folder size={24} />} />
      {/* projects body */}
      <Box
        pt={{ base: "xs", sm: "md" }}
        pb={{ base: 0, sm: "xs" }}
        px={{ base: 0, xs: "xs" }}
      >
        {/* search and sort */}
        <Box>
          <Flex
            direction={{ base: "column-reverse", sm: "row" }}
            gap={{ base: "sm", sm: "lg" }}
            justify="space-between"
          >
            <MultiSelect
              placeholder="Search or Pick a tag"
              data={tagOptions}
              searchable
              clearable
              checkIconPosition="right"
              value={selectedTags}
              onChange={setSelectedTags}
              aria-label="Pick a tag input"
              maw={{ base: "auto", sm: "400px" }}
              style={{ flex: 1 }}
              size="md"
            />
            <Select
              aria-label="Sort projects by newest or oldest"
              data={["Newest", "Oldest"]}
              defaultValue="Newest"
              allowDeselect={false}
              checkIconPosition="right"
              value={sortBy}
              onChange={setSortBy}
              maw={{ base: "auto", sm: "120px" }}
              size="md"
            />
          </Flex>
        </Box>
        {/* project list */}
        <ProjectList projects={filteredProjects} tagClick={handleTagClick} />
      </Box>
    </Box>
  );
};

export default ProjectsPage;
