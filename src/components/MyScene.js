import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import RenderGeometries from "./RenderGeometries.js";
export default function MyScene({
  displayObject,
  setCameraPosition,
  setCameraTarget,
}) {
  const OrbitControlref = useRef();

  const {  camera } = useThree();
  function postCamposition(event) {
    if (!event) 
      return 
      setCameraPosition(event.target.object.position);
    setCameraTarget(event.target.target);
  }
  return (
    <>
      <OrbitControls
        ref={OrbitControlref}
        camera={camera}
        onChange={postCamposition}
      />
      <ambientLight intensity={Math.PI / 2} />
      <RenderGeometries displayObject={displayObject} />
    </>
  );
}
