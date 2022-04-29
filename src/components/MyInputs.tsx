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
import React, { useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { circleState, selectedIdState, squareState } from "../store/app.store";

const defaultProperties = {
  color: "#000000",
  scale: 100,
};

function MyInputs() {
  const [square, setSquare] = useRecoilState(squareState);
  const [circle, setCircle] = useRecoilState(circleState);

  const selectedId = useRecoilValue(selectedIdState);

  const { color, scale } = useMemo(() => {
    const properties = [square, circle];

    return properties.find(({ id }) => id === selectedId) ?? defaultProperties;
  }, [square, circle, selectedId]);

  function setProperties(color: string, scale: number) {
    const properties = [square, circle];

    const selectedProperty = properties.find(({ id }) => id === selectedId);

    if (selectedProperty) {
      if (selectedProperty.id === square.id) {
        setSquare({ ...selectedProperty, color, scale });
      } else {
        setCircle({ ...selectedProperty, color, scale });
      }
    }
  }

  return (
    <Box
      rounded={5}
      padding={5}
      alignContent="center"
      bg="gray.200"
      position="absolute"
      zIndex={10}
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
              setProperties(e.target.value, scale);
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
            setProperties(color, e);
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
