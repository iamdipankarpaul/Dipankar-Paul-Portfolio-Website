import { Card, Group, Text, Badge, Flex } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, tagClick }) => {
  const { hovered, ref: projectTitleref } = useHover();

  return (
    <Card shadow="md" padding="md" withBorder>
      {/* card heading */}
      <Group justify="space-between" gap="xs">
        <Text
          fz="h3"
          fw={500}
          component={Link}
          to={`/projects/${project.slug}`}
          w="70%"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textDecoration: hovered ? "underline" : "none",
          }}
          ref={projectTitleref}
          c="blue"
        >
          {project.title}
        </Text>
        <Badge
          component={Link}
          to={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          Live
        </Badge>
      </Group>
      {/* description */}
      <Text lineClamp={1} my="sm">
        {project.description}
      </Text>
      {/* tags */}
      <Flex gap={"3px"} wrap="wrap">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="light"
            m="0px"
            onClick={() => (tagClick ? tagClick(tag) : null)}
            style={{ cursor: tagClick ? "pointer" : "text" }}
          >
            {tag}
          </Badge>
        ))}
      </Flex>
    </Card>
  );
};

export default ProjectCard;
