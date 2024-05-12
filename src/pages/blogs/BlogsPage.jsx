import { useEffect } from "react";
import { Box } from "@mantine/core";
import { useScrollIntoView, useFetch } from "@mantine/hooks";
import { Article } from "@phosphor-icons/react";

import classes from "./Blogs.module.css";

import Topbar from "../../components/Topbar";

const BlogsPage = () => {
  const { scrollIntoView, targetRef: wrapperRef } = useScrollIntoView({
    offset: 100,
    duration: 500,
  });

  useEffect(() => {
    scrollIntoView({ alignment: "start" });
  }, []);

  const { data, loading, error, refetch, abort } = useFetch(
    "https://dev.to/api/articles?username=dipankarpaul"
  );

  let mappedData = null;
  if (data) {
    mappedData = data.map(
      ({
        description,
        id,
        published_at,
        readable_publish_date,
        reading_time_minutes,
        tag_list,
        tags,
        title,
        url,
      }) => ({
        description,
        id,
        published_at,
        readable_publish_date,
        reading_time_minutes,
        tag_list,
        tags,
        title,
        url,
      })
    );
  }

  return (
    <Box className={classes.wrapper} ref={wrapperRef}>
      <Topbar label="Blogs" icon={<Article size={24} />} />
      <Box py={{ base: "sm", sm: "lg" }} px={{ base: "xs", sm: "lg" }}>
        <Box>{!mappedData ? "loading" : "Blogs Page"}</Box>
      </Box>
    </Box>
  );
};

export default BlogsPage;
