import { Group, Image } from "@mantine/core";

const SkillsImage = ({ skills }) => {
  return (
    <Group gap="xs">
      {skills.map((item) => (
        <Image key={item.id} src={item.src} alt={item.alt} />
      ))}
    </Group>
  );
};

export default SkillsImage;
