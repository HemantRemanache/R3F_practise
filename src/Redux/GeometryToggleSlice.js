import { createSlice } from "@reduxjs/toolkit";

const GeometryToggleSlice = createSlice({
  name: "WireFrame",
  initialState: {
    WireFrame: false,
  },
  reducers: {
    SetWireFrame: (state, param) => {
      const { payload } = param;
      state.WireFrame = payload;
    },
  },
});

const { actions, reducer } = GeometryToggleSlice;
export const { SetWireFrame } = actions;
export default reducer;
