import React from "react";

import { Router, Redirect, Switch, Route } from "react-router-dom";

import { history } from "../helpers/history";

export const RouterPrivate = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={<div>Ruta privada</div>} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
