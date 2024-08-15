import { configureStore } from "@reduxjs/toolkit";
import reducer from "./GeometryToggleSlice";

const storeConfig = {
  reducer: reducer,
};

export const store = configureStore(storeConfig);
