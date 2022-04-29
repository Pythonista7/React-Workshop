import { Container } from "@chakra-ui/react";
import MyInputs from "./components/MyInputs";
import Canvas from "./components/Canvas";

export interface ShapeProperties {
  id: string;
  color: string;
  scale: number;
}

function App() {
  return (
    <Container padding={10} minW="full" minH="100vh" bg="white">
      <MyInputs />
      <Canvas />
    </Container>
  );
}

export default App;
