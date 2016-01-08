import { createStore, applyMiddleware } from 'redux';
/*** Middlewares ***/
import promiseMiddleware from 'redux-promise';

/*** Reducer ***/
import rootReducer from '../reducers/';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware
)(createStore);


export default function configureStore(initialState) {
    // applyMiddleware supercharges createStore with middleware:

    // We can use it exactly like “vanilla” createStore.
    return createStoreWithMiddleware(rootReducer, initialState);
}