import styles from "./StoryViewer.module.css";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Modal } from "@mantine/core";

export default function StoryViewer({
  stories,
  opened,
  onClose,
  maxWidthPx = 500,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHolding, setIsHolding] = useState(false);

  const progressIntervalRef = useRef(null);
  const holdTimeoutRef = useRef(null);
  const containerRef = useRef(null);

  const STORY_DURATION = 15000; // 15 seconds
  const HOLD_THRESHOLD = 300; // 300ms to trigger pause

  // Reset progress when story changes
  const resetProgress = useCallback(() => {
    setProgress(0);
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  }, []);

  // Start progress timer
  const startProgress = useCallback(() => {
    if (isPaused || isHolding) return;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (STORY_DURATION / 100);
        if (newProgress >= 100) {
          // Auto advance to next story
          if (currentIndex < stories.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            return 0;
          } else {
            // Last story reached, close viewer
            onClose();
            return 100;
          }
        }
        return newProgress;
      });
    }, 100);
  }, [currentIndex, stories.length, onClose, isPaused, isHolding]);

  // Navigation functions
  const goToNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetProgress();
    } else {
      onClose();
    }
  }, [currentIndex, stories.length, onClose, resetProgress]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      resetProgress();
    }
  }, [currentIndex, resetProgress]);

  // Hold to pause functionality
  const handleHoldStart = useCallback(() => {
    holdTimeoutRef.current = setTimeout(() => {
      setIsHolding(true);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }, HOLD_THRESHOLD);
  }, []);

  const handleHoldEnd = useCallback(() => {
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
    }
    if (isHolding) {
      setIsHolding(false);
    }
  }, [isHolding]);

  // Touch/Mouse event handlers
  const handleTouchStart = useCallback(() => {
    handleHoldStart();
  }, [handleHoldStart]);

  const handleTouchEnd = useCallback(
    (e) => {
      handleHoldEnd();

      if (!isHolding && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clientX =
          "touches" in e ? e.changedTouches[0].clientX : e.clientX;
        const clickX = clientX - rect.left;
        const containerWidth = rect.width;

        if (clickX < containerWidth / 2) {
          goToPrevious();
        } else {
          goToNext();
        }
      }
    },
    [isHolding, goToPrevious, goToNext, handleHoldEnd]
  );

  // Keyboard event handler
  const handleKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
        case " ":
          e.preventDefault();
          setIsPaused((prev) => !prev);
          break;
      }
    },
    [goToPrevious, goToNext, onClose]
  );

  // Effects
  useEffect(() => {
    if (opened) {
      setCurrentIndex(0);
      setProgress(0);
      setIsPaused(false);
      setIsHolding(false);
    }
  }, [opened]);

  useEffect(() => {
    resetProgress();
  }, [currentIndex, resetProgress]);

  useEffect(() => {
    if (opened && !isPaused && !isHolding) {
      startProgress();
    }

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [opened, isPaused, isHolding, startProgress]);

  useEffect(() => {
    if (opened) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [opened, handleKeyDown]);

  useEffect(() => {
    return () => {
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  if (!opened || stories.length === 0) return null;

  const currentStory = stories[currentIndex];

  return (
    <AnimatePresence>
      <Modal.Root
        opened={opened}
        onClose={onClose}
        fullScreen
        radius={0}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        <Modal.Content>
          {/* Story Container */}
          <div
            ref={containerRef}
            className={styles.container}
            style={{ maxWidth: `${maxWidthPx}px` }}
            // onTouchStart={handleTouchStart}
            // onTouchEnd={handleTouchEnd}
            // onMouseDown={handleTouchStart}
            // onMouseUp={handleTouchEnd}
            // onMouseLeave={handleHoldEnd}
            onPointerDown={handleTouchStart}
            onPointerUp={handleTouchEnd}
            onPointerLeave={handleHoldEnd}
          >
            {/* Progress Bars */}
            <div className={styles.progressContainer}>
              {stories.map((_, index) => (
                <div key={index} className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{
                      width:
                        index < currentIndex
                          ? "100%"
                          : index === currentIndex
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Close Button */}
            <Modal.CloseButton className={styles.closeButton} />

            {/* Story Content */}
            <div className={styles.storyContentWrapper}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.storyMotion}
                >
                  {currentStory.type === "text" && (
                    <div
                      className={styles.storyTextWrapper}
                      style={{
                        backgroundColor:
                          currentStory.backgroundColor || "#4a4decff",
                        color: currentStory.textColor || "#ffffff",
                      }}
                    >
                      <p className={styles.storyText}>{currentStory.content}</p>
                    </div>
                  )}

                  {currentStory.type === "image" && (
                    <div className={styles.imageWrapper}>
                      <img
                        src={currentStory.content || "https://placehold.co/400"}
                        alt={currentStory.altText || "Story image"}
                        className={styles.storyImage}
                      />
                      {currentStory.caption && (
                        <div className={styles.captionOverlay}>
                          <p className={styles.captionText}>
                            {currentStory.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pause Indicator */}
            {(isPaused || isHolding) && (
              <div className={styles.pauseOverlay}>
                <div className={styles.pauseContainer}>
                  <div className={styles.pauseBars}>
                    <div className={styles.pauseBar} />
                    <div className={styles.pauseBar} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal.Content>
      </Modal.Root>
    </AnimatePresence>
  );
}
