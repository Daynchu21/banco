import React from "react";
import Mcuits from "../components/multiple-cuit/multipleCuitComponent.js"
import Login from "../components/login/login.js";
import { HashRouter, Redirect, Switch } from "react-router-dom";
import { EmptyLayout, LayoutRoute } from "../layout/index.js";

export const RouterPublic = () => {
  return (
    /**Se hizo el cambio a hashROuter para manejar rutas fisicas en el redirect. En rutas privadas
     * utilizar rutas normales.
     */
    <HashRouter>
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
    </HashRouter>
  );
};
