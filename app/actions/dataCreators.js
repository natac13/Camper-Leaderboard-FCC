import axios from 'axios';
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
    const p = axios.get(`http://fcctop100.herokuapp.com/api/fccusers/top/${period}`);


    return (dispatch) => {
        dispatch(requestData());
        return p.then(data => {
            dispatch(createList(data));
        });
    };
}