import fetch from 'isomorphic-fetch';
import { createAction } from 'redux-actions';

import {
    CREATE_LIST,
    REQUEST_DATA,
    DATA_SUCCESS,
    DATA_FAILED
} from '../constants/';

export const createList = createAction(CREATE_LIST, data => data, () => true );

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
    const p = fetch(`http://fcctop100.herokuapp.com/api/fccusers/top/${period}`)
    .then((data) => {
        return data.json();
    })
    .then(console.log.bind(console));


    return (dispatch) => {
        dispatch(requestData());
        return p.then(buffer => buffer.json())
                .then(data => {
                    dispatch(createList(data));
                });
    };
}