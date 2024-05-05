import { Group, Title } from "@mantine/core";
import { TypeAnimation } from "react-type-animation";

const NameAnimation = () => {
  return (
    <Group h="50px" align="center" mb={{ base: "md", sm: "lg" }}>
      <Title fw={500} fz={{ base: "h2", sm: "h1" }}>
        {/* 👋 Hello, I'm Dipankar Paul */}
        <TypeAnimation
          sequence={[
            "👋 Hello, I'm Dipankar Paul",
            1000,
            "👋 नमस्ते, मैं दीपंकर पौल हूँ",
            1000,
            "👋 নমস্কার, আমি দীপঙ্কর পাল",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </Title>
    </Group>
  );
};

export default NameAnimation;
