import React,{ useContext } from 'react';
import { Provider } from 'react-redux'
import store  from './store';
import './style.css';
import Header from './header';
import Body from './body';

let RootComp = ()=> {
    return (
        <Provider store={store}>
            <div class = 'container'>
                <Header class = 'item'></Header>
                <Body class = 'item'></Body>
            </div>
        </Provider>
    )
}

export default RootComp