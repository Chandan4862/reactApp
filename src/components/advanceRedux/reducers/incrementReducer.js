let incrementReducer = (state=0,action)=>{
    if(action.type === 'INC') {
       return state = state + 1;
    } else {
        return state
    }
}

export default incrementReducer