import { applyMiddleware, createStore } from "redux";
import ListReducer from "./reducer/ListReducer";
import { thunk } from "redux-thunk";

const store = createStore(ListReducer, applyMiddleware(thunk));
export default store;
