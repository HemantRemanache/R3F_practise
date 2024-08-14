import React, { useRef } from "react";
import { MeshStandardMaterial, SphereGeometry } from "three";

function Sphere({WireFrame}) {
    const meshRef=useRef();
  return (
   <mesh ref={meshRef}>        
        <sphereGeometry args={[1,32,32]}/>
        <meshStandardMaterial color='red' wireframe={WireFrame}/>
   </mesh>
  )
}

export default Sphere

