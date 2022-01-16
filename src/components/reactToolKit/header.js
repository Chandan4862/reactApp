import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement, login, logout} from './store';
import  './style.css'

let Header = ()=>{
    let dispatch = useDispatch();
    let isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const incrementHandler = () => {
        dispatch(decrement()); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
      };

    const logoutHandler = ()=>{
        dispatch(logout())
    };
    const loginHandler = ()=>{
        dispatch(login())
    };
    return (
        <div className='container'>
            <div>Home</div>
            <div>Cart</div>
            <div>
            <button onClick={incrementHandler}>Decrement</button>
            </div>
            <div>
            <button onClick={logoutHandler}>LogOut</button>
            <button onClick={loginHandler}>LogIn</button>

            </div>

            <div>Is Logged In :{isLoggedIn}:</div>

        </div>
    )
}

export default Header