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

const initialState = fromJS({
    camperList: {
        allTime: [],
        recent: []
    },
    allTimeOrder: '',
    recentOrder: '',
    usernameOrder: ''

});

const handleCreate = R.curry((period, state, apiData) => {
    state = state.setIn(['camperList', period], fromJS(apiData));
    state = state.set(`${period}Order`, 'descending');
    return state;
});

const storeAllTime = handleCreate('allTime');
const storeRecent = handleCreate('recent');

const handleOrdering = R.curry((period, state) => {
    const apiPeriod = R.toLower(period);

    if (state.get(`${period}Order`) == 'descending') {
        // set the order flag to ascending
        state = state.set(`${period}Order`, 'ascending');

        // grab the old version of the list
        const oldList = state.getIn(['camperList', period]);
        // change to ascending order
        const sortedList = oldList.sort((a, b) => {
            return a.get(apiPeriod) - b.get(apiPeriod);
        });
        return state.setIn(['camperList', period], sortedList);
    }

    state = state.set(`${period}Order`, 'descending');
    const oldList = state.getIn(['camperList', period]);
    const sortedList = oldList.sort((a, b) => {
        return b.get(apiPeriod) - a.get(apiPeriod);
    });
    return state.setIn(['camperList', period], sortedList);
});

const orderAllTime = handleOrdering('allTime');
const orderRecent  = handleOrdering('recent');



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