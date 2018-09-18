import {connect} from "react-redux";
import store from "../../../db/store";
import CreateNewCake from "./CreateNewCake.jsx";
import {submitNewCake, resetNewCakeStatus} from "./CreateNewCake.action";

/**
 * Author note:
 * 
 * Connection the redux store ( model ) to the view ui.
 * Moving this logic here keeps our .jsx file as clean as possible
 */

function mapStoreToProps( store ) {
  return {
    newCakeStatus: store.CreateNewCakeReducer.newCakeStatus
  }
}
 
function mapDispatchToProps( dispatch ) {
  return {
    submitNewCake: ( cakeDetails ) => 
      dispatch(submitNewCake.submit( cakeDetails )),

    resetNewCakeStatus: ( ) => 
      dispatch(resetNewCakeStatus( ))
  }
}
 
export default connect( mapStoreToProps, mapDispatchToProps )( CreateNewCake );