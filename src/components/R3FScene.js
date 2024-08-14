import { Canvas, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import MyScene from "./MyScene";

export default function R3FScene({ displayObject }) {
  return (
    <Canvas>
      <MyScene displayObject={displayObject} />
    </Canvas>
  );
}
