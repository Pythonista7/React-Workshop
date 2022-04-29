import { Box } from "@chakra-ui/react";

function Shapes({ color, scale }: { color: string; scale: number }) {
  return (
    <Box w="full" h="full">
      <Box
        position="absolute"
        top="50%"
        left="60%"
        height={100}
        width={100}
        backgroundColor={color}
        transform={`scale(${scale / 100})`}
      />
      <Box
        position="absolute"
        top="50%"
        left="40%"
        width={100}
        height={100}
        borderRadius="50%"
        backgroundColor={color}
        transform={`scale(${scale / 100})`}
      />
    </Box>
  );
}

export default Shapes;
