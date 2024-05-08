import { Title, Box, Flex } from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { Link, Hash } from "@phosphor-icons/react";

const SectionTitle = ({ text }) => {
  const { hovered, ref } = useHover();
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box>
      <Flex align="center" ref={ref} gap="5px">
        {!isMobile && <Link size={20} style={{ opacity: hovered ? 1 : 0 }} />}
        <Title fw={500} fz={{ base: "h2", sm: "h1" }} py={"xs"}>
          {text}
        </Title>
      </Flex>
    </Box>
  );
};

export default SectionTitle;
