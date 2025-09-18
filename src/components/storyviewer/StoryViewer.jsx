import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
import { Modal } from "@mantine/core";
import styles from "./StoryViewer.module.css";

export default function StoryViewer({
  stories,
  initialIndex = 0,
  opened,
  onClose,
  maxWidthPx = 600,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const [isMuted, setMuted] = useState(true);
  const [isHolding, setHolding] = useState(false);

  const videoRef = useRef(null);
  const progressIntervalRef = useRef();
  const holdTimeoutRef = useRef();

  const currentStory = stories[currentIndex];
  const isLastStory = currentIndex === stories.length - 1;

  // Get story duration (30s default for image/text, video duration for videos, max 60s)
  const getStoryDuration = useCallback((story) => {
    if (story.type === "video" && videoRef.current) {
      return Math.min(videoRef.current.duration || 30, 60);
    }
    return story.duration || 30;
  }, []);

  // Progress management
  const startProgress = useCallback(() => {
    if (isPaused || isHolding) return;

    const duration = getStoryDuration(currentStory);
    const increment = 100 / (duration * 10); // Update every 100ms

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          // Auto advance to next story or close if last
          if (isLastStory) {
            onClose();
          } else {
            setCurrentIndex(currentIndex + 1);
          }
          return 0;
        }
        return newProgress;
      });
    }, 100);
  }, [
    currentStory,
    currentIndex,
    isLastStory,
    isPaused,
    isHolding,
    getStoryDuration,
    onClose,
  ]);

  const stopProgress = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(0);
    stopProgress();
  }, [stopProgress]);

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isLastStory) {
      onClose();
    } else {
      setCurrentIndex(currentIndex + 1);
      resetProgress();
    }
  }, [currentIndex, isLastStory, onClose, resetProgress]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetProgress();
    }
  }, [currentIndex, resetProgress]);

  // Touch/mouse handlers for tap navigation and hold to pause
  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    setHolding(true);

    // Set timeout for hold detection (300ms)
    holdTimeoutRef.current = setTimeout(() => {
      setPaused(true);
    }, 300);
  }, []);

  const handlePointerUp = useCallback(
    (e, side) => {
      e.preventDefault();

      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }

      // If was holding, just resume
      if (isHolding && isPaused) {
        setPaused(false);
        setHolding(false);
        return;
      }

      setHolding(false);

      // Navigate based on side
      if (side === "right") {
        goToNext();
      } else {
        goToPrevious();
      }
    },
    [isHolding, isPaused, goToNext, goToPrevious]
  );

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowRight":
          goToNext();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, onClose]);

  // Progress effect
  useEffect(() => {
    resetProgress();

    // Start progress after a brief delay for video loading
    const timeout = setTimeout(() => {
      startProgress();
    }, 100);

    return () => {
      clearTimeout(timeout);
      stopProgress();
    };
  }, [currentIndex, startProgress, stopProgress, resetProgress]);

  // Pause/resume effect
  useEffect(() => {
    if (isPaused || isHolding) {
      stopProgress();
    } else {
      startProgress();
    }
  }, [isPaused, isHolding, startProgress, stopProgress]);

  // Video handlers
  const handleVideoLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play();
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  }, [isMuted]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopProgress();
      if (holdTimeoutRef.current) {
        clearTimeout(holdTimeoutRef.current);
      }
    };
  }, [stopProgress]);

  return (
    <Modal.Root
      opened={opened}
      onClose={onClose}
      fullScreen
      radius={0}
      transitionProps={{ transition: "fade", duration: 200 }}
      // title="This is a fullscreen modal"
    >
      <Modal.Content>
        {/* Story Container */}
        <div
          className={styles.container}
          style={{ maxWidth: `${maxWidthPx}px` }}
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

          {/* Mute/Unmute Button (only for videos) */}
          {currentStory.type === "video" && (
            <button onClick={toggleMute} className={styles.muteButton}>
              {isMuted ? (
                <SpeakerSlash className="w-6 h-6" />
              ) : (
                <SpeakerHigh className="w-6 h-6" />
              )}
            </button>
          )}

          {/* Navigation Areas */}
          <div className={styles.navigation}>
            {/* Left tap area */}
            <div
              className={styles.navArea}
              onPointerDown={(e) => handlePointerDown(e, "left")}
              onPointerUp={(e) => handlePointerUp(e, "left")}
              onPointerLeave={() => {
                if (holdTimeoutRef.current) {
                  clearTimeout(holdTimeoutRef.current);
                }
                setHolding(false);
              }}
            />

            {/* Right tap area */}
            <div
              className={styles.navArea}
              onPointerDown={(e) => handlePointerDown(e, "right")}
              onPointerUp={(e) => handlePointerUp(e, "right")}
              onPointerLeave={() => {
                if (holdTimeoutRef.current) {
                  clearTimeout(holdTimeoutRef.current);
                }
                setHolding(false);
              }}
            />
          </div>

          {/* Story Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={styles.storyContent}
            >
              {currentStory.type === "image" && (
                <img
                  src={currentStory.content || "/placeholder.svg"}
                  alt={currentStory.altText || "Story image"}
                  className={styles.storyImage}
                />
              )}

              {currentStory.type === "video" && (
                <video
                  ref={videoRef}
                  src={currentStory.content}
                  poster={currentStory.poster}
                  className={styles.storyVideo}
                  autoPlay
                  muted={isMuted}
                  playsInline
                  onLoadedMetadata={handleVideoLoadedMetadata}
                  onEnded={goToNext}
                  aria-label={currentStory.altText || "Story video"}
                />
              )}

              {currentStory.type === "text" && (
                <div
                  className={styles.storyTextWrapper}
                  style={{
                    backgroundColor: currentStory.backgroundColor || "#1f2937",
                    color: currentStory.textColor || "#ffffff",
                  }}
                >
                  <p className={styles.storyText}>{currentStory.content}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Modal.Content>
    </Modal.Root>
  );
}
