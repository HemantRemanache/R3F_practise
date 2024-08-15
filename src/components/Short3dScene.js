import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Short3dScene({ campos,camtarget }) {
    const {camera}=useThree();
    camera.position.copy(campos)
    console.log('campos',campos)
    camera.lookAt(camtarget)
    console.log('camtarget',camtarget)
    useFrame(() => {
        camera.position.copy(campos);
        camera.lookAt(camtarget);
        camera.updateProjectionMatrix(); // This ensures the camera's matrix is recalculated
      });
  return (
    <>
      <axesHelper args={[3]} />
    </>
  );
}
