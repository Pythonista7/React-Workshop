import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Container, Heading } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Container minW="full" minH="full" bg="blue.600" centerContent>
        <Heading>Cool Stuff!</Heading>
        <Box
          margin="5"
          padding="4"
          bg="blue.300"
          color="black"
          minW="2xl"
          minH="xl"
        >
          Blank
        </Box>
        <Button colorScheme="blackAlpha" padding="5" margin="5">
          Done
        </Button>
      </Container>
    </div>
  );
}

export default App;
