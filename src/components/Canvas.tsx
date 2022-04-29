import { Box } from "@chakra-ui/react";

function Shapes() {
  return (
    <Box w="full" h="full">
      <Box
        position="absolute"
        top="50%"
        left="60%"
        height={100}
        width={100}
        backgroundColor="blue.500"
      />
      <Box
        position="absolute"
        top="50%"
        left="40%"
        height={100}
        width={100}
        borderRadius="50%"
        backgroundColor="blue.500"
      />
    </Box>
  );
}

export default Shapes;
