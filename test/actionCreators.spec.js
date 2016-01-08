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
        it('should return a action object with CREATE_LIST as the type', () => {
            const action = createList(axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
                .then(data => data.data));

            return expect(action.payload.then(result => result)).to.be.fullfilled

        });
    });

});