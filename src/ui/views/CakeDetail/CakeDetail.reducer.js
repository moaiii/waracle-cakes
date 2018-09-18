// @flow
import type {Action} from '../../../lib/redux';

type State = {
  deleteStatus: {
    pending: boolean,
    complete: boolean,
    error: boolean
  } 
};

let initialState = {
  deleteStatus: {
    pending: false,
    complete: false,
    error: false
  }
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "[CAKE_DETAIL] DELETE_THIS_CAKE__SUBMIT": {
      return {
        ...state,
        deleteStatus: Object.assign({}, state.deleteStatus, {
          pending: true,
          complete: false,
          error: false
        })
      };
    }

    case "[CAKE_DETAIL] DELETE_THIS_CAKE__RESOLVED": {
      return {
        ...state,
        deleteStatus: Object.assign({}, state.deleteStatus, {
          pending: false,
          complete: true,
          error: false
        })
      };
    }

    case "[CAKE_DETAIL] DELETE_THIS_CAKE__REJECTED": {
      return {
        ...state,
        deleteStatus: Object.assign({}, state.deleteStatus, {
          pending: false,
          complete: false,
          error: true
        })
      };
    }

    case "[CAKE_DETAIL] RESET_CAKE_DELETE_STATUS": {
      return { ...initialState };
    }

    default: {
      return state;
    }
  }
};