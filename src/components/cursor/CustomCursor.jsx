import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const cursorStyle = getComputedStyle(e.target).cursor;
      // console.log("cursorStyle: ", cursorStyle);
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.5,
        ease: "power2.out",
      });

      if (cursorStyle === "pointer") {
        gsap.to(cursor, {
          scale: 2,
          duration: 0.3,
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
};

export default CustomCursor;
