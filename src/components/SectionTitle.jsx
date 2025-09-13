import { Title, Flex, Text } from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { CaretRight, Link } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const SectionTitle = ({
  text,
  baseAs,
  smAs,
  pyAs,
  linkText = null,
  linkTo = null,
}) => {
  const { hovered, ref } = useHover();
  const isMobile = useMediaQuery("(max-width: 48em)");

  const navigate = useNavigate();

  return (
    <Flex align="center" justify="space-between">
      <Flex align="center" ref={ref} gap="5px">
        {!isMobile && <Link size={20} style={{ opacity: hovered ? 1 : 0.2 }} />}
        <Title
          fw={800}
          fz={{ base: baseAs || "h2", sm: smAs || "h1" }}
          py={pyAs || "xs"}
          tt="capitalize"
        >
          {text}
        </Title>
      </Flex>
      {linkText && linkTo && (
        <Text
          c="blue"
          onClick={() => navigate(linkTo)}
          style={{ cursor: "pointer" }}
        >
          {linkText}{" "}
          <CaretRight size={16} style={{ verticalAlign: "text-bottom" }} />
        </Text>
      )}
    </Flex>
  );
};

export default SectionTitle;
