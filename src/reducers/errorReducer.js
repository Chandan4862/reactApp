import {FAILURE} from '../constants'

function errorReducer(state=null, action){
    if(action.type === FAILURE) {
        return  state =  'No matching location found.'
    } else {
        return state
    }
}

export default errorReducer;