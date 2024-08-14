import React from "react";
import { useSelector } from "react-redux";
import { Geometries } from "../Utils/Utlities";
import Cone from "./Cone";
import Cube from "./Cube";
import Sphere from "./Sphere";

function RenderGeometries({ displayObject }) {
  console.log(displayObject);
  const { WireFrame } = useSelector((state) => state);
  console.log("WireFrame", WireFrame);
  switch (displayObject) {
    case Geometries.SPHERE: {
      return <Sphere WireFrame={WireFrame} />;
    }
    case Geometries.CUBE: {
      return <Cube WireFrame={WireFrame} />;
    }
    case Geometries.PYRAMID:
    case Geometries.CONE: {
      return <Cone displayObject={displayObject} WireFrame={WireFrame} />;
    }
    default: {
      return <></>;
    }
  }
}

export default RenderGeometries;
