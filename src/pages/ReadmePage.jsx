import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Text, Anchor } from "@mantine/core";

// icon
import { BookOpen } from "@phosphor-icons/react";

// styles
import classes from "./pages.module.css";

// components
import Topbar from "../components/Topbar";
import NameAnimation from "../components/NameAnimation";
import ReadmeSection from "../components/ReadmeSection";

// constants
import personalData from "../constants";
import fetchBlogs from "../utils/fetchBlogs";

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
      {/* topbar */}
      <Topbar label="README.md" icon={<BookOpen size={24} />} />
      {/* body */}
      <Box
        pt={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
        pb={{ base: 0, sm: "xs" }}
        px={{ base: 0, xs: "xs" }}
      >
        {/* readme header section */}
        <section aria-label="Readme header section">
          <Box pl={{ base: 0, sm: "md" }}>
            <NameAnimation />
          </Box>
          <Box pl={{ base: 0, sm: "lg" }}>
            <Divider mb="sm" />
            <Text fz="xl">
              {personalData.designation}{" "}
              <Link to="/contact" className={classes.readme_header_links}>
                Contact me
              </Link>{" "}
              for any opportunities or{" "}
              <Anchor
                fz="xl"
                underline="never"
                href={personalData.resume}
                download="Dipankar-Paul-Resume"
              >
                download
              </Anchor>{" "}
              my resume.
            </Text>
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
        {blogsError ? (
          <ReadmeSection
            titleText={"Letest Blogs"}
            bodyContent="Fail to fetch blogs."
            linkText="All Blogs"
            linkTo="/blogs"
          />
        ) : (
          <ReadmeSection
            titleText={"Letest Blogs"}
            blogList={blogs}
            linkText="All Blogs"
            linkTo="/blogs"
          />
        )}
      </Box>
    </Box>
  );
};

export default ReadmePage;
