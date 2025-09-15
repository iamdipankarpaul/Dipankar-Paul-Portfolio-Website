import { Box, Divider, Text } from "@mantine/core";

// icon
import { BookOpen } from "@phosphor-icons/react";

// styles
import classes from "./pages.module.css";

// components
import Topbar from "../components/Topbar";
import NameAnimation from "../components/NameAnimation";
import ReadmeSection from "../components/ReadmeSection";

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
            <Text fz={"lg"}>
              Your friendly neighborhood{" "}
              <Text span fz={"lg"} c={"yellow"}>
                web developer.
              </Text>
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
      </Box>
    </Box>
  );
};

export default ReadmePage;
