import React from "react";
import { useSelector } from "react-redux";
import { Router, Switch, Redirect } from "react-router-dom";
import { history } from "../helpers/history";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { RouterPrivate } from "./RouterPrivate";
import { RouterPublic } from "./RouterPublic";

export const AppRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <Router history={history}>
      <Switch>
        <PublicRoute
          path="/login"
          component={RouterPublic}
          isAuthenticated={isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/"
          component={RouterPrivate}
          isAuthenticated={isLoggedIn}
        />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
