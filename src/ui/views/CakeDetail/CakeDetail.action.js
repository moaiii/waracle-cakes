// @flow
import {actionCreator, networkActionCreator} from "../../../lib/redux";
import type {NetworkActionCreator, ActionCreator} from "../../../lib/redux";

export const deleteThisCake: NetworkActionCreator<any, void> 
  = networkActionCreator("[CAKE_DETAIL] DELETE_THIS_CAKE");

export const resetCakeDeleteStatus: ActionCreator<any, void> 
  = actionCreator("[CAKE_DETAIL] RESET_CAKE_DELETE_STATUS");