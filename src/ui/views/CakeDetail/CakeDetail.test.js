import reducer from "./CakeDetail.reducer";
import * as actions from "./CakeDetail.action";
import store from '../../../db/store';

/**
 * Author note:
 * 
 * A short of example of testing the reducer logic.
 * 
 * As reducers are effectively pure functions and all changes in the app
 * reflect the state of the store, I find this to be the most 
 * effective testing point.
 * 
 * Due to time constraints I will stop at one but we can easily see how
 * we can build this out to include all our actions/reducer interactions. 
 */

describe('Delete a cake', () => {
  it('correctly resets the status of the deletion', async () => {
    expect.assertions(4);
    await store.dispatch(actions.resetCakeDeleteStatus());
    let _state = store.getState().CakeDetailReducer.deleteStatus
    expect( _state.pending ).toEqual( false );
    expect( _state.complete ).toEqual( false );
    expect( _state.error ).toEqual( false );
    expect( _state.whatIsThis ).toEqual( undefined );
  })
});