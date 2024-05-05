import { Title, Divider, Box } from "@mantine/core";

const SectionTitle = ({ text }) => {
  return (
    <Box mb="sm">
      <Title
        fw={500}
        fz={{ base: "h2", sm: "h1" }}
        my={{ base: "md", sm: "lg" }}
      >
        {text}
      </Title>
      <Divider />
    </Box>
  );
};

export default SectionTitle;
