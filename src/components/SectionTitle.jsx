import { Title, Box, Flex } from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { Link } from "@phosphor-icons/react";

const SectionTitle = ({ text, baseAs, smAs, pyAs }) => {
  const { hovered, ref } = useHover();
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box>
      <Flex align="center" ref={ref} gap="5px">
        {!isMobile && <Link size={20} style={{ opacity: hovered ? 1 : 0.2 }} />}
        <Title
          fw={500}
          fz={{ base: baseAs || "h2", sm: smAs || "h1" }}
          py={pyAs || "xs"}
          tt="capitalize"
        >
          {text}
        </Title>
      </Flex>
    </Box>
  );
};

export default SectionTitle;
