const global = (state=1, action)=>{
    if(action.type==="GLOBAL_INC_ONE") return state + 1
    else if (action.type==="GLOBAL_INC_TWO") return state + 1
    else if (action.type==="GLOBAL_DEC_TWO") return state - 2
    else if (action.type==="GLOBAL_DEC_ONE") return state - 1

    return state
}

const getGloabalCounter = (state) => {
    return state
}

export const globalCounter = {
    getGloabalCounter
}

export default global