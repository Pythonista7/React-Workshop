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
import { ShapeProperties } from "../App";

function MyInputs({
  properties,
  setProperties,
  selectedId,
}: {
  properties: ShapeProperties[];
  setProperties: React.Dispatch<React.SetStateAction<ShapeProperties[]>>;
  selectedId: string | null;
}) {
  const { color, scale } = properties.find(({ id }) => id === selectedId) ?? {
    color: "#000000",
    shape: 30,
  };

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
            value={color}
            onChange={(e) => {
              setProperties((prev) =>
                prev.map((p) =>
                  p.id === selectedId ? { ...p, color: e.target.value } : p
                )
              );
            }}
          />
        </Flex>

        {/* Scale input */}
        <Text color="black.500">Scale {scale} </Text>
        <Slider
          aria-label="slider-ex-1"
          defaultValue={100}
          value={scale}
          onChange={(e) => {
            setProperties((prev) =>
              prev.map((p) => (p.id === selectedId ? { ...p, scale: e } : p))
            );
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
