import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

let sagaMiddleWare = createSagaMiddleware();

let store = createStore(rootReducer,applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga)

export default store;