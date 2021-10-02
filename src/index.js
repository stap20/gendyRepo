import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";

import View1 from "./views/view1"
import View2 from "./views/view2"
import View3 from "./views/view3"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={View1} />
      <Route path="/calc" component={View2} />
      <Route path="/mixed" component={View3} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
