import { Title } from "@mantine/core";

const SectionTitle = ({ text }) => {
  return (
    <Title
      fw={500}
      fz={{ base: "h3", sm: "h2", md: "h1" }}
      my={{ base: "md", sm: "lg" }}
    >
      {text}
    </Title>
  );
};

export default SectionTitle;
