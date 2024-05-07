import { Box, Text, Divider } from "@mantine/core";
import SectionTitle from "../../components/SectionTitle";
import SkillListSection from "./SkillListSection";

const ReadmeSection = ({ titleText, bodyContent, skillList }) => {
  return (
    <section aria-label={`${titleText} section`} style={{ marginTop: "20px" }}>
      <Box>
        <SectionTitle text={titleText} />
        <Box pl={{ base: 0, sm: "lg" }}>
          <Divider size="sm" mb="sm" />
          {bodyContent && <Text fz="lg">{bodyContent}</Text>}
          {skillList && <SkillListSection skillList={skillList} />}
        </Box>
      </Box>
    </section>
  );
};

export default ReadmeSection;
