import { Box } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { circleState, selectedIdState, squareState } from "../store/app.store";

function Square() {
  const square = useRecoilValue(squareState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  return (
    <Box
      position="absolute"
      top="40%"
      left="60%"
      height={300}
      width={300}
      backgroundColor={square.color}
      transform={`scale(${square.scale / 100})`}
      ringColor={selectedId === square.id ? "blue.500" : "transparent"}
      ringOffset="5px"
      ring="2px"
      cursor="pointer"
      onClick={() => {
        setSelectedId(square.id);
      }}
    />
  );
}

function Circle() {
  const circle = useRecoilValue(circleState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  return (
    <Box
      position="absolute"
      top="40%"
      left="20%"
      width={300}
      height={300}
      borderRadius="50%"
      backgroundColor={circle.color}
      transform={`scale(${circle.scale / 100})`}
      ringColor={selectedId === circle.id ? "blue.500" : "transparent"}
      ringOffset="5px"
      ring="2px"
      cursor="pointer"
      onClick={() => {
        setSelectedId(circle.id);
      }}
    />
  );
}

function Shapes() {
  return (
    <Box w="full" h="full">
      <Square />
      <Circle />
    </Box>
  );
}

export default Shapes;
