// @flow
import {submitNewCake} from './CreateNewCake.action';
import type {Action} from '../../../lib/redux';
import {networkRequest} from '../../../lib/network';
import type {Endpoint} from '../../../lib/api';
import {appendAttribute} from '../../../lib/api';

export default {
  '[CREATE_NEW_CAKE] NEW_CAKE__SUBMIT': async (store: Object, next: Function, 
    action: Action<string>) => { // $FlowFixMe
    
    let _endpoint: Endpoint 
      = Object.assign({}, 
          require('../../../lib/api/endpoints.json')['POST_A_CAKE']);

    _endpoint.data = action.payload;

    try {
      let res = await networkRequest( _endpoint );

      // The response code when a successful post takes place is 201
      if( res.status === 201 ) {
        store.dispatch(submitNewCake.resolved( /* ui message here.. */ ));
      }

      // status for a bad post request
      if( res.status === 400 ) {
        /** 
         * Author note: 
         * 
         * I wont build this out but its easy to see how we can expand on this 
         * and catch a range of status codes including server 500 errors, thus 
         * displaying good user feedback  - essential for a sucessful app.  
         */
      }

    } catch(error) {
      debugger;
      console.error(`[ERROR] submitting a new cake`, error);
      store.dispatch(action.submitNewCake.rejected());
    }
  }
}