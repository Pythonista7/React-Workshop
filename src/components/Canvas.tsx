import { Box } from "@chakra-ui/react";
import { Circle as KonvaCircle, Layer, Rect, Stage } from "react-konva";
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { circleState, selectedIdState, squareState } from "../store/app.store";

function Square() {
  const square = useRecoilValue(squareState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  return (
    <>
      <Rect
        id="square-select"
        x={window.innerWidth / 1.5 - 5}
        y={window.innerHeight / 2 - 5}
        offsetX={1.5}
        offsetY={1.5}
        width={3.1}
        height={3.1}
        fill="#ffffff"
        scaleX={square.scale}
        scaleY={square.scale}
        stroke={selectedId === square.id ? "#3182CE" : "transparent"}
        strokeWidth={0.025}
        onClick={() => {
          setSelectedId(square.id);
        }}
      />
      <Rect
        x={window.innerWidth / 1.5}
        y={window.innerHeight / 2}
        offsetX={1.5}
        offsetY={1.5}
        width={3}
        height={3}
        fill={square.color}
        scaleX={square.scale}
        scaleY={square.scale}
        onClick={() => {
          setSelectedId(square.id);
        }}
      />
    </>
  );
}

function Circle() {
  const circle = useRecoilValue(circleState);
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

  return (
    <>
      <KonvaCircle
        id="circle-select"
        x={window.innerWidth / 3}
        y={window.innerHeight / 2}
        radius={1.55}
        fill="#ffffff"
        scaleX={circle.scale}
        scaleY={circle.scale}
        stroke={selectedId === circle.id ? "#3182CE" : "transparent"}
        strokeWidth={0.025}
        onClick={() => {
          setSelectedId(circle.id);
        }}
      />
      <KonvaCircle
        x={window.innerWidth / 3}
        y={window.innerHeight / 2}
        radius={1.5}
        fill={circle.color}
        scaleX={circle.scale}
        scaleY={circle.scale}
        onClick={() => {
          setSelectedId(circle.id);
        }}
      />
    </>
  );
}

function Shapes() {
  const Bridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <Box w="full" h="full">
      <Stage
        height={window.innerHeight - window.innerHeight * 0.1}
        width={window.innerWidth}
      >
        <Bridge>
          <Layer>
            <Square />
            <Circle />
          </Layer>
        </Bridge>
      </Stage>
    </Box>
  );
}

export default Shapes;
