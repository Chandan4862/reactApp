import { combineReducers } from "redux";
import incrementReducer from "./incrementReducer";
import decrementReducer from "./decrementReducer";

let rootReducer = combineReducers({
    increment : incrementReducer,
    decrement: decrementReducer,
});

export default rootReducer;
