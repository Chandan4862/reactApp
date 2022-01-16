let decrementReducer = (state=0,action)=>{
    if(action.type === 'DEC') {
        return state = state - 1 > 0? state -1 : state ;
    } else {
        return state
    }
}

export default decrementReducer