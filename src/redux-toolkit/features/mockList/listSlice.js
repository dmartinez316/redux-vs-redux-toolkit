import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Mock List",
  elements: ["Element 1", "Element 2", "Element 3"],
};

export const listSlice = createSlice({
  name: "counterRTK",
  initialState,
  reducers: {},
});

export default listSlice.reducer;
