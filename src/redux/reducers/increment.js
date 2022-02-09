import { combineReducers } from "redux";

/********************************************************************************************/
export const getOneCounter = (state) => {
    return state.incByOne.counter
}
/********************************************************************************************/
export const getTwoCounter = (state) => {
    return state.incByTwo.counter
}
/********************************************************************************************/
export const incCounter = {
    getOneCounter,
    getTwoCounter
}
/********************************************************************************************/
export const incByOne = (state={counter:1},action)=>{
    if(action.type === 'INC_ONE') {
        return {...state, counter: state.counter + 1}    
    }
    return state
}

export const incByTwo = (state={counter:1},action)=>{
    if(action.type === 'INC_TWO') {
        return {...state, counter: state.counter + 2}    
    }
    return state
}

const inc = combineReducers({
    incByOne,
    incByTwo
})

export default inc