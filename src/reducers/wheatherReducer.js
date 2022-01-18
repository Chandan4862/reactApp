import {SUCCESS,FAILURE} from '../constants'

let wheatherReducer = (state=null,action) => {
    if(action.type === SUCCESS) {
        return state =  action.payload.data
    } else {
        return state
    }
}

export default wheatherReducer