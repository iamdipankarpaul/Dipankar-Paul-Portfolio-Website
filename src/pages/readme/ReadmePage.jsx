import { Box, Divider, Text } from "@mantine/core";
// icon
import { BookOpen } from "@phosphor-icons/react";

// styles
import classes from "./Readme.module.css";

// components
import Topbar from "../../components/Topbar";
import NameAnimation from "../../components/NameAnimation";
import SectionTitle from "../../components/SectionTitle";
import SkillListSection from "./SkillListSection";

const ReadmePage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="README.md" icon={<BookOpen size={24} />} />
      {/* body */}
      <Box p={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}>
        <section aria-label="Readme header section">
          <NameAnimation />
          <Divider mb="sm" />
          <Text fz={{ base: "lg", sm: "xl" }}>
            A Frontend Developer and Blog Writer.
          </Text>
        </section>

        <section aria-label="What i do section">
          <Box mt="lg">
            <SectionTitle text="💻 What I Do" />
            <Text fz={{ base: "md", sm: "lg" }}>
              I design and develop user interfaces that are not only visually
              appealing but also functional and user-friendly. My skills in
              frontend technologies allow me to create responsive websites and
              web applications that work seamlessly across devices. I also enjoy
              sharing my knowledge and insights through my blogs on dev.to,
              where I write about Rust tutorials.
            </Text>
          </Box>
        </section>

        <section aria-label="My approach section">
          <Box mt="lg">
            <SectionTitle text="🚀 My Approach" />
            <Text fz={{ base: "md", sm: "lg" }}>
              I'm passionate about continuous learning and staying updated with
              the latest trends and technologies in the frontend development
              space. I approach each project with enthusiasm and a commitment to
              delivering high-quality results. Additionally, I'm currently
              expanding my skills into backend development, broadening my
              expertise in creating full-stack applications.
            </Text>
          </Box>
        </section>

        <section aria-label="Skills & technologies section">
          <Box mt="lg">
            <SectionTitle text="⚙️ Skills & Technologies" />
            <SkillListSection />
          </Box>
        </section>
      </Box>
    </Box>
  );
};

export default ReadmePage;
