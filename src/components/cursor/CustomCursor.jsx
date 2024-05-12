import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  // const pathName = document.location.pathname;
  // console.log("document.location: ", document.location);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const scaleCursor = () => {
      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetCursor = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("button, a, [data-clickable]").forEach((elm) => {
      elm.addEventListener("mouseenter", scaleCursor);
      elm.addEventListener("mouseleave", resetCursor);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document
        .querySelectorAll("button, a, [data-clickable]")
        .forEach((elm) => {
          elm.removeEventListener("mouseenter", scaleCursor);
          elm.removeEventListener("mouseleave", resetCursor);
        });
    };
  }, []);

  return <div ref={cursorRef} className={styles.cursor}></div>;
};

export default CustomCursor;
