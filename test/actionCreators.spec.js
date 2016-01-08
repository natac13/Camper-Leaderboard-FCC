import { expect } from 'chai';
import { Map, fromJS, List } from 'immutable';
import axios from 'axios';
/*** actionCreators ***/
import {
    createList
} from '../app/actions/';

import request from '../app/js/request';

describe('Action Creators', () => {
    describe('createRecipe()', () => {
        it('should return a action object with CREATE_LIST as the type', (done) => {
            const action = createList(axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(data => data.data));

            action.payload.then(result => {
                expect(result).to.be.ok
                done()
            })

        });
    });

});