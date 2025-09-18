import { ActionIcon, Tooltip } from "@mantine/core";
import { UserCircle } from "@phosphor-icons/react";
import { randomId, useDisclosure } from "@mantine/hooks";
import StoryViewer from "./StoryViewer";

// Sample stories array
const sampleStories = [
  {
    id: randomId(),
    type: "text",
    content: "Welcome to my amazing story experience! 🎉",
    backgroundColor: "#4a4decff",
    textColor: "#ffffff",
  },
  {
    id: randomId(),
    type: "image",
    content: "/serene-mountain-landscape-with-clouds.jpg",
    caption: "City lights at night are magical ✨",
    altText: "Modern city skyline at night with illuminated buildings",
  },
  {
    id: randomId(),
    type: "text",
    content: "I am still working on it! 😁",
    backgroundColor: "#38c233ff",
    textColor: "#ffffff",
  },
  {
    id: randomId(),
    type: "image",
    content: "/serene-mountain-landscape-with-clouds.jpg",
    caption: "City lights at night are magical ✨",
    altText: "Modern city skyline at night with illuminated buildings",
  },
  {
    id: randomId(),
    type: "text",
    content: "Thanks for watching my stories! ✨",
    backgroundColor: "#ff0080ff",
    textColor: "#ffffff",
  },
  {
    id: randomId(),
    type: "image",
    content: "/serene-mountain-landscape-with-clouds.jpg",
    caption: "City lights at night are magical ✨",
    altText: "Modern city skyline at night with illuminated buildings",
  },
];

// public\story\peaceful-forest-with-soft-sunlight.jpg
// public\story\peaceful-lavender-field-in-bloom.jpg
// public\story\serene-mountain-landscape-with-clouds.jpg

export default function StoryButton() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      {/* Story Button */}
      <Tooltip label="My Stories" position="bottom-start">
        <ActionIcon
          onClick={open}
          size="lg"
          radius="xl"
          aria-label="View My Stories Button"
        >
          <UserCircle size={24} />
        </ActionIcon>
      </Tooltip>

      {/* Story Viewer Modal */}
      {/* <AnimatePresence>
        {opened && (
          <StoryViewer
            stories={sampleStories}
            opened={opened}
            onClose={close}
            maxWidthPx={600}
          />
        )}
      </AnimatePresence> */}
      <StoryViewer
        stories={sampleStories}
        opened={opened}
        onClose={close}
        maxWidthPx={500}
      />
    </>
  );
}
