import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: undefined,
};

export const tabSlice = createSlice({
  name: "counterRTK",
  initialState,
  reducers: {
    changeActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActiveTab } = tabSlice.actions;

export default tabSlice.reducer;
