import { PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three';
import Short3dScene from './Short3dScene.js';
export default function AxisTriadScene({ campos,camtarget }) {
  return (
    <Canvas>
      <Short3dScene campos={campos} camtarget={camtarget}/>
    </Canvas>
  );
}
