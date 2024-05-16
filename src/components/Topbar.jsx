import { Group, Title, Divider, Box } from "@mantine/core";

const Topbar = ({ label, icon }) => {
  return (
    <Box mx={{ base: 0, sm: "xs" }}>
      <Group gap="xs" pt={{ base: 0, sm: "xs" }} pb={{ base: "sm", sm: "xs" }}>
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
