import { Box } from "@chakra-ui/react";
import "./Shapes.css";

function Shapes(props: any) {
  const circleStyle: React.CSSProperties = {
    height: "100px",
    width: "100px",
    backgroundColor: "blue",
    position: "absolute",
    borderRadius: "50%",
    top: "50%",
    left: "60%",
  };

  const squareStyle: React.CSSProperties = {
    height: "100px",
    width: "100px",
    backgroundColor: "blue",
    position: "absolute",
    top: "50%",
    left: "40%",
  };

  return (
    <Box bg={"black"} minW="500px" minH="500px">
      <div style={circleStyle}></div>
      <div style={squareStyle}></div>
    </Box>
  );
}

export default Shapes;
