// @flow
import {actionCreator, networkActionCreator} from "../../../lib/redux";
import type {NetworkActionCreator, ActionCreator} from "../../../lib/redux";

export const submitNewCake: NetworkActionCreator<any, void> 
  = networkActionCreator("[CREATE_NEW_CAKE] NEW_CAKE");

export const resetNewCakeStatus: ActionCreator<any, void> 
  = actionCreator("[CREATE_NEW_CAKE] RESET_NEW_CAKE_STATUS");