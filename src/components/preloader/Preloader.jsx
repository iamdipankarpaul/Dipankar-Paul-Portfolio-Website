import { useRef } from "react";
import { Box, Title, Center } from "@mantine/core";
import { useElementSize, useMergedRef } from "@mantine/hooks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// styles
import styles from "./Preloader.module.css";

function Preloader({ setLoading }) {
  // get the refs
  const preloaderBodyRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressRef = useRef(null);

  // get element sizes
  const { ref: progressBarSizeRef, width: progressBarWidth } = useElementSize();
  const { ref: progressSizeRef, width: progressWidth } = useElementSize();

  // marge refs
  const mergedProgressBarRef = useMergedRef(progressBarRef, progressBarSizeRef);
  const mergedProgressRef = useMergedRef(progressRef, progressSizeRef);

  useGSAP(() => {
    const randomStop = Math.random() * (0.8 - 0.3) + 0.3;

    const tl = gsap.timeline();

    tl.to(progressRef.current, {
      duration: 1,
      width: `${randomStop * 100}%`,
    });

    tl.to(progressRef.current, {
      duration: 1.5,
      width: "100%",
    });

    tl.to(preloaderBodyRef.current, {
      delay: 0.5,
      duration: 1,
      height: 0,
      onComplete: () => {
        setLoading(false);
      },
    });
  }, [setLoading]);

  let percentage = (progressWidth / progressBarWidth) * 100;
  let displayPercentage = !isNaN(percentage) ? Math.round(percentage) : 0;
  let displayText =
    displayPercentage < 100
      ? `You are ${displayPercentage}% there`
      : `Welcome to my portfolio`;

  return (
    <>
      <Box
        w="100%"
        h="100dvh"
        ref={preloaderBodyRef}
        className={styles.preloaderBody}
        aria-label="pre-loader component"
      >
        <Box ta="center" w="100%">
          <Title fz={{ base: "h2", sm: "h1" }} mb={20}>
            {displayText}
          </Title>
          <Center>
            <Box
              w="30%"
              miw="200px"
              h={{ base: "5px", sm: "8px" }}
              ref={mergedProgressBarRef}
              className={styles.progress_bar}
              aria-label="pre-loader progress bar"
              style={{
                visibility: "hidden",
              }}
            >
              <Box
                w={0}
                h="100%"
                ref={mergedProgressRef}
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
    </>
  );
}

export default Preloader;
