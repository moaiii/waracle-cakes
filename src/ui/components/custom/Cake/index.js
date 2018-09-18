import {connect} from "react-redux";
import store from "../../../../db/store";
import Cake from "./Cake.jsx";

/**
 * Author note:
 * 
 * Connection the redux store ( model ) to the view ui.
 * Moving this logic here keeps our .jsx file as clean as possible
 */

function mapStoreToProps( store ) {
  return {
    // cakes: store.GlobalReducer.cakes
  }
}

function mapDispatchToProps( store ) {
  return {
    // deleteCake: ( cakeId ) => store.dispatch(action.deleteCake( cakeId ))
  }
}
 
export default connect( mapStoreToProps, mapDispatchToProps )( Cake );