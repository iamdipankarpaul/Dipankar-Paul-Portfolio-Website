import { Box, Text, Divider, SimpleGrid } from "@mantine/core";
import SectionTitle from "./SectionTitle";
import SkillListSection from "./SkillListSection";
import ProjectList from "./ProjectList";

const ReadmeSection = ({
  titleText,
  bodyContent,
  skillList,
  projectList,
  blogList,
}) => {
  return (
    <section aria-label={`${titleText} section`} style={{ marginTop: "20px" }}>
      <Box>
        <SectionTitle text={titleText} />
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
          <Box>
            <Divider mb="sm" />
            {/* <SimpleGrid cols={{ base: 1, sm: 2 }}></SimpleGrid> */}
            <ProjectList projects={projectList} />
          </Box>
        )}
        {blogList && (
          <Box>
            <Divider mb="sm" />
          </Box>
        )}
      </Box>
    </section>
  );
};

export default ReadmeSection;
