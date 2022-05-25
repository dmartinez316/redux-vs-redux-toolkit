import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counterRTK",
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
    // incrementedTwo: (state) => {
    //   state.value += 2;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { incremented, decremented, incrementedTwo } =
  counterSlice.actions;

export default counterSlice.reducer;
