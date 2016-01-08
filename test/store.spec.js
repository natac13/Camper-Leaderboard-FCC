import { expect } from 'chai';
import { Map, List, fromJS } from 'immutable';
import configureStore from '../app/store/configureStore';
import {
    createList
} from '../app/actions/';

import request from '../app/js/request';

describe('The Store', () => {


    let store;
    beforeEach(() => {
        store = configureStore();
    });

    it('should have an initial state that is just a Map', () => {
        const state = store.getState();
        expect(state).to.be.instanceof(Map);
    });

    it('should handle a createList action', () => {
        const action = createList(request());
        expect(store.getState().get('camperList')).to.equal(List());

        const p = store.dispatch(action);
        return p.then(() => {
            return expect(Promise.resolve(store.getState().get('camperList').size)).to.eventually.become(100);


        })

    });

});