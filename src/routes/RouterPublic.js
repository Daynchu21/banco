import React from "react";

import Mcuits from "../components/multiple-cuit/multipleCuitComponent.js";
import FactoresAutenticacion from "./../components/selector-factor-autenticacion/factoresAutenticacion.js";
import RecuperarUsuario from "./../components/recuperar-usuario/recuperar-usuario.js";
import Login from "../components/login/login.jsx";
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
        <LayoutRoute path="/login" layout={EmptyLayout} component={Login} />
        <LayoutRoute
          path="/MultipleCuit"
          layout={EmptyLayout}
          component={Mcuits}
        />
        <LayoutRoute
          path="/FactoresAutenticacion"
          layout={EmptyLayout}
          component={FactoresAutenticacion}
        />
        <LayoutRoute
          path="/RecuperarUsuario"
          layout={EmptyLayout}
          component={RecuperarUsuario}
        />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
};
