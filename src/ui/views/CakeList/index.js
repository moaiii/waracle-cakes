import {connect} from "react-redux";
import store from "../../../db/store";
import CakeList from "./CakeList.jsx";
import {getAllCakes} from '../../../db/global/global.action';

/**
 * Author note:
 * 
 * Connection the redux store ( model ) to the view ui.
 * Moving this logic here keeps our .jsx file as clean as possible
 */

function mapStoreToProps( store ) {
  return {
    cakes: store.GlobalReducer.cakes
  }
}
 
function mapDispatchToProps( dispatch ) {
  return {
    getAllCakes: ( ) => dispatch(getAllCakes.submit())
  }
}
 
export default connect( mapStoreToProps, mapDispatchToProps )( CakeList );