// @flow
import type {Cake} from '../../lib/types/cake';
import type {Action} from '../../lib/redux';

/**
 * Author note: 
 * 
 * Given these network requests are common across the app, and probably more so 
 * across bigger more complex apps, given time, I would abstract the pending, 
 * complete and error states properties into a helper method within /lib/redux.
 * 
 * Im aware some people use Redux SAGA and Redux thunk. My personal pref is 
 * to write myself for readability and control.
 * 
 * It doesnt matter here, and is actually pretty readable as it is. THOUGH NOT 
 * SCALEABLE. Once this global reducer starts adding other data, such as receipes, 
 * cooks, stores etc it will become un-manageable.
 */

type State = {
  +cakes: {
    +value: Array<Cake>,
    +pending: boolean,
    +complete: boolean,
    +error: boolean
  }
};

let initialState = {
  cakes: {
    value: [],
    pending: false,
    complete: false,
    error: false
  }
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "[GLOBAL] GET_ALL_CAKES__SUBMIT": {
      return { 
        ...state, 
        cakes: Object.assign({}, state.cakes, {
          pending: true,
          complete: false,
          error: false
        })
      };
    }
    case "[GLOBAL] GET_ALL_CAKES__RESOLVED": {
      return { 
        ...state, 
        cakes: Object.assign({}, state.cakes, {
          value: action.payload,
          pending: false,
          complete: true,
          error: false
        })
      };
    }
    case "[GLOBAL] GET_ALL_CAKES__REJECTED": {
      return { 
        ...state, 
        cakes: Object.assign({}, state.cakes, {
          pending: false,
          complete: false,
          error: true
        })
      };
    }

    default: {
      return state;
    }
  }
};
