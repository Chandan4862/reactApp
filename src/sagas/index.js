import {all} from 'redux-saga/effects';
import {sagas as wheatherSaga} from './wheatherSaga';

export default function* rootSaga (){
    yield all({
        ...wheatherSaga  
    })
}