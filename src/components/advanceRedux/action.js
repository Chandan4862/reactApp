import {GETWHEATHER} from './constants'
export const incrementAction = (amt)=> (
    {
        type:'INC',
        payload: amt
    }
)

export const decrementAction = ()=>({
    type: 'DEC'
})

export const sumAction = ()=>({
    type: 'SUM'
})

export const wheatherAction = ()=>({
    type:GETWHEATHER
})