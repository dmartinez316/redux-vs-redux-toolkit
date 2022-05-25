import { client } from "../../api/client";
import { todoLoading, todosLoaded } from "../actions";

const todoInitialState = {
  todos: undefined,
  state: "idle",
};

// Thunk function
export function fetchTodos() {
  // And then creates and returns the async thunk function:
  return async (dispatch) => {
    dispatch(todoLoading);
    const response = await client.get("/fakeApi/todos");
    dispatch(todosLoaded(response.todos));
  };
}

const todoReducer = (state = todoInitialState, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counterRedux/todoLoading":
      return { ...state, state: "loading" };
    case "counterRedux/todosLoaded":
      return { ...state, todos: action.payload, state: "idle" };
    default:
      return state;
  }
};

export default todoReducer;
