import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import RenderGeometries from "./RenderGeometries.js";
export default function MyScene({ displayObject }) {
  const OrbitControlref = useRef();
  const { scene, camera } = useThree();
  return (
    <>
      <OrbitControls ref={OrbitControlref} camera={camera} />
      <ambientLight intensity={Math.PI / 2} />
      <RenderGeometries displayObject={displayObject} />
    </>
  );
}
