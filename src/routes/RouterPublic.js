import React from "react";

import Login from "../components/login/login.js";
import { Router, Redirect, Switch } from "react-router-dom";
import { history } from "../helpers/history";
import { EmptyLayout, LayoutRoute } from "../layout/index.js";

export const RouterPublic = () => {
  return (
    <Router history={history}>
      <Switch>
        {/*Se cambia a layoute route para incluir estilos globales como temas en las rutas */}
        <LayoutRoute
          exact
          path="/login"
          layout={EmptyLayout}
          component={Login}
        />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
