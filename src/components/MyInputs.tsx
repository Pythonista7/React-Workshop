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
// import { useEffect, useState } from "react";

function MyInputs(props: any) {
  const color = "#000000";
  const scale = "30";

  return (
    <>
      <Box rounded={5} padding={5} alignContent="center" bg="gray.200">
        <Stack spacing={4} align="stretch">
          <Flex>
            <Text color="black.500">Color {color}</Text>

            <Input
              marginLeft={10}
              aria-label="color"
              minW={100}
              size="lg"
              type="color"
              border="none"
              onChange={(e) => {
                console.log("color");
                console.log(e.target.value);
              }}
            />
          </Flex>
          <Text color="black.500">Scale {scale} </Text>

          <Slider
            aria-label="slider-ex-1"
            defaultValue={30}
            onChange={(e) => {
              console.log("scale");
              console.log(e);
            }}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Stack>
      </Box>
    </>
  );
}

export default MyInputs;

/*
  const [color, setColor] = useState<string>("#000000");
  const [scale, setScale] = useState<number>(30);

  useEffect(() => {
    console.log("color = ", color);
    console.log("scale = ", scale);
  }, [color, scale]);
*/
