import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// components
import CakeList from '../ui/views/CakeList';
import CakeDetail from '../ui/views/CakeDetail';
import CreateNewCake from '../ui/views/CreateNewCake';

// routes
export default(
  <Router basename="/">
    <div className="Router__container">
      <Route 
        exact path={"/"}
        component={ CakeList }/>
      <Route 
        path={"/cake"}
        component={ CakeDetail }/>
      <Route 
        path={"/create-new-cake"}
        component={ CreateNewCake }/>
    </div>
  </Router>
)