import { combineReducers } from "redux";
import { counterReducer } from "./counter.reduce";

export const rootReducer = combineReducers({
    counter: counterReducer,
})