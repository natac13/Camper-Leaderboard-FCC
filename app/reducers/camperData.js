import { Map, fromJS, List } from 'immutable';

import {
    CREATE_LIST,
    DATA_SUCCESS,
    DATA_FAILED
} from '../constants/';



const camperData = (state = List(), action) => {
    switch (action.type) {
        case CREATE_LIST:
            return fromJS(action.payload);
        default:
            return state;
    }
};

export default camperData;