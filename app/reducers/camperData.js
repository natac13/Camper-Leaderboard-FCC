import { Map, fromJS, List } from 'immutable';

import {
    CREATE_LIST_ALLTIME,
    CREATE_LIST_RECENT,
    DATA_SUCCESS,
    DATA_FAILED,
    ORDER_ALLTIME
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

function handleAllTime(state, apiData) {
    state = state.setIn(['camperList', 'allTime'], fromJS(apiData));
    state = state.set('allTimeOrder', 'descending');
    return state;
}

function handleRecent(state, apiData) {
    state = state.setIn(['camperList', 'recent'], fromJS(apiData));
    state = state.set('recentOrder', 'descending');
    return state;
}


const camperData = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LIST_ALLTIME:
            return handleAllTime(state, action.payload);
        case CREATE_LIST_RECENT:
            return handleRecent(state, action.payload);
        case ORDER_ALLTIME:
            return state.sort((a, b) => {
                return a.get('alltime') - b.get('alltime');
            });
        default:
            return state;
    }
};

export default camperData;