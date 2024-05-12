import { useState, useEffect } from "react";
import { Box, Divider, Text } from "@mantine/core";
// icon
import { BookOpen } from "@phosphor-icons/react";

// styles
import classes from "./Readme.module.css";

// components
import Topbar from "../../components/Topbar";
import NameAnimation from "../../components/NameAnimation";
import ReadmeSection from "../../components/ReadmeSection";

// constants
import personalData from "../../constants";
import fetchBlogs from "../../utils/fetchBlogs";

const ReadmePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogsError, setBlogsError] = useState(null);

  const pinnedProjects = Object.groupBy(
    personalData.projects,
    ({ pinned }) => pinned
  );

  // fetch blogs
  useEffect(() => {
    const fetchData = async () => {
      setBlogsLoading(true);
      try {
        const blogsData = await fetchBlogs();
        setBlogs([...blogsData.slice(0, 4)]);
        setBlogsLoading(false);
        setBlogsError(null);
      } catch (error) {
        setBlogsError({
          status: error.response.status,
          message: "Fail to fetch the blogs.",
        });
        setBlogsLoading(false);
        setBlogs([]);
      }
    };
    fetchData();
  }, []);

  return (
    <Box className={classes.wrapper}>
      <Topbar label="README.md" icon={<BookOpen size={24} />} />
      {/* body */}
      <Box
        py={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
        pr={{ base: "xs", sm: "md" }}
        pl="xs"
      >
        <section aria-label="Readme header section">
          <Box pl={{ base: 0, sm: "lg" }}>
            <NameAnimation />
          </Box>
          <Box pl={{ base: 0, sm: "xl" }}>
            <Divider mb="sm" />
            <Text fz="xl">{personalData.designation}</Text>
          </Box>
        </section>

        {/* about me */}

        {personalData.aboutMe.map((about) => (
          <ReadmeSection
            key={about.id}
            titleText={about.title}
            bodyContent={about.description}
          />
        ))}

        {/* skills */}
        <ReadmeSection
          titleText={personalData.skills.title}
          skillList={personalData.skills.skillList}
        />

        {/* projects */}
        <ReadmeSection
          titleText={"Pinned Projects"}
          projectList={pinnedProjects.true}
          linkText="All Projects"
          linkTo="/projects"
        />
        
        {/* blogs */}
        <ReadmeSection
          titleText={"Letest Blogs"}
          blogList={blogs}
          linkText="All Blogs"
          linkTo="/blogs"
        />
      </Box>
    </Box>
  );
};

export default ReadmePage;
