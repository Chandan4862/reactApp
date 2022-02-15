import { combineReducers } from "redux";
import inc from "./increment";
import dec from "./decrement";
import {incCounter} from "./increment";
import {decCounter} from "./decrement"; 
import global, {globalCounter} from "./globalCounter";


let rootReducer = combineReducers({
  inc,
  dec,
  global
});
/********************************************************************************************/
export const getIncOneCounter = (state)=> incCounter.getOneCounter(state.inc);//state.inc where inc is reducer name
export const getDecOneCounter = (state)=> decCounter.getOneCounter(state.dec);
export const getIncTwoCounter = (state)=> incCounter.getTwoCounter(state.inc);
export const getDecTwoCounter = (state)=> decCounter.getTwoCounter(state.dec);
export const getGloabalCounter = (state)=> globalCounter.getGloabalCounter(state.global)
/********************************************************************************************/

export default rootReducer;
