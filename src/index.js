import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./db/store";
import router from "./router";
import "./stylesheet/main.css";

/**
 * Author note:
 * 
 * Dynamic import of the init script before we load the application into
 * the DOM. Not really usefully in our app however I am demonstrating 
 * architectural practise. Here would would initialise the app with any config
 * or pre data we would need.
 */
import(`./lib/utils/init.js`)
  .then(init => {
    
    init.run();

    ReactDOM.render(<Provider store={store}>{router}</Provider>,
      document.getElementById("root"));
  })