import { combineReducers } from "redux";
import inc from "./increment";
import dec from "./decrement";
import {incCounter} from "./increment";
import {decCounter} from "./decrement"; 


let rootReducer = combineReducers({
  inc,
  dec,
});
/********************************************************************************************/
export const getIncOneCounter = (state)=> incCounter.getOneCounter(state.inc);
export const getDecOneCounter = (state)=> decCounter.getOneCounter(state.dec);
export const getIncTwoCounter = (state)=> incCounter.getTwoCounter(state.inc);
export const getDecTwoCounter = (state)=> decCounter.getTwoCounter(state.dec);
/********************************************************************************************/

export default rootReducer;
