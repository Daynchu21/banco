import React from "react";
import { useSelector } from "react-redux";
import { Switch, Redirect, HashRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";



import Mcuits from "../components/multiple-cuit/multipleCuitComponent.js";
import FactoresAutenticacion from "../components/p_inicio_sesion/selector-factor-autenticacion/factoresAutenticacion.js"
import RecuperarUsuario from "../components/p_inicio_sesion/recuperar-usuario/recuperar-usuario.js";
import RecuperarUsuarioSucces from "../components/p_inicio_sesion/recuperar-success/recuperar-success.js"
import RecuperoPass from "../components/p_inicio_sesion/olvido_pass/olvido_pass";
import Login from "../components/login/login.jsx";
import Dashboard from '../components/dashboard/dashboard.js'
import Vmetodos from "../components/p_inicio_sesion/validacion_metodos/validacion_metodos";
import Vcontraseña from "../components/p_inicio_sesion/vencimiento_Pass/vencimiento_pass";
import Rmetodos from "../components/p_inicio_sesion/recuperacion_metodos/recuperacion_metodos";
import Nclave from "../components/p_inicio_sesion/nuevaClaveSucces/nClaveSucces";

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
    <PublicRoute path="/RecuperarUsuarioSucces" component={RecuperarUsuarioSucces} isAuthenticated={isLoggedIn}/>
    <PublicRoute path="/RecuperoPass" component={RecuperoPass} isAuthenticated={isLoggedIn}/>
    <PublicRoute path="/ValidaMetodos" component={Vmetodos} isAuthenticated={isLoggedIn}/>
    <PublicRoute path="/Vencimiento_contraseña" component={Vcontraseña} isAuthenticated={isLoggedIn}/>
    <PublicRoute path="/Recuperacion_metodos" component={Rmetodos} isAuthenticated={isLoggedIn}/>
    <PublicRoute path="/NuevaClaveSucces" component={Nclave} isAuthenticated={isLoggedIn}/>


    
    {/* <PublicRoute path="/Vencimiento_contraseña" component={Vcontraseña} isAuthenticated={isLoggedIn}/> */}
    {/* aca se agregan las rutas que se van a poder ver con el usuario logueado */}
    <PrivateRoute path="/home" component={Dashboard} isAuthenticated={isLoggedIn} />

        <Redirect  to="/login" />
      </Switch>
    </HashRouter>
  );
};
