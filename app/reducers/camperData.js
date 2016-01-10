import { Map, fromJS, List } from 'immutable';

import {
    CREATE_LIST,
    DATA_SUCCESS,
    DATA_FAILED,
    ORDER_ALLTIME
} from '../constants/';



const camperData = (state = List(), action) => {
    switch (action.type) {
        case CREATE_LIST:
            return fromJS(action.payload);
        case ORDER_ALLTIME:
            return state.sort((a, b) => {
                return a.get('alltime') - b.get('alltime');
            });
        default:
            return state;
    }
};

export default camperData;