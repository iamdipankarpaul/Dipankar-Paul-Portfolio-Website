import { Box, Card, Group, Text, Badge, Flex, Divider } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, tagClick }) => {
  const { hovered, ref: blogTitleref } = useHover();
  return (
    <>
      <Card shadow="md" padding="md" withBorder>
        {/* card header */}
        <Box
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {/* title */}
          <Text
            fz="h3"
            fw={500}
            c="blue"
            target="_blank"
            component={Link}
            to={blog.url}
            ref={blogTitleref}
            td={hovered ? "underline" : "none"}
          >
            {blog.title}
          </Text>
          {/* date and time */}
          <Group>
            <Text size="sm" c="dimmed">
              {blog.readable_publish_date}
            </Text>
            <Divider orientation="vertical" />
            <Text size="sm" c="dimmed">
              {blog.reading_time_minutes} minutes read
            </Text>
          </Group>
        </Box>
        {/* description */}
        <Text lineClamp={1} my="sm">
          {blog.description}
        </Text>
        {/* tags */}
        <Flex gap="3px" wrap="wrap">
          {blog.tag_list.map((tag) => (
            <Badge
              key={tag}
              variant="light"
              m={0}
              onClick={() => (tagClick ? tagClick(tag) : null)}
              style={{ cursor: tagClick ? "pointer" : "text" }}
            >
              {tag}
            </Badge>
          ))}
        </Flex>
      </Card>
    </>
  );
};

export default BlogCard;

/**
description,
        id,
        published_at,
        readable_publish_date,
        reading_time_minutes,
        tag_list,
        tags,
        title,
        url,

 */
