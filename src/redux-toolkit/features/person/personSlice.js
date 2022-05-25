import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Bob",
  lastName: "Rodriguez",
  age: "26",
  status: "safe",
};

export const personSlice = createSlice({
  name: "counterRTK",
  initialState,
  reducers: {
    changePersonStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePersonStatus } = personSlice.actions;

export default personSlice.reducer;
