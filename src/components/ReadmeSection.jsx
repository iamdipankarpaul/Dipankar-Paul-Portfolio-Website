import { Box, Text, Divider } from "@mantine/core";
import SectionTitle from "./SectionTitle";
import SkillListSection from "./SkillListSection";

const ReadmeSection = ({ titleText, bodyContent, skillList }) => {
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
      </Box>
    </section>
  );
};

export default ReadmeSection;
