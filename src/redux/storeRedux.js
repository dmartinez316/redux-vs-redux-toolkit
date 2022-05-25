import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/reducer.js";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const storeRedux = createStore(rootReducer, composedEnhancer);

export default storeRedux;
