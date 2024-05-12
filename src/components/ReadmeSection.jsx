import { Box, Text, Divider, SimpleGrid } from "@mantine/core";
import SectionTitle from "./SectionTitle";
import SkillListSection from "./SkillListSection";
import ProjectList from "./ProjectList";
import BlogList from "./BlogList";

const ReadmeSection = ({
  titleText,
  bodyContent,
  skillList,
  projectList,
  blogList,
  linkText,
  linkTo,
}) => {
  return (
    <section aria-label={`${titleText} section`} style={{ marginTop: "20px" }}>
      <Box>
        <SectionTitle text={titleText} linkText={linkText} linkTo={linkTo} />
        {bodyContent && (
          <Box pl={{ base: 0, sm: "lg" }}>
            <Divider mb="sm" />
            <Text fz="lg">{bodyContent}</Text>
          </Box>
        )}
        {skillList && (
          <Box>
            <Divider mb="sm" />
            <SkillListSection skillList={skillList} />
          </Box>
        )}
        {projectList && (
          <Box pl={{ base: 0, sm: "sm", md: "lg" }}>
            <Divider mb="sm" />
            <ProjectList projects={projectList} />
          </Box>
        )}
        {blogList && (
          <Box pl={{ base: 0, sm: "sm", md: "lg" }}>
            <Divider mb="sm" />
            <BlogList blogs={blogList} />
          </Box>
        )}
      </Box>
    </section>
  );
};

export default ReadmeSection;
