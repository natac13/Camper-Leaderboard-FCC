import { combineReducers } from 'redux';

import camperData from './camperData';
import theme      from './theme';

const rootReducer = combineReducers({
    camperData,
    theme
});

export default rootReducer;

// const initialState = fromJS({
//     camperList: [],
//     theme: {
//         color: '#369'
//     }
// });