import React, { Fragment } from 'react'
import {Provider} from 'react-redux';
import IncrementComponent from './component/incrementComponent';
import DecrementComponent from './component/decrementComponent';
import SumComponent from './component/sumComponent';
import WheatherComponent from './component/wheatherComponent';
import store from './store';

const MainComponent = ()=>{
    return (
        <Provider store={store}>
            <Fragment>
                <IncrementComponent></IncrementComponent>
                <DecrementComponent></DecrementComponent>
                <SumComponent></SumComponent>
                <WheatherComponent></WheatherComponent>
            </Fragment>
        </Provider>
    )
}

export default MainComponent;