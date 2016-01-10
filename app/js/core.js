import { fromJS, Map, List } from 'immutable';
import R from 'ramda';

const handleCreate = R.curry((period, state, apiData) => {
    state = state.setIn(['camperList', period], fromJS(apiData));
    state = state.set(`${period}Order`, 'descending');
    return state;
});

export const storeAllTime = handleCreate('allTime');
export const storeRecent = handleCreate('recent');

const handleOrdering = R.curry((period, state) => {
    const otherPeriod = period == 'recent' ? 'allTime' : 'recent';

    const apiPeriod = R.toLower(period);

    if (state.get(`${period}Order`) == 'descending') {
        //reset the otherPeriod flag
        state = state.set(`${otherPeriod}Order`, '');
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

    state = state.set(`${otherPeriod}Order`, '');
    state = state.set(`${period}Order`, 'descending');
    const oldList = state.getIn(['camperList', period]);
    const sortedList = oldList.sort((a, b) => {
        return b.get(apiPeriod) - a.get(apiPeriod);
    });
    return state.setIn(['camperList', period], sortedList);
});

export const orderAllTime = handleOrdering('allTime');
export const orderRecent  = handleOrdering('recent');
