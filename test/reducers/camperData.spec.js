import { expect } from 'chai';
import { Map, fromJS, List } from 'immutable';

import {
    CREATE_LIST_ALLTIME,

} from '../../app/constants';

import {
    createListAllTime,
    createListRecent,
    dataSuccess,
    dataFail,
    orderAllTime,
    orderRecent
} from '../../app/actions/';

import reducer from '../../app/reducers/camperData';

function mockData() {
    return [
                {
                    "username":"SaintPeter",
                    "img":"https://avatars.githubusercontent.com/u/553494?v=3",
                    "alltime":1862,
                    "recent":402,
                    "lastUpdate":"2016-01-04T23:06:51.799Z"
                },
                {
                    "username":"abhisekp",
                    "img":"https://avatars.githubusercontent.com/u/1029200?v=3",
                    "alltime":1500,
                    "recent":402,
                    "lastUpdate":"2016-01-04T23:07:13.292Z"
                },
                {
                    "username":"MattYamamoto",
                    "img":"https://avatars.githubusercontent.com/u/12126908?v=3",
                    "alltime":580,
                    "recent":215,
                    "lastUpdate":"2016-01-07T16:23:20.370Z"
                }
            ]
}

const mockAllTime = mockData;
function mockRecent() {
    return [
                {
                    "username":"SaintPeter",
                    "img":"https://avatars.githubusercontent.com/u/553494?v=3",
                    "alltime":128,
                    "recent":402,
                    "lastUpdate":"2016-01-04T23:06:51.799Z"
                },
                {
                    "username":"abhisekp",
                    "img":"https://avatars.githubusercontent.com/u/1029200?v=3",
                    "alltime":1500,
                    "recent":375,
                    "lastUpdate":"2016-01-04T23:07:13.292Z"
                },
                {
                    "username":"MattYamamoto",
                    "img":"https://avatars.githubusercontent.com/u/12126908?v=3",
                    "alltime":580,
                    "recent":215,
                    "lastUpdate":"2016-01-07T16:23:20.370Z"
                }
            ]
}

describe('The reducer', () => {

    const initialState = Map({
        camperList: Map({
            allTime: List(),
            recent: List()
        }),
        allTimeOrder: '',
        recentOrder: '',
        usernameOrder: ''
    });

    describe('Initial Setup', () => {
       it('should have an initial State immutable Map, with camperList, allTimeOrder, recentOrder, and usernameOrder', () => {
           const action = { type: 'blank' };
           const state = reducer(undefined, action);
           expect(state).to.be.instanceof(Map);
           expect(state.has('camperList')).to.be.true;
           expect(state.hasIn(['camperList', 'allTime'])).to.be.true;
           expect(state.hasIn(['camperList', 'recent'])).to.be.true;
           expect(state.has('allTimeOrder')).to.be.true;
           expect(state.has('recentOrder')).to.be.true;
           expect(state.has('usernameOrder')).to.be.true;

       });

       it('should have the correct immutable types for the camperList=Map camperList.allTime=List, camperList.recent=List', () => {
           const action = { type: 'blank' };
           const state = reducer(undefined, action);
           expect(state.get('camperList')).to.be.instanceof(Map);
           expect(state.getIn(['camperList', 'allTime'])).to.be.instanceof(List);
           expect(state.getIn(['camperList', 'recent'])).to.be.instanceof(List);

       });

    });

    describe('Handling API data incoming', () => {
        it('should handle CREATE_LIST_ALLTIME action which passes an array of user objects', () => {
            const data = mockData();
            const action = createListAllTime(data);
            expect(action.payload).to.be.ok;
            const state = reducer(initialState, action);
            expect(state).to.be.instanceof(Map);
            expect(state.getIn(['camperList', 'allTime']))
                .to.equal(fromJS(mockData()));
            expect(state.get('allTimeOrder')).to.equal('descending');
        });

        it('should handle CREATE_LIST_RECENT action same as the ALLTIME really', () => {
            const data = mockData();
            const action = createListRecent(data);
            expect(action.payload).to.be.ok;
            const state = reducer(initialState, action);
            expect(state.getIn(['camperList', 'recent']))
                .to.equal(fromJS(mockData()));
            expect(state.get('recentOrder')).to.equal('descending');
        });
    });

    describe('Sorting a CamperList', () => {
        it('should be handle ORDER_ALLTIME by returning an ascending list after being giving a descending list', () => {
            // hydrate the mock data in the camperList.allTime value
            const data = mockAllTime();
            const state = reducer(initialState, createListAllTime(data));

            // The action to test
            const action = orderAllTime()
            expect(action.type).to.equal('ORDER_ALLTIME');
            const nextState = reducer(state, action);
            expect(nextState.getIn(['camperList', 'allTime']))
                .to.equal(fromJS([
                {
                    "username":"MattYamamoto",
                    "img":"https://avatars.githubusercontent.com/u/12126908?v=3",
                    "alltime":580,
                    "recent":215,
                    "lastUpdate":"2016-01-07T16:23:20.370Z"
                },
                {
                    "username":"abhisekp",
                    "img":"https://avatars.githubusercontent.com/u/1029200?v=3",
                    "alltime":1500,
                    "recent":402,
                    "lastUpdate":"2016-01-04T23:07:13.292Z"
                },
                {
                    "username":"SaintPeter",
                    "img":"https://avatars.githubusercontent.com/u/553494?v=3",
                    "alltime":1862,
                    "recent":402,
                    "lastUpdate":"2016-01-04T23:06:51.799Z"
                }
            ]));
            expect(nextState.get('allTimeOrder')).to.equal('ascending');

        });
    });




});