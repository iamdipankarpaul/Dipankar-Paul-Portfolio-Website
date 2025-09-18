// import styles from "./StoryViewer.module.css";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";
// import { Modal } from "@mantine/core";

// export default function StoryViewer({
//   stories,
//   opened,
//   onClose,
//   maxWidthPx = 600,
// }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [isPaused, setPaused] = useState(false);
//   const [isMuted, setMuted] = useState(true);
//   const [isHolding, setHolding] = useState(false);

//   const videoRef = useRef(null);
//   const progressIntervalRef = useRef();
//   const holdTimeoutRef = useRef();

//   const currentStory = stories[currentIndex];
//   const isLastStory = currentIndex === stories.length - 1;

//   // Get story duration (30s default for image/text, video duration for videos, max 60s)
//   const getStoryDuration = useCallback((story) => {
//     if (story.type === "video" && videoRef.current) {
//       return Math.min(videoRef.current.duration || 30, 60);
//     }
//     return 30;
//   }, []);

//   // Progress management
//   const startProgress = useCallback(() => {
//     if (isPaused || isHolding) return;

//     const duration = getStoryDuration(currentStory);
//     const increment = 100 / (duration * 10); // Update every 100ms

//     progressIntervalRef.current = setInterval(() => {
//       setProgress((prev) => {
//         const newProgress = prev + increment;
//         if (newProgress >= 100) {
//           // Auto advance to next story or close if last
//           if (isLastStory) {
//             onClose();
//           } else {
//             setCurrentIndex(currentIndex + 1);
//           }
//           return 0;
//         }
//         return newProgress;
//       });
//     }, 100);
//   }, [
//     currentStory,
//     currentIndex,
//     isLastStory,
//     isPaused,
//     isHolding,
//     getStoryDuration,
//     onClose,
//   ]);

//   const stopProgress = useCallback(() => {
//     if (progressIntervalRef.current) {
//       clearInterval(progressIntervalRef.current);
//     }
//   }, []);

//   const resetProgress = useCallback(() => {
//     setProgress(0);
//     stopProgress();
//   }, [stopProgress]);

//   // Navigation functions
//   const goToNext = useCallback(() => {
//     if (isLastStory) {
//       onClose();
//     } else {
//       setCurrentIndex(currentIndex + 1);
//       resetProgress();
//     }
//   }, [currentIndex, isLastStory, onClose, resetProgress]);

//   const goToPrevious = useCallback(() => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       resetProgress();
//     }
//   }, [currentIndex, resetProgress]);

//   // Touch/mouse handlers for tap navigation and hold to pause
//   const handlePointerDown = useCallback((e) => {
//     e.preventDefault();
//     setHolding(true);

//     // Set timeout for hold detection (300ms)
//     holdTimeoutRef.current = setTimeout(() => {
//       setPaused(true);
//     }, 300);
//   }, []);

//   const handlePointerUp = useCallback(
//     (e, side) => {
//       e.preventDefault();

//       if (holdTimeoutRef.current) {
//         clearTimeout(holdTimeoutRef.current);
//       }

//       // If was holding, just resume
//       if (isHolding && isPaused) {
//         setPaused(false);
//         setHolding(false);
//         return;
//       }

//       setHolding(false);

//       // Navigate based on side
//       if (side === "right") {
//         goToNext();
//       } else {
//         goToPrevious();
//       }
//     },
//     [isHolding, isPaused, goToNext, goToPrevious]
//   );

//   // Keyboard support
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       switch (e.key) {
//         case "ArrowRight":
//           goToNext();
//           break;
//         case "ArrowLeft":
//           goToPrevious();
//           break;
//         case "Escape":
//           onClose();
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [goToNext, goToPrevious, onClose]);

//   // Progress effect
//   useEffect(() => {
//     resetProgress();

//     // Start progress after a brief delay for video loading
//     const timeout = setTimeout(() => {
//       startProgress();
//     }, 100);

//     return () => {
//       clearTimeout(timeout);
//       stopProgress();
//     };
//   }, [currentIndex, startProgress, stopProgress, resetProgress]);

//   // Pause/resume effect
//   useEffect(() => {
//     if (isPaused || isHolding) {
//       stopProgress();
//     } else {
//       startProgress();
//     }
//   }, [isPaused, isHolding, startProgress, stopProgress]);

//   // Video handlers
//   const handleVideoLoadedMetadata = useCallback(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted;
//       videoRef.current.play();
//     }
//   }, [isMuted]);

//   const toggleMute = useCallback(() => {
//     setMuted(!isMuted);
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//     }
//   }, [isMuted]);

//   // Cleanup
//   useEffect(() => {
//     return () => {
//       stopProgress();
//       if (holdTimeoutRef.current) {
//         clearTimeout(holdTimeoutRef.current);
//       }
//     };
//   }, [stopProgress]);

