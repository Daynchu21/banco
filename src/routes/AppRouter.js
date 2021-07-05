import React from "react";
import { useSelector } from "react-redux";
import { Switch, Redirect, HashRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";



import Mcuits from "../components/multiple-cuit/multipleCuitComponent.js";
import FactoresAutenticacion from "../components/p_inicio_sesion/selector-factor-autenticacion/factoresAutenticacion.js"
import RecuperarUsuario from "../components/p_inicio_sesion/recuperar-usuario/recuperar-usuario.js";
import Login from "../components/login/login.jsx";
import Dashboard from '../components/dashboard/dashboard.js'



export const AppRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const getBasename = () => {
    return `/${process.env.PUBLIC_URL.split("/").pop()}`;
  };

  return (
    /**Se hizo el cambio a hashROuter para manejar rutas fisicas en el redirect. En rutas privadas
     * utilizar rutas normales.
     * el prefijo publicRoute valida si el usuario esta logeado para ver esa ruta
     */
    <HashRouter basename={getBasename()}>
      <Switch>
     <PublicRoute path="/login" component={Login} isAuthenticated={isLoggedIn}  />
    <PublicRoute path="/MultipleCuit" component={Mcuits} isAuthenticated={isLoggedIn} />
    <PublicRoute path="/FactoresAutenticacion" component={FactoresAutenticacion} isAuthenticated={isLoggedIn}/>
    <PublicRoute path="/RecuperarUsuario" component={RecuperarUsuario} isAuthenticated={isLoggedIn}/>
    {/* <PublicRoute path="/Vencimiento_contraseña" component={Vcontraseña} isAuthenticated={isLoggedIn}/> */}
    {/* aca se agregan las rutas que se van a poder ver con el usuario logueado */}
    <PrivateRoute path="/home" component={Dashboard} isAuthenticated={isLoggedIn} />

        <Redirect  to="/login" />
      </Switch>
    </HashRouter>
  );
};
