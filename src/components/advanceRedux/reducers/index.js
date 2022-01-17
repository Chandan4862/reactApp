import { combineReducers } from "redux";
import incrementReducer from "./incrementReducer";
import decrementReducer from "./decrementReducer";
import wheatherReducer from "./wheatherReducer";

let rootReducer = combineReducers({
    increment : incrementReducer,
    decrement: decrementReducer,
    wheather: wheatherReducer
});

export default rootReducer;
