import { createStore } from "redux";
const reducer = (state = {counter:0}, action)=>{
    let c = state.counter + 1
 return state
}

const store = createStore(reducer);

store.getState()

export default store;