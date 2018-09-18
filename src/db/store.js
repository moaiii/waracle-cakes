
// redux
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux"

// middlewares
// ...

const customMiddleWare = store => next => action => {}

// Combine Reducers
let reducers = combineReducers({

});

const logger = createLogger({
  collapsed: true, diff: true
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(customMiddleWare, logger)
);

export default store;
