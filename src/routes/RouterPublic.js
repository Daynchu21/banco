import React from "react";

import Mcuits from "../components/multiple-cuit/multipleCuitComponent.js";
import FactoresAutenticacion from "./../components/selector-factor-autenticacion/factoresAutenticacion.js";
import RecuperarUsuario from "./../components/recuperar-usuario/recuperar-usuario.js"
import Login from "../components/login/login.jsx";
import { HashRouter, Redirect, Switch,Route } from "react-router-dom";
import { EmptyLayout, LayoutRoute } from "../layout/index.js";


export const RouterPublic = () => {
  return (
    <HashRouter>
      <Switch>
        {/*Se cambia a layoute route para incluir estilos globales como temas en las rutas */}
        <LayoutRoute
          exact
          path="/login"
          layout={EmptyLayout}
          component={Login}
        />
        <Route  path="/MultipleCuit" component={Mcuits} />
        <Route  path="/FactoresAutenticacion" component={FactoresAutenticacion} />
        <Route  path="/RecuperarUsuario" component={RecuperarUsuario} />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
};
