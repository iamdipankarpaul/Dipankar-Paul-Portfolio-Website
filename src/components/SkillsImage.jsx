import { Group, Image } from "@mantine/core";

const SkillsImage = ({ skills }) => {
  //   const items = skills.map((item) => (
  //     <Image key={item.id} src={item.src} alt={item.alt} />
  //   ));

  return (
    <Group gap="xs">
      {skills.map((item) => (
        <Image key={item.id} src={item.src} alt={item.alt} />
      ))}
    </Group>
  );
};

export default SkillsImage;
