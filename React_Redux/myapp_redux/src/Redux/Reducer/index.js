import { combineReducers } from "redux";
import { DataReducer } from "./DataReducer";
const reducer = combineReducers({ allProducts: DataReducer });

export default reducer;
