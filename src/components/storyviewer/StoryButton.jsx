import { useState } from "react";
import { AnimatePresence } from "motion/react";
import StoryViewer from "./StoryViewer";
import { ActionIcon, Tooltip } from "@mantine/core";
import { UserCircle } from "@phosphor-icons/react";
import { useDisclosure } from "@mantine/hooks";

// Sample stories array
const sampleStories = [
  {
    id: "1",
    type: "text",
    content: "Welcome to my amazing story experience! 🎉",
    backgroundColor: "#0004ffff",
    textColor: "#ffffff",
    duration: 30,
  },
  {
    id: "2",
    type: "text",
    content: "I am still working on it! 😁",
    backgroundColor: "#09ff00ff",
    textColor: "#ffffff",
    duration: 30,
  },
  {
    id: "3",
    type: "text",
    content: "Thanks for watching my stories! ✨",
    backgroundColor: "#ff0080ff",
    textColor: "#ffffff",
    duration: 30,
  },
  //   {
  //     id: "4",
  //     type: "image",
  //     content: "/beautiful-landscape-sunset.jpg",
  //     duration: 30,
  //     altText: "Beautiful landscape with golden sunset over mountains and lake",
  //   },
  //   {
  //     id: "5",
  //     type: "video",
  //     content:
  //       "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  //     poster: "/video-poster-big-buck-bunny.jpg",
  //     duration: 60,
  //     altText: "Big Buck Bunny animated short film featuring a large rabbit",
  //   },
  //   {
  //     id: "6",
  //     type: "image",
  //     content: "/modern-city-skyline-night.png",
  //     duration: 30,
  //     altText: "Modern city skyline at night with illuminated skyscrapers",
  //   },
];

export default function StoryButton() {
  const [opened, { open, close }] = useDisclosure(false);
  //   const [showStories, setShowStories] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openStories = (index = 0) => {
    setStartIndex(index);
    open();
  };

  return (
    <>
      {/* Story Button */}
      <Tooltip label="View My Stories" position="bottom-start">
        <ActionIcon
          onClick={() => openStories(0)}
          size="lg"
          radius="xl"
          aria-label="View My Stories Button"
        >
          <UserCircle size={24} />
        </ActionIcon>
      </Tooltip>

      {/* Story Viewer Modal */}
      <AnimatePresence>
        {opened && (
          <StoryViewer
            stories={sampleStories}
            initialIndex={startIndex}
            opened={opened}
            onClose={close}
            maxWidthPx={600}
          />
        )}
      </AnimatePresence>
    </>
  );
}
