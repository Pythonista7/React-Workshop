import { Container } from "@chakra-ui/react";
import MyInputs from "./components/MyInputs";
import Canvas from "./components/Canvas";
import { useState } from "react";

export interface ShapeProperties {
  id: string;
  color: string;
  scale: number;
}

function App() {
  const [selectedId, setSelectedId] = useState<string | null>("square");

  const [properties, setProperties] = useState<ShapeProperties[]>([
    {
      id: "square",
      color: "#000000",
      scale: 100,
    },
    {
      id: "circle",
      color: "#000000",
      scale: 100,
    },
  ]);

  return (
    <Container padding={10} minW="full" minH="100vh" bg="white">
      <MyInputs
        properties={properties}
        setProperties={setProperties}
        selectedId={selectedId}
      />
      <Canvas
        properties={properties}
        setSelectedId={setSelectedId}
        selectedId={selectedId}
      />
    </Container>
  );
}

export default App;
