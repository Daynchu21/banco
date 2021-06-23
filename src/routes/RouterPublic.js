import React from "react";
import Mcuits from "../components/multiple-cuit/multipleCuitComponent.js"
import Login from "../components/login/login.js";
import { Router, Redirect, Switch,Route } from "react-router-dom";
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
                <Route  path="/MultipleCuit" component={Mcuits} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};
