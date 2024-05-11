import { Box, Flex, Title } from "@mantine/core";
import SkillsImage from "./SkillsImage";
import SectionTitle from "./SectionTitle";

const SkillListSection = ({ skillList }) => {
  const items = Object.keys(skillList).map((key) => (
    <Flex direction="column" gap="sm" mb="sm" key={key}>
      <SectionTitle text={key} baseAs="h3" smAs="h2" pyAs='5px'/>
      <Box pl={{ base: 0, sm: "lg" }}>
        <SkillsImage skills={skillList[key]} />
      </Box>
    </Flex>
  ));

  return <Box>{items}</Box>;
};

export default SkillListSection;
