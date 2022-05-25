import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../../api/client";

const initialState = {
  todos: undefined,
  state: "idle",
};

export const fetchTodos = createAsyncThunk(
  "counterRTK/fetchTodos",
  async () => {
    const response = await client.get("/fakeApi/todos");
    return response.todos;
  }
);

export const todoSlice = createSlice({
  name: "counterRTK",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.state = "idle";
        state.todos = action.payload;
      });
  },
});

export default todoSlice.reducer;
