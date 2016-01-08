import { Map, fromJS, List } from 'immutable';

import {
    SET_THEME
} from '../constants/';


const theme = (state = Map(), action) => {
    switch (action.type) {
        case SET_THEME:
            return fromJS(action.payload);
        default:
            return state;
    }
};

export default theme;