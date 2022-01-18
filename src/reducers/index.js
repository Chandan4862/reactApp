import { combineReducers } from "redux";
import wheatherReducer from "./wheatherReducer";
import errorReducer from "./errorReducer"

let rootReducer = combineReducers({
    wheather: wheatherReducer,
    error: errorReducer
});

export default rootReducer;
