import { useEffect } from "react";
import { Box } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
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

  return (
    <Box className={classes.wrapper}>
      <Topbar label="Blogs" icon={<Article size={24} />} />
      <Box>
        <div>Blogs Page</div>
      </Box>
    </Box>
  );
};

export default BlogsPage;
