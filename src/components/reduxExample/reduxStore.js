import {createStore} from "redux"

let obj = {
    name : 'default',
    changeName : function({type},dispatch){
        dispatch({type:type})
    },
    counter : 0
}
let reducer = (state = obj, actions) => { 
    if(actions.type === 'increment') {
        return {
            ...state,
           counter : state.counter + 1
        }
    } else if(actions.type === 'decrement') {
        return {
            ...state,
            counter : state.counter - 1 > 0 ? state.counter - 1 : 0
        }
    } else if(actions.type === 'parentName') {
        return {
            ...state,
            name : 'PARENT'
        }
    } else if(actions.type === 'childName') {
        return {
            ...state,
            name : 'CHILD'
        }
    }
    return state

}

let store = createStore(reducer);

export default store