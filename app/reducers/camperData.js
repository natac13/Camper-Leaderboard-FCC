import { Map, fromJS, List } from 'immutable';

import {
    CREATE_LIST,
    DATA_SUCCESS,
    DATA_FAILED,
    REQUEST_DATA,
} from '../constants/';

const camperData = (state = Map(), action) => {
    switch (action.type) {
        case CREATE_LIST:
            return state.set('camperList', fromJS(action.payload));
        default:
            return state;
    }
};

export default camperData;