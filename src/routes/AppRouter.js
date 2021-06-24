import React from "react";
import { useSelector } from "react-redux";
import { Switch, Redirect, HashRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { RouterPrivate } from "./RouterPrivate";
import { RouterPublic } from "./RouterPublic";

export const AppRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const getBasename = () => {
    return `/${process.env.PUBLIC_URL.split("/").pop()}`;
  };

  return (
    /**Se hizo el cambio a hashROuter para manejar rutas fisicas en el redirect. En rutas privadas
     * utilizar rutas normales.
     */
    <HashRouter basename={getBasename()}>
      <Switch>
        <PublicRoute
          path="/"
          component={RouterPublic}
          isAuthenticated={isLoggedIn}
        />
        {/* <PublicRoute
          path="/MultipleCuit"
          component={RouterPublic}
          isAuthenticated={isLoggedIn}
        />
        <PublicRoute
          path="/FactoresAutenticacion"
          component={RouterPublic}
          isAuthenticated={isLoggedIn}
        />
        <PublicRoute
          path="/RecuperarUsuario"
          component={RouterPublic}
          isAuthenticated={isLoggedIn}
        /> */}
        <PrivateRoute
          exact
          path="/"
          component={RouterPrivate}
          isAuthenticated={isLoggedIn}
        />
        <Redirect to="/login" />
      </Switch>
    </HashRouter>
  );
};
