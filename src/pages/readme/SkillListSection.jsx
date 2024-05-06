import { Box, Flex, Title } from "@mantine/core";
import SkillsImage from "../../components/SkillsImage";
import { skillList } from "../../constants/constants";

const SkillListSection = () => {
  const items = Object.keys(skillList).map((key) => (
    <Flex direction="column" gap="sm" mb="sm">
      <Title fz={{ base: "h3", sm: "h2" }} tt="capitalize">
        {key}
      </Title>
      <SkillsImage skills={skillList[key]} />
    </Flex>
  ));

  return <Box>{items}</Box>;
};

export default SkillListSection;
