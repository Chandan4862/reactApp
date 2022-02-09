import { combineReducers } from "redux";
/********************************************************************************************/
const getOneCounter = (state) => {
    return state.decByOne.counter
}
/********************************************************************************************/
const getTwoCounter = (state) => {
    return state.decByTwo.counter
}
/********************************************************************************************/

export const decCounter = {
    getOneCounter,
    getTwoCounter
}

export const decByOne = (state={counter:1},action)=>{
    if(action.type === 'DEC_ONE') {
        return {...state, counter:state.counter - 1}
    }
    return state
}

export const decByTwo = (state={counter:1},action)=>{
    if(action.type === 'DEC_TWO') {
        return {...state, counter:state.counter - 2}
    }
    return state
}

const dec = combineReducers(
    {
        decByOne,
        decByTwo
    }
)

export default dec
