import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SetWireFrame } from "../Redux/GeometryToggleSlice.js";

export default function ToggleBtn() {
  const [selected, setSelected] = useState(false);
  let checked = false;
  const dispatch = useDispatch();
  return (
    <ToggleButton
      value="check"
      selected={checked}
      onChange={() => {
        setSelected(!checked);
        dispatch(SetWireFrame(!checked));
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
