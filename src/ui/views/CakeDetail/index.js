import {connect} from "react-redux";
import store from "../../../db/store";
import CakeDetail from "./CakeDetail.jsx";
import * as action from "./CakeDetail.action";
import * as CakeDetailMiddleware from './CakeDetail.middleware';

/**
 * Author note:
 * 
 * Connection the redux store ( model ) to the view ui.
 * Moving this logic here keeps our .jsx file as clean as possible
 */

function mapStoreToProps( store ) {
  return {
    cakes: store.GlobalReducer.cakes,
    deleteStatus: store.CakeDetailReducer.deleteStatus
  }
}
 
function mapDispatchToProps( dispatch ) {
  return {
    deleteThisCake: ( cakeId ) => 
      dispatch(action.deleteThisCake.submit( cakeId )),

    resetCakeDeleteStatus: () => 
      dispatch(action.resetCakeDeleteStatus( ))
  }
}

export {CakeDetailMiddleware};

export default connect( mapStoreToProps, mapDispatchToProps )( CakeDetail );