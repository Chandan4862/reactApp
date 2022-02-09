import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import logger from "redux-logger";

let store = createStore(rootReducer, applyMiddleware(logger))

export default store;