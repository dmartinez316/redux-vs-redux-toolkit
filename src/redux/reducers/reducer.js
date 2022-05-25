import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import tabReducer from "./tabReducer";
import listReducer from "./listReducer";
import personReducer from "./personReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  tab: tabReducer,
  list: listReducer,
  person: personReducer,
  todos: todoReducer,
});

export default rootReducer;
