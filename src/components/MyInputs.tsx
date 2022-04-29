import {
  Box,
  Flex,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function MyInputs({
  color,
  setColor,
  scale,
  setScale,
}: {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  scale: number;
  setScale: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Box
      rounded={5}
      padding={5}
      alignContent="center"
      bg="gray.200"
      position="absolute"
    >
      <Stack spacing={4} align="stretch">
        {/* Color Input */}
        <Flex>
          <Text w={40} color="black.500">
            Color {color}
          </Text>

          <Input
            marginLeft={10}
            aria-label="color"
            minW={100}
            size="lg"
            type="color"
            border="none"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </Flex>

        {/* Scale input */}
        <Text color="black.500">Scale {scale} </Text>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={30}
          onChange={(e) => {
            setScale(e);
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Stack>
    </Box>
  );
}

export default MyInputs;
