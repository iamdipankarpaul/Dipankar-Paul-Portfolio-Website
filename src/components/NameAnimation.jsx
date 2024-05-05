import { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { Group, Title } from "@mantine/core";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);

const NameAnimation = () => {
  const greetingRef = useRef(null);
  const greetings = [
    "👋 Hello, I'm Dipankar Paul",
    "👋 नमस्ते, मैं दीपंकर पौल हूँ",
    "👋 নমস্কার, আমি দীপঙ্কর পাল",
  ];
  let currentIndex = 0;

  useGSAP(() => {
    const animateGreeting = () => {
      gsap.to(greetingRef.current, {
        duration: 1.5,
        text: greetings[currentIndex],
        repeat: 1,
        yoyo: true,
        onComplete: () => {
          currentIndex = (currentIndex + 1) % greetings.length;
        },
      });
    };

    animateGreeting();

    const intervalId = setInterval(() => {
      animateGreeting();
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Group h="50px" align="center" mb={{ base: "md", sm: "lg" }}>
      <Title ref={greetingRef} fw={500} fz={{ base: "h2", sm: "h1" }}></Title>
    </Group>
  );
};

export default NameAnimation;
