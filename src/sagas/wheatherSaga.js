import {wheatherApi} from '../api/index';
import {call,put,takeEvery,takeLatest} from 'redux-saga/effects'
import {SUCCESS,FAILURE, GETWHEATHER} from '../constants'

function* handleWheatherReq({payload}){
    let res = {}
    try {
        res = yield call(wheatherApi,payload.location)
        yield put({type:SUCCESS,payload:res})
    } catch(e) {
        yield put({type:FAILURE,payload:e})
    }
}

export const sagas = {
    watchGetWheatherApi: takeEvery(
        GETWHEATHER,
        handleWheatherReq
    )
}