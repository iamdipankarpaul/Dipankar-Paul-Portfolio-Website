import { Group, Title, Divider } from "@mantine/core";

const Topbar = ({ label, icon }) => {
  return (
    <>
      <Group p="xs" gap="xs">
        {icon}
        <Title fz="h4" fw={500}>
          {label}
        </Title>
      </Group>
      <Divider />
    </>
  );
};

export default Topbar;
