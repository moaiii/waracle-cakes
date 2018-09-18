// @flow
import {networkActionCreator} from "../../lib/redux";
import type {NetworkActionCreator} from "../../lib/redux";

export const getAllCakes: NetworkActionCreator<any, void> 
  = networkActionCreator("[GLOBAL] GET_ALL_CAKES");
