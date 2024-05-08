import { Box, Divider, Text } from "@mantine/core";
// icon
import { BookOpen } from "@phosphor-icons/react";

// styles
import classes from "./Readme.module.css";

// components
import Topbar from "../../components/Topbar";
import NameAnimation from "../../components/NameAnimation";
import ReadmeSection from "./ReadmeSection";

// constants
import personalData from "../../constants";

const ReadmePage = () => {
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
          <Box pl={{ base: 0, sm: "lg" }}>
            <Divider mb="sm" size="sm" />
            <Text fz="xl">{personalData.designation}</Text>
          </Box>
        </section>

        {personalData.aboutMe.map((about) => (
          <ReadmeSection
            key={about.id}
            titleText={about.title}
            bodyContent={about.description}
          />
        ))}

        <ReadmeSection
          titleText={personalData.skills.title}
          skillList={personalData.skills.skillList}
        />
      </Box>
    </Box>
  );
};

export default ReadmePage;