//   return (
//     <Modal.Root
//       opened={opened}
//       onClose={onClose}
//       fullScreen
//       radius={0}
//       transitionProps={{ transition: "fade", duration: 200 }}
//     >
//       <Modal.Content>
//         {/* Story Container */}
//         <div
//           className={styles.container}
//           style={{ maxWidth: `${maxWidthPx}px` }}
//         >
//           {/* Progress Bars */}
//           <div className={styles.progressContainer}>
//             {stories.map((_, index) => (
//               <div key={index} className={styles.progressTrack}>
//                 <div
//                   className={styles.progressFill}
//                   style={{
//                     width:
//                       index < currentIndex
//                         ? "100%"
//                         : index === currentIndex
//                         ? `${progress}%`
//                         : "0%",
//                   }}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Close Button */}
//           <Modal.CloseButton className={styles.closeButton} />

//           {/* Mute/Unmute Button (only for videos) */}
//           {currentStory.type === "video" && (
//             <button onClick={toggleMute} className={styles.muteButton}>
//               {isMuted ? (
//                 <SpeakerSlash className="w-6 h-6" />
//               ) : (
//                 <SpeakerHigh className="w-6 h-6" />
//               )}
//             </button>
//           )}

//           {/* Navigation Areas */}
//           <div className={styles.navigation}>
//             {/* Left tap area */}
//             <div
//               className={styles.navArea}
//               onPointerDown={(e) => handlePointerDown(e, "left")}
//               onPointerUp={(e) => handlePointerUp(e, "left")}
//               onPointerLeave={() => {
//                 if (holdTimeoutRef.current) {
//                   clearTimeout(holdTimeoutRef.current);
//                 }
//                 setHolding(false);
//               }}
//             />

//             {/* Right tap area */}
//             <div
//               className={styles.navArea}
//               onPointerDown={(e) => handlePointerDown(e, "right")}
//               onPointerUp={(e) => handlePointerUp(e, "right")}
//               onPointerLeave={() => {
//                 if (holdTimeoutRef.current) {
//                   clearTimeout(holdTimeoutRef.current);
//                 }
//                 setHolding(false);
//               }}
//             />
//           </div>

//           {/* Story Content */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               className={styles.storyContent}
//             >
//               {currentStory.type === "image" && (
//                 <img
//                   src={currentStory.content || "/placeholder.svg"}
//                   alt={currentStory.altText || "Story image"}
//                   className={styles.storyImage}
//                 />
//               )}

//               {currentStory.type === "video" && (
//                 <video
//                   ref={videoRef}
//                   src={currentStory.content}
//                   poster={currentStory.poster}
//                   className={styles.storyVideo}
//                   autoPlay
//                   muted={isMuted}
//                   playsInline
//                   onLoadedMetadata={handleVideoLoadedMetadata}
//                   onEnded={goToNext}
//                   aria-label={currentStory.altText || "Story video"}
//                 />
//               )}

//               {currentStory.type === "text" && (
//                 <div
//                   className={styles.storyTextWrapper}
//                   style={{
//                     backgroundColor: currentStory.backgroundColor || "#1f2937",
//                     color: currentStory.textColor || "#ffffff",
//                   }}
//                 >
//                   <p className={styles.storyText}>{currentStory.content}</p>
//                 </div>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </Modal.Content>
//     </Modal.Root>
//   );
// }

import styles from "./StoryViewer.module.css";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";
import { Modal } from "@mantine/core";

// export interface Story {
//   id: string
//   type: "text" | "image"
//   content: string
//   backgroundColor?: string
//   textColor?: string
//   caption?: string
//   altText?: string
// }

// interface StoryViewerProps {
//   stories: Story[]
//   opened: boolean
//   onClose: () => void
//   maxWidthPx?: number
// }

export default function StoryViewer({ stories, opened, onClose, maxWidthPx = 500 }) {
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleHoldEnd}
          >
            {/* Progress Bars */}
            <div className={styles.progressContainer}>
              {stories.map((_, index) => (
                <div
                  key={index}
                  className={styles.progressTrack}
                >
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

            {/* Desktop Navigation Icons */}
            {/* <div className={styles.leftNavWrapper}>
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className={cn(
                  styles.navButton,
                  currentIndex === 0
                    ? styles.navDisabled
                    : styles.navActive
                )}
              >
                <ChevronLeft size={32} />
              </button>
            </div>

            <div className={styles.rightNavWrapper}>
              <button
                onClick={goToNext}
                className={cn(styles.navButton, styles.navActive)}
              >
                <ChevronRight size={32} />
              </button>
            </div> */}

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
                      <p className={styles.storyText}>
                        {currentStory.content}
                      </p>
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
            {/* {(isPaused || isHolding) && (
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div className="bg-black/50 rounded-full p-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="flex gap-1">
                      <div className="w-1 h-6 bg-white rounded-full" />
                      <div className="w-1 h-6 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </Modal.Content>
      </Modal.Root>
    </AnimatePresence>
  );
}

