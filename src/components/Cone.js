import React, { useRef } from "react";
import { Geometries } from "../Utils/Utlities";

export default function Cone({ displayObject, WireFrame }) {
  const edges = Geometries.CONE === displayObject ? 32 : 4;
  console.log("edges", edges);
  const meshref = useRef();
  return (
    <mesh ref={meshref}>
      <coneGeometry args={[2, 5, edges]} />
      <shaderMaterial color="red" wireframe={WireFrame} />
    </mesh>
  );
}
