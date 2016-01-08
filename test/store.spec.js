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

    it('should have an initial state that is just an Object with a camperData and theme keys', () => {
        const state = store.getState();
        expect(state).to.be.instanceof(Object);
        expect(state.camperData).to.be.instanceof(List);
        expect(state.theme).to.be.instanceof(Map)
    });

    it('should handle a createList action', () => {
        const action = createList(request());
        expect(store.getState().camperData).to.equal(List());

        const p = store.dispatch(action);
        return p.then(() => {
            return expect(Promise.resolve(store.getState().camperData.size)).to.eventually.become(100);


        })

    });

});