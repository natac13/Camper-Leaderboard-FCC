import { createAction } from 'redux-actions';

import {
    CREATE_LIST,
    DATA_SUCCESS,
    DATA_FAILED,
    ORDER_ALLTIME
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
export const dataSuccess = createAction(DATA_SUCCESS);
export const dataFail = createAction(DATA_FAILED);
export const orderAlltime = createAction(ORDER_ALLTIME);


