import { Box, Image } from "@mantine/core";

const CarouselImage = ({ src }) => {
  return (
    <Box h={{ base: 200, sm: 300, lg: 400 }}>
      <Image
        radius="md"
        src={src}
        h={"100%"}
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      />
    </Box>
  );
};

export default CarouselImage;
