import { createStore, applyMiddleware } from 'redux';
/*** Middlewares ***/
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger';



/*** Reducer ***/
import rootReducer from '../reducers/';

const loggerMiddleware = logger();

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware,
    loggerMiddleware
)(createStore);


export default function configureStore(initialState) {
    // applyMiddleware supercharges createStore with middleware:

    // We can use it exactly like “vanilla” createStore.
    return createStoreWithMiddleware(rootReducer, initialState);
}