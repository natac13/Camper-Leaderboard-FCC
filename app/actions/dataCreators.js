import { createAction } from 'redux-actions';

import {
    CREATE_LIST_ALLTIME,
    CREATE_LIST_RECENT,
    DATA_SUCCESS,
    DATA_FAILED,
    ORDER_ALLTIME
} from '../constants/';

/**
 * createListAllTime :: String a -> Object b
 * take in a string and returns an action object that would look like
 * {
 *     type: CREATE_LIST_ALLTIME,
 *     payload: {
 *         the argument passed when calling createListAllTime
 *     }
 * }
 * @type {[type]}
 */
export const createListAllTime = createAction(CREATE_LIST_ALLTIME);
export const createListRecent = createAction(CREATE_LIST_RECENT);
export const dataSuccess = createAction(DATA_SUCCESS);
export const dataFail = createAction(DATA_FAILED);
export const orderAlltime = createAction(ORDER_ALLTIME);


