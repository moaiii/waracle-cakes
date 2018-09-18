// @flow
import type {Action} from '../../../lib/redux';

/**
 * Author note:
 * 
 * Very similar structure to cake detail reducer and monitoring its delete status.
 * Again this can be abstracted to a helper method which creates these object structures
 * which would be found in lib/redux helper file. 
 */

type State = {
  newCakeStatus: {
    pending: boolean,
    complete: boolean,
    error: boolean
  } 
};

let initialState = {
  newCakeStatus: {
    pending: false,
    complete: false,
    error: false
  }
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "[CREATE_NEW_CAKE] NEW_CAKE__SUBMIT": {
      return {
        ...state,
        newCakeStatus: Object.assign({}, state.newCakeStatus, {
          pending: true,
          complete: false,
          error: false
        })
      };
    }

    case "[CREATE_NEW_CAKE] NEW_CAKE__RESOLVED": {
      return {
        ...state,
        newCakeStatus: Object.assign({}, state.newCakeStatus, {
          pending: false,
          complete: true,
          error: false
        })
      };
    }

    case "[CREATE_NEW_CAKE] NEW_CAKE__REJECTED": {
      return {
        ...state,
        newCakeStatus: Object.assign({}, state.newCakeStatus, {
          pending: false,
          complete: false,
          error: true
        })
      };
    }

    case "[CREATE_NEW_CAKE] RESET_NEW_CAKE_STATUS": {
      return { ...initialState };
    }

    default: {
      return state;
    }
  }
};