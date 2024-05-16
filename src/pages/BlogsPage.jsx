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
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { Article } from "@phosphor-icons/react";
import { Helmet } from "react-helmet-async";

import classes from "./pages.module.css";

import Topbar from "../components/Topbar";
import BlogList from "../components/BlogList";
import fetchBlogs from "../utils/fetchBlogs";
import waait from "../utils/waait";

const BlogsPage = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [tagOptions, setTagOptions] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("Newest");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const { scrollIntoView, targetRef: wrapperRef } = useScrollIntoView({
    offset: 100,
    duration: 500,
  });

  useEffect(() => {
    scrollIntoView({ alignment: "start" });
  }, []);

  // fetch blogs
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await waait(500);
      try {
        const blogsData = await fetchBlogs();
        setBlogs([...blogsData]);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError({
          status: error.response.status,
          message: "Fail to fetch the blogs.",
        });
        setLoading(false);
        setBlogs([]);
      }
    };
    fetchData();
  }, []);

  // update tag options and filtered blogs
  useEffect(() => {
    if (blogs.length > 0) {
      // Update tagOptions
      setTagOptions(Array.from(new Set(blogs.flatMap((b) => b.tag_list))));

      // Update filteredBlogs
      setFilteredBlogs(
        blogs.filter((blog) =>
          selectedTags.every((tag) => blog.tags.includes(tag))
        )
      );
    }
  }, [blogs, selectedTags]);

  // refetch blogs
  const refetchBlogs = async () => {
    setLoading(true);
    try {
      const blogsData = await fetchBlogs();
      setBlogs([...blogsData]);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError({
        status: error.response.status,
        message: "Fail to fetch the blogs.",
      });
      setLoading(false);
      setBlogs([]);
    }
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

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
        <title>Dipankar Paul's Blogs</title>
        <meta
          name="description"
          content="Explore my journey as a frontend developer and blog writer. Discover my projects, read my tech blogs, and get in touch. Let's connect and create something amazing together!"
        />
      </Helmet>
      {/* topbar */}
      <Topbar label="Blogs" icon={<Article size={24} />} />
      {/* blog page content */}
      <Box
        pt={{ base: 0, sm: "md", md: "lg" }}
        pb={{ base: 0, sm: "xs" }}
        px={{ base: 0, xs: "xs" }}
      >
        {/* loading */}
        {loading && (
          <Center>
            <Loader color="blue" size="lg" type="dots" />
          </Center>
        )}

        {/* error */}
        {error && (
          <>
            <Center>
              <Box ta="center">
                <Text my="sm">{error.message}</Text>
                <Group wrap="nowrap">
                  <Button onClick={refetchBlogs} variant="light">
                    Try Again
                  </Button>
                  <Button>Go Back</Button>
                </Group>
              </Box>
            </Center>
          </>
        )}

        {/* blog list */}
        {blogs.length > 0 && (
          <>
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
            {/* bloglist */}
            <Box>
              <BlogList blogs={filteredBlogs} tagClick={handleTagClick} />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default BlogsPage;
