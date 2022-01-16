import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './store';

let Body = ()=>{
    let count = useSelector(state=>state.counter.counter)
    let dispatch = useDispatch()
    const incrementHandler = () => {
        dispatch(increment()); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
      };
    return (
        <div  class='container'>
            <div class='item'>Counter  {count}</div>
            <div class='item'>
            <button onClick={incrementHandler}>Increment</button>    
            </div>
        </div>
    )
}

export default Body