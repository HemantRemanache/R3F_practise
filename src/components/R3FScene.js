import { Canvas, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { AxesHelper, Vector3 } from "three";
import "../App.css";
import AxisTriadScene from "./AxisTriadScene";
import MyScene from "./MyScene";
export default function R3FScene({ displayObject }) {
  const [campos,setcampos]=useState(new Vector3());
  const [camtarget,setcamtarget]=useState(new Vector3());
  function setCameraPosition(cameraposition){
    console.log('cameraposition',cameraposition)
    setcampos(cameraposition)
  }
  function setCameraTarget(cameratarget){
    console.log('cameratarget',cameratarget)
    setcamtarget(cameratarget)
  }
  return (
    <>
      <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
        <MyScene displayObject={displayObject} setCameraPosition={setCameraPosition} setCameraTarget={setCameraTarget} />
      </Canvas>
      <div className="smallCanvas">
        <AxisTriadScene campos={campos} camtarget={camtarget}/>
      </div>
    </>
  );
}
