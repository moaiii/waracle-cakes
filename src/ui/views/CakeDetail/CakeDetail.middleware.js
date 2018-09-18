// @flow
import {deleteThisCake} from './CakeDetail.action';
import type {Action} from '../../../lib/redux';
import {networkRequest} from '../../../lib/network';
import type {Endpoint} from '../../../lib/api';
import {appendAttribute} from '../../../lib/api';

export default {
  '[CAKE_DETAIL] DELETE_THIS_CAKE__SUBMIT': async (store: Object, next: Function, 
    action: Action<string>) => { // $FlowFixMe
    
    /**
     * Create a new copy of the url data that we can append data to
     */
    let _endpoint: Endpoint 
      = Object.assign({}, 
        require('../../../lib/api/endpoints.json')['DELETE_A_CAKE']);

    // mutable method to append the cake ID to the endpoint path 
    _endpoint.url = appendAttribute(_endpoint.url, 'cakeId', action.payload);

    try {
      let res = await networkRequest( _endpoint );

      // The response code when a successful deletion takes place is 204
      if( res.status === 204 ) {
        store.dispatch(deleteThisCake.resolved( /* ui message here.. */ ));
      }

      // alternatively if the cake has already been deleted it returns a 404
      if( res.status === 404 ) {
        /** 
         * Author note: 
         * 
         * I wont build this out but its easy to see how we can expand on this 
         * and catch a range of status codes including server 500 errors, thus 
         * displaying good user feedback  - essential for a sucessful app.  
         */
      }

    } catch(error) {
      console.error(`[ERROR] deleting a cake`, error);
      store.dispatch(deleteThisCake.rejected());
    }
  }
}