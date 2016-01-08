import axios from 'axios';
import { createAction } from 'redux-actions';

import {
    CREATE_LIST,
    REQUEST_DATA,
    DATA_SUCCESS,
    DATA_FAILED
} from '../constants/';

/**
 * createList :: String a -> Object b
 * take in a string and returns an action object that would look like
 * {
 *     type: CREATE_LIST,
 *     payload: {
 *         the argument passed when calling createList
 *     }
 * }
 * @type {[type]}
 */
export const createList = createAction(CREATE_LIST);

export function requestData()  {
    return {
        type: REQUEST_DATA
    };
}

export function dataSuccess() {
    return {
        type: DATA_SUCCESS
    };
}

export function dataFail() {
    return {
        type: DATA_FAILED
    };
}

export function fetchData(period) {
    const p = axios.get(`http://fcctop100.herokuapp.com/api/fccusers/top/${period}`);


    return (dispatch) => {
        dispatch(requestData());
        return p.then(data => {
            dispatch(createList(data));
        });
    };
}