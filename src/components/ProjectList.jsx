import { Box, SimpleGrid } from "@mantine/core";

import ProjectCard from "./ProjectCard";

const ProjectList = ({ projects, tagClick }) => {
  return (
    <Box my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            tagClick={tagClick}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectList;
