import React from "react";
import { Geometries } from "./Utils/Utlities";
import ToggleBtn from "./components/ToggleBtn";
export default function LeftPane({ setNewObject }) {
  return (
    <div className="Leftpane">
      <div className="buttonGroup">
        <div className="buttondiv">
          <button onClick={() => setNewObject(Geometries.CUBE)}>Cube</button>
        </div>
        <div className="buttondiv">
          <button onClick={() => setNewObject(Geometries.SPHERE)}>
            Sphere
          </button>
        </div>
        <div className="buttondiv">
          <button onClick={() => setNewObject(Geometries.CONE)}>Cone</button>
        </div>
        <div className="buttondiv">
          <button onClick={() => setNewObject(Geometries.PYRAMID)}>
            Pyramid
          </button>
        </div>
      </div>
      <div>
        <ToggleBtn />
      </div>
    </div>
  );
}
