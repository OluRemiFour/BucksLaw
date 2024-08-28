// "use client";
import contextSlice from "./components/contextSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    contextSlice: contextSlice,
  },
});

export default store;
