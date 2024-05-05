import { Box, Divider, Flex, Group, Text, Title } from "@mantine/core";

// styles
import classes from "./Readme.module.css";

// components
import Topbar from "../../components/Topbar";
import NameAnimation from "../../components/NameAnimation";
import SectionTitle from "../../components/SectionTitle";

const ReadmePage = () => {
  return (
    <Box className={classes.wrapper}>
      <Topbar label="README.md" />
      {/* body */}
      <Box p={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}>
        <Box mb="sm">
          <NameAnimation />
          <Divider mb="sm" />
          <Text size="lg">A Frontend Developer and Blog Writer.</Text>
        </Box>

        <SectionTitle text="💻 What I Do" />
        <Text size="lg">
          I design and develop user interfaces that are not only visually
          appealing but also functional and user-friendly. My skills in frontend
          technologies allow me to create responsive websites and web
          applications that work seamlessly across devices. I also enjoy sharing
          my knowledge and insights through my blogs on dev.to, where I write
          about Rust tutorials.
        </Text>

        <SectionTitle text="🚀 My Approach" />
        <Text size="lg">
          I'm passionate about continuous learning and staying updated with the
          latest trends and technologies in the frontend development space. I
          approach each project with enthusiasm and a commitment to delivering
          high-quality results. Additionally, I'm currently expanding my skills
          into backend development, broadening my expertise in creating
          full-stack applications.
        </Text>
      </Box>
    </Box>
  );
};

export default ReadmePage;
