import React from 'react';
import HeaderComponent from '../../modulos/header/header'
import HeaderMobile from '../../modulos/headerMobile/headerMobile'
import FooterComponet from '../../modulos/footer/footer'
import Button from '../../modulos/button/button'
import "./factoresAutenticacion.scss"
import { Link } from "react-router-dom";
import FAvanzar from "../../../assets/iconos/flecha_avanzar.svg"

export default function FactoresAutenticacion(){

    return(
        <div>
            <div id="header_desktop">
                <HeaderComponent />
            </div>
            <div id="header_mobile">
                <HeaderMobile path={'/login'}/>
            </div>
            <div id="containerformFA">
                <div>
                    <h1 className="itemPorblemasSesion">¿Tenés problemas para iniciar sesión?</h1>
                </div>
               <div id="ButtonsFac">
                <div >
                <Link to={location => ({ ...location, pathname: "/RecuperarUsuario" })} >
                     <label>
                    <button className="botonFA" >Olvidé mi usuario</button>
                    <img src={FAvanzar} alt="flecha" style={{"margin-left": "-2em"}} />
                    </label>
                    </Link>
                    </div>
                <div >
                <Link to={location => ({ ...location, pathname: "/RecuperoPass" })} >
                <label>
                    <button className="botonFA" >Olvidé o Bloqueé mi clave</button>
                    <img src={FAvanzar} alt="flecha" style={{"margin-left": "-2em"}} />
                    </label>
                    </Link>
                    </div>
                {/* <div >
                <Link to={location => ({ ...location, pathname: "/RecuperoPass",state: {codigo: 2 }  })} >
                    <label>
                    <button className="botonFA" >Se me bloqueo mi contraseña</button>
                    <img src={FAvanzar} alt="flecha" style={{"margin-left": "-2em"}} />
                    </label>
                    </Link>
                </div> */}
                </div>
                </div>
                <div id="footer_desktop">
                    <FooterComponet />
                </div>
        </div>
    )
}




