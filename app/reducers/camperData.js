import { Map, fromJS, List } from 'immutable';
import R from 'ramda';

import {
    CREATE_LIST_ALLTIME,
    CREATE_LIST_RECENT,
    DATA_SUCCESS,
    DATA_FAILED,
    ORDER_ALLTIME,
    ORDER_RECENT
} from '../constants/';

import {
    storeAllTime,
    storeRecent,
    orderAllTime,
    orderRecent
} from '../js/core';

const initialState = fromJS({
    camperList: {
        allTime: [],
        recent: []
    },
    allTimeOrder: '',
    recentOrder: '',
    usernameOrder: ''

});

const camperData = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LIST_ALLTIME:
            return storeAllTime(state, action.payload);
        case CREATE_LIST_RECENT:
            return storeRecent(state, action.payload);
        case ORDER_ALLTIME:
            return orderAllTime(state);
        case ORDER_RECENT:
            return orderRecent(state);
        default:
            return state;
    }
};

export default camperData;