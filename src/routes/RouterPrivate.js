import React from "react";

import { Router, Redirect, Switch, Route } from "react-router-dom";

import { history } from "../helpers/history";
import Dashboard from '../components/dashboard/dashboard.js'

export const RouterPrivate = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
