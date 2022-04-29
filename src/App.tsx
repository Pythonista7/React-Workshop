import { Container } from "@chakra-ui/react";
import MyInputs from "./components/MyInputs";
import Shapes from "./components/Canvas";
import { useState } from "react";

function App() {
  const [color, setColor] = useState<string>("#000000");
  const [scale, setScale] = useState<number>(30);

  return (
    <Container padding={10} minW="full" minH="100vh" bg="white">
      <MyInputs
        color={color}
        setColor={setColor}
        scale={scale}
        setScale={setScale}
      />
      <Shapes color={color} scale={scale} />
    </Container>
  );
}

export default App;
