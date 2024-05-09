import { Group, Title, Divider, Box } from "@mantine/core";

const Topbar = ({ label, icon }) => {
  return (
    <Box mx="xs">
      <Group p="xs" gap="xs">
        {icon}
        <Title fz="h4" fw={500}>
          {label}
        </Title>
      </Group>
      <Divider />
    </Box>
  );
};

export default Topbar;
