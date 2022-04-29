import "./App.css";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";

import MyInputs from "./components/MyInputs";
import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Container
        padding={10}
        minW="full"
        minH="full"
        bg="gray.400"
        centerContent={true}
      >
        <Grid h="auto" templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem rowSpan={2} colSpan={1}>
            <MyInputs />
          </GridItem>
          <GridItem rowSpan={2} colSpan={4}>
            <Heading color="black" alignContent={"center"}>
              Canvas
            </Heading>
            <Box bg={"black"} minW="500px" minH="500px"></Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
