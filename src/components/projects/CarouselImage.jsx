import { Box, Image } from "@mantine/core";

const CarouselImage = ({ src }) => {
  return (
    <Box h={{ base: 200, sm: 300, lg: 400 }}>
      <Image
        radius="md"
        src={src}
        h={"100%"}
        loading="lazy"
        fallbackSrc="https://placehold.co/600x400?text=Image"
      />
    </Box>
  );
};

export default CarouselImage;
