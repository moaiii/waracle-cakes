import reducer from "./global.reducer";
import * as actions from "./global.action";
import store from '../store';

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

describe('Adding the cakes to the global store', () => {
  it('correctly adds the array', async () => {
    expect.assertions(4);
    await store.dispatch(actions.getAllCakes.resolved( [ 'cake!' ] ));
    let _state = store.getState().GlobalReducer.cakes;
    expect( _state.value ).toHaveLength( 1 );
    expect( _state.pending ).toEqual( false );
    expect( _state.complete ).toEqual( true );
    expect( _state.error ).toEqual( false );
  })
});
