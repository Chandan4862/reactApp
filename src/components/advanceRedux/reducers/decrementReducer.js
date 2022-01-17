let decrementReducer = (state=0,action)=>{
    if(action.type === 'DEC') {
        return state = state - 1;
    } else {
        return state
    }
}

export default decrementReducer