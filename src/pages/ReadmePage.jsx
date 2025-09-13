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
import ReadmeBlogSection from "../components/blogs/ReadmeBlogSection";

// local data
import personalData from "../constants";

const ReadmePage = () => {
  const pinnedProjects = Object.groupBy(
    personalData.projects,
    ({ pinned }) => pinned
  );

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
              Your friendly neighborhood web developer.{" "}
              <Link to="/contact" className={classes.readme_header_links}>
                Contact me
              </Link>{" "}
              for opportunities or{" "}
              <Anchor
                fz="xl"
                underline="never"
                href={"https://357429452906074112.hello.cv/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                view
              </Anchor>{" "}
              my resume.
            </Text>
          </Box>
        </section>

        {/* about me */}
        <ReadmeSection
          titleText={personalData.aboutMe.title}
          bodyContent={personalData.aboutMe.description}
        />
        
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
        <ReadmeBlogSection />
      </Box>
    </Box>
  );
};

export default ReadmePage;
