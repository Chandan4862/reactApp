let incrementReducer = (state=0,action)=>{
    if(action.type === 'INC') {
       return state = state + action.payload;
    } else {
        return state
    }
}

export default incrementReducer