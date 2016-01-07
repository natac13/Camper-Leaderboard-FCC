import { expect } from 'chai';
import { Map, fromJS, List } from 'immutable';

/*** actionCreators ***/
import {
    createList
} from '../app/actions/';

describe('Action Creators', () => {
    describe('createRecipe()', () => {
        it('should return a action object with CREATE_LIST as the type', () => {
            const action = createList({ data: [1, 2, 3] });
            console.log(action)
            expect(action).to.deep.equal({
                type: 'CREATE_LIST',
                payload: {
                    data: [1, 2, 3]
                },
                meta: true
            });
        });
    });

});