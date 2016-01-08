import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import configureStore from '../app/store/configureStore';
import {
    createList
} from '../app/actions/';

import request from '../app/js/request';

describe('The Store', () => {
    describe('Redux-promise middleware', () => {
        let store;
        beforeEach(() => {
            store = configureStore();
        })

        it('should handle a createList action', (done) => {
            const action = createList(request());
            const state = fromJS({
                camperList: []
            });
            const nextState = store.dispatch(action);
            nextState.then(data => {
                console.log(data);
                done()
                return data;
            }
            );


        });
    });
});