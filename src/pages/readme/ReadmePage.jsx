import { Box, Divider, Text } from "@mantine/core";
// icon
import { BookOpen } from "@phosphor-icons/react";

// styles
import classes from "./Readme.module.css";

// components
import Topbar from "../../components/Topbar";
import NameAnimation from "../../components/NameAnimation";
import ReadmeSection from "./ReadmeSection";

import { skillList } from "../../constants/constants";

const ReadmePage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="README.md" icon={<BookOpen size={24} />} />
      {/* body */}
      <Box py={{ base: "sm", sm: "md", md: "lg", lg: "xl" }} px="xs">
        <section aria-label="Readme header section">
          <Box pl={{ base: 0, sm: "xl" }}>
            <NameAnimation />
          </Box>
          <Box pl={{ base: 0, sm: "xl" }}>
            <Divider mb="sm" size="sm" />
            <Text fz="xl">A Frontend Developer and Blog Writer.</Text>
          </Box>
        </section>

        <ReadmeSection
          titleText="What I Do"
          bodyContent="I design and develop user interfaces that are not only visually
              appealing but also functional and user-friendly. My skills in
              frontend technologies allow me to create responsive websites and
              web applications that work seamlessly across devices. I also enjoy
              sharing my knowledge and insights through my blogs on dev.to,
              where I write about Rust tutorials."
        />

        <ReadmeSection
          titleText="My Approach"
          bodyContent="I'm passionate about continuous learning and staying updated with
          the latest trends and technologies in the frontend development
          space. I approach each project with enthusiasm and a commitment to
          delivering high-quality results. Additionally, I'm currently
          expanding my skills into backend development, broadening my
          expertise in creating full-stack applications."
        />

        <ReadmeSection titleText="My Approach" skillList={skillList} />
      </Box>
    </Box>
  );
};

export default ReadmePage;
