import React, { useState } from "react";
import "./App.css";
import R3FScene from "./components/R3FScene";
import LeftPane from "./LeftPane";
import { Geometries } from "./Utils/Utlities";
function App() {
  const [CurrentObject, setObject] = useState(Geometries.NONE);
  function setNewObject(newObject) {
    setObject(newObject);
  }
  return (
    <div className="App">
      <LeftPane setNewObject={setNewObject} />
      <div className="Rightpane">
        <R3FScene displayObject={CurrentObject} />
      </div>
    </div>
  );
}

export default App;
