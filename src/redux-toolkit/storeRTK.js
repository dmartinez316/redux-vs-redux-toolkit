import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import personReducer from "./features/person/personSlice";
import mockListReducer from "./features/mockList/listSlice";
import tabReducer from "./features/tab/tabSlice";
import todosReducer from "./features/todo/todoSlice";

export const storeRTK = configureStore({
  reducer: {
    counter: counterReducer,
    person: personReducer,
    list: mockListReducer,
    tab: tabReducer,
    todos: todosReducer,
  },
});
