import { Container } from "@chakra-ui/react";
import MyInputs from "./components/MyInputs";
import Shapes from "./components/Canvas";

function App() {
  return (
    <Container padding={10} minW="full" minH="100vh" bg="white">
      <MyInputs />
      <Shapes />
    </Container>
  );
}

export default App;
