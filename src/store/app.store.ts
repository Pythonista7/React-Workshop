import { atom } from "recoil";
import { ShapeProperties } from "../App";

const selectedIdState = atom<string>({
  key: "selectedId",
  default: "square",
});

const squareState = atom<ShapeProperties>({
  key: "squareProperties",
  default: {
    id: "square",
    color: "#000000",
    scale: 100,
  },
});

const circleState = atom<ShapeProperties>({
  key: "circleProperties",
  default: {
    id: "circle",
    color: "#000000",
    scale: 100,
  },
});

export { selectedIdState, squareState, circleState };
