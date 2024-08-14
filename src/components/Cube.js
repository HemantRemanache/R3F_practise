import React, { useRef } from "react";
import { boxGeometry } from "three";

export default function Cube({ WireFrame }) {
  const meshref = useRef();
  return (
    <mesh ref={meshref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" wireframe={WireFrame} />
    </mesh>
  );
}
