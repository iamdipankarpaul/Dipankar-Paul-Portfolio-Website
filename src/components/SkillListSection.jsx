import { Box, Flex, Title } from "@mantine/core";
import SkillsImage from "./SkillsImage";

const SkillListSection = ({skillList}) => {
  const items = Object.keys(skillList).map((key) => (
    <Flex direction="column" gap="sm" mb="sm" key={key}>
      <Title fz={{ base: "h3", sm: "h2" }} tt="capitalize">
        {key}
      </Title>
      <SkillsImage skills={skillList[key]} />
    </Flex>
  ));

  return <Box>{items}</Box>;
};

export default SkillListSection;
