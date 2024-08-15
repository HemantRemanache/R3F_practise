import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetWireFrame } from "../Redux/GeometryToggleSlice.js";

export default function ToggleBtn() {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        dispatch(SetWireFrame(!selected));
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
