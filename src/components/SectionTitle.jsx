import { Title, Divider, Box } from "@mantine/core";
import { useHover } from "@mantine/hooks";

const SectionTitle = ({ text }) => {
  const { hovered, ref: sectionTitleRef } = useHover();
  return (
    <Box mb="sm">
      <Title
        ref={sectionTitleRef}
        fw={500}
        fz={{ base: "h2", sm: "h1" }}
        my={{ base: "md", sm: "lg" }}
        style={{ textDecoration: hovered ? "underline" : "none",
          textUnderlinePosition: "under"
         }}
      >
        {text}
      </Title>
      <Divider />
    </Box>
  );
};

export default SectionTitle;
