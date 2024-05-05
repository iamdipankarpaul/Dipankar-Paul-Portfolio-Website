import { Group, Title, Divider } from "@mantine/core";

const Topbar = ({ label }) => {
  return (
    <>
      <Group p="xs">
        <Title fz="h4" fw={500}>
          {label}
        </Title>
      </Group>
      <Divider />
    </>
  );
};

export default Topbar;
