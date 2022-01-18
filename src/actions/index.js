import {GETWHEATHER} from '../constants'

export const wheatherAction = (data)=>({
    type:GETWHEATHER,
    payload: data
})