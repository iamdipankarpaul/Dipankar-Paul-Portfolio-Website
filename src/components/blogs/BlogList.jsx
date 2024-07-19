import { Box, SimpleGrid } from "@mantine/core";
import BlogCard from "./BlogCard";

const BlogList = ({ blogs, tagClick }) => {
  return (
    <Box my="md">
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        {blogs.map((item) => (
          <BlogCard key={item.id} blog={item} tagClick={tagClick} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BlogList;
