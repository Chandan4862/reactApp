import {SUCCESS,FAILURE} from '../constants'

let wheatherReducer = (state={},action) => {
    if(action.type === SUCCESS) {
        return state.data =  action.payload.data
    } else if(action.type === FAILURE) {
        return state = 'FAILED'
    } else {
        return state
    }
}

export default wheatherReducer