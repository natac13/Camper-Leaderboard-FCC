import { expect } from 'chai';
import { Map, fromJS, List } from 'immutable';
import fetch from 'isomorphic-fetch';

import {
    CREATE_LIST,

} from '../app/constants';

import reducer from '../app/reducers/';


// describe('The reducer', () => {
//     it('should have an initial State immutable Map, with sync properties', () => {
//         const action = { type: 'blank' };
//         const state = reducer(undefined, action);
//         expect(state).to.be.instanceof(List);
//         expect(state.has('isFetching')).to.be.true;
//         expect(state.has('camperList')).to.be.true;
//         expect(state.has)
//     });

//     it('should handle CREATE_LIST action which passes an array of user objects', () => {
//         const data = [
//             {
//                 "username":"SaintPeter",
//                 "img":"https://avatars.githubusercontent.com/u/553494?v=3",
//                 "alltime":1862,
//                 "recent":402,
//                 "lastUpdate":"2016-01-04T23:06:51.799Z"
//             },
//             {
//                 "username":"abhisekp",
//                 "img":"https://avatars.githubusercontent.com/u/1029200?v=3",
//                 "alltime":1500,
//                 "recent":402,
//                 "lastUpdate":"2016-01-04T23:07:13.292Z"
//             }
//         ];
//         const action = {
//             type: CREATE_LIST,
//             data
//         }
//         const state = reducer(List(), action);
//         expect(state).to.be.instanceof(List);
//         expect(state).to.equal(fromJS([
//            {
//                "username":"SaintPeter",
//                "img":"https://avatars.githubusercontent.com/u/553494?v=3",
//                "alltime":1862,
//                "recent":402,
//                "lastUpdate":"2016-01-04T23:06:51.799Z"
//            },
//            {
//                "username":"abhisekp",
//                "img":"https://avatars.githubusercontent.com/u/1029200?v=3",
//                "alltime":1500,
//                "recent":402,
//                "lastUpdate":"2016-01-04T23:07:13.292Z"
//            }
//         ]));
//     });

//     it('should handle DATA_SUCCESS', () => {
//         const
//     })
// });