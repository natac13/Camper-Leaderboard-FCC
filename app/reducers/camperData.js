import { Map, fromJS, List } from 'immutable';

import {
    CREATE_LIST,
    DATA_SUCCESS,
    DATA_FAILED,
    REQUEST_DATA,
} from '../constants/';

const camperData = (state = List(), action) => {
    switch (action.type) {
        case CREATE_LIST:
            return fromJS(action.data);
        default:
            return state;
    }
};

export default camperData;