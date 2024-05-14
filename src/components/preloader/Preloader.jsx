import React, { useRef } from "react";
import { Box, Title, Center } from "@mantine/core";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// styles
import styles from "./Preloader.module.css";

function Preloader({ setLoading }) {
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    const randomStop = Math.random() * (0.8 - 0.3) + 0.3;

    const tl = gsap.timeline();
    tl.to(progressRef.current, {
      duration: 1,
      width: `${randomStop * 100}%`,
    });
    tl.to(progressRef.current, {
      duration: 1 - randomStop,
      width: "100%",
    });
    tl.to(progressBarRef.current, {
      duration: 0.5,
      opacity: 0,
    });
    tl.to(preloaderRef.current, {
      duration: 0.5,
      height: 0,
      onComplete: () => {
        setLoading(false);
      },
    });
  }, [setLoading]);

  return (
    <Box
      w="100%"
      h="100dvh"
      ref={preloaderRef}
      className={styles.preloader}
      aria-label="pre-loader component"
    >
      <Box ta="center" w="100%">
        <Title fz={{ base: "h2", sm: "h1" }} mb={20}>
          Welcome to My Portfolio
        </Title>
        {/* keep the progress bar centered */}
        <Center>
          <Box
            w="30%"
            miw="200px"
            h={{ base: "5px", sm: "8px" }}
            ref={progressBarRef}
            className={styles.progress_bar}
            aria-label="pre-loader progress bar"
          >
            <Box
              w={0}
              h="100%"
              ref={progressRef}
              className={styles.progress}
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="pre-loader progress bar progress"
            ></Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}

export default Preloader;
