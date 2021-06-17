import React from "react";

import AuthPage from "../components/login/login";

import { Router, Redirect, Switch, Route } from "react-router-dom";

import { history } from "../helpers/history";

export const RouterPublic = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={AuthPage} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
