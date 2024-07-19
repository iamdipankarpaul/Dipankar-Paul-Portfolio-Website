import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  MultiSelect,
  Select,
  Text,
  Button,
  Center,
  Group,
  Loader,
  Pagination,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { Article } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import classes from "./pages.module.css";

import Topbar from "../components/Topbar";
import BlogList from "../components/blogs/BlogList";

import { useGetBlogListQuery } from "../api/blogsApi";

const BlogsPage = () => {
  const [tagOptions, setTagOptions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("Newest");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [page, setPage] = useState(1);

  const { scrollIntoView, targetRef: wrapperRef } = useScrollIntoView({
    offset: 100,
    duration: 500,
  });

  useEffect(() => {
    scrollIntoView({ alignment: "start" });
  }, [scrollIntoView]);

  // Fetch blogs list
  const {
    data: blogs,
    error,
    isLoading,
  } = useGetBlogListQuery({
    limit: 10,
    page,
  });
  // console.log(blogs);

  // update tag options and filtered blogs only if blogs exists
  useEffect(() => {
    if (blogs?.length > 0) {
      // Update tagOptions
      setTagOptions(
        Array.from(new Set(blogs.flatMap((blog) => blog.tag_list)))
      );

      // Update filteredBlogs
      setFilteredBlogs(
        blogs.filter((blog) =>
          selectedTags.every((tag) => blog.tags.includes(tag))
        )
      );
    }
  }, [blogs, selectedTags]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Sorting
  if (sortBy === "Newest") {
    filteredBlogs.sort(
      (a, b) =>
        new Date(b.readable_publish_date) - new Date(a.readable_publish_date)
    );
  } else {
    filteredBlogs.sort(
      (a, b) =>
        new Date(a.readable_publish_date) - new Date(b.readable_publish_date)
    );
  }

  return (
    <Box className={classes.wrapper} ref={wrapperRef}>
      {/* seo */}
      <Helmet>
        <title>Dipankar Paul&apos;s Blogs</title>
        <meta
          name="description"
          content="Explore my journey as a frontend developer and blog writer. Discover my projects, read my tech blogs, and get in touch. Let's connect and create something amazing together!"
        />
      </Helmet>
      {/* topbar */}
      <Topbar label="Blogs" icon={<Article size={24} />} />
      {/* blog page content */}
      <Box
        pt={{ base: "xs", sm: "md", md: "lg" }}
        pb={{ base: 0, sm: "xs" }}
        px={{ base: 0, xs: "xs" }}
      >
        {/* if blogs loading */}
        {isLoading ? (
          <LoadingBlogs />
        ) : error ? (
          // if any error
          <ErrorFetchingBlogs error={error} />
        ) : // if blogs fetched successfully
        blogs?.length > 0 ? (
          <>
            {/* blogs search and sort */}
            <BlogsSearchSort
              tagOptions={tagOptions}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            {/* bloglist */}
            <Box>
              <BlogList blogs={filteredBlogs} tagClick={handleTagClick} />
            </Box>
            <Group justify="center">
              <BlogsPagination
                page={page}
                setPage={setPage}
                filteredBlogs={filteredBlogs}
                scrollToTop={scrollIntoView}
              />
            </Group>
          </>
        ) : (
          // if blogs not found
          <Box>
            <Center mih="60vh">
              <Text>Blogs Not Found 😔</Text>
            </Center>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BlogsPage;

const LoadingBlogs = () => {
  return (
    <Center>
      <Loader color="blue" size="lg" type="dots" />
    </Center>
  );
};

const ErrorFetchingBlogs = ({ error, refetch }) => {
  return (
    <Center>
      <Box ta="center">
        <Text my="sm">{error?.message}</Text>
        <Group wrap="nowrap">
          <Button onClick={refetch} variant="light">
            Try Again
          </Button>
          <Button>Go Back</Button>
        </Group>
      </Box>
    </Center>
  );
};

const BlogsSearchSort = ({
  tagOptions,
  selectedTags,
  setSelectedTags,
  sortBy,
  setSortBy,
}) => {
  return (
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
  );
};

const BlogsPagination = ({ page, setPage, filteredBlogs, scrollToTop }) => {
  return (
    <Pagination.Root
      value={page}
      onChange={setPage}
      onClick={() => scrollToTop({ alignment: "start" })}
    >
      <Group gap={7} mt="xl">
        <Pagination.Previous />
        <Pagination.Next disabled={filteredBlogs.length < 10} />
      </Group>
    </Pagination.Root>
  );
};
