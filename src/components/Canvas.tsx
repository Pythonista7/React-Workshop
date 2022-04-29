import { Box } from "@chakra-ui/react";
import { ShapeProperties } from "../App";

function Square({
  properties,
  setSelectedId,
  selectedId,
}: {
  properties: ShapeProperties[];
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedId: string | null;
}) {
  return (
    <Box
      position="absolute"
      top="40%"
      left="60%"
      height={300}
      width={300}
      backgroundColor={properties[0].color}
      transform={`scale(${properties[0].scale / 100})`}
      ringColor={selectedId === properties[0].id ? "blue.500" : "transparent"}
      ringOffset="5px"
      ring="2px"
      cursor="pointer"
      onClick={() => {
        setSelectedId(properties[0].id);
      }}
    />
  );
}

function Circle({
  properties,
  setSelectedId,
  selectedId,
}: {
  properties: ShapeProperties[];
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedId: string | null;
}) {
  return (
    <Box
      position="absolute"
      top="40%"
      left="20%"
      width={300}
      height={300}
      borderRadius="50%"
      backgroundColor={properties[1].color}
      transform={`scale(${properties[1].scale / 100})`}
      ringColor={selectedId === properties[1].id ? "blue.500" : "transparent"}
      ringOffset="5px"
      ring="2px"
      cursor="pointer"
      onClick={() => {
        setSelectedId(properties[1].id);
      }}
    />
  );
}

function Shapes({
  properties,
  setSelectedId,
  selectedId,
}: {
  properties: ShapeProperties[];
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedId: string | null;
}) {
  return (
    <Box w="full" h="full">
      <Square
        properties={properties}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
      />
      <Circle
        properties={properties}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
      />
    </Box>
  );
}

export default Shapes;
