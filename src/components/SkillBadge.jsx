import { Badge, Group } from "@mantine/core";

export default function SkillBadge({ skills, }) {
  return (
    <Group gap="xs">
      {skills.map((item) => (
        <Badge key={item.id} variant="outline" size="xl" fw={500}>
          {item.label}
        </Badge>
      ))}
    </Group>
  );
}
