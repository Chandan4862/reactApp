import redux, { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index'
import rootSaga from './sagas'

const sagaMiddleWare = createSagaMiddleware()

let store = createStore(
    rootReducer,
    compose(// to be used for multiple
    applyMiddleware(sagaMiddleWare)
    )
)
sagaMiddleWare.run(rootSaga)

export default store