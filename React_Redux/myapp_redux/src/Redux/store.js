import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducer/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const store = createStore(reducer, applyMiddleware(...middleWare));
export default store;
