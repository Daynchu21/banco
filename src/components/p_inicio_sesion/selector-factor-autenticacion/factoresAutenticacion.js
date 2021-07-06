import React from 'react';
import HeaderComponent from '../../modulos/header/header'
import FooterComponet from '../../modulos/footer/footer'
import Button from '../../modulos/button/button'
import "./factoresAutenticacion.scss"
import { Link } from "react-router-dom";
import FAvanzar from "../../../assets/iconos/flecha_avanzar.svg"

export default function FactoresAutenticacion(){
    return(
        <div>
            <HeaderComponent />
                <div  className="containerformFA">
                <div>
                <h1 className="itemPorblemasSesion">¿Tenés problemas para iniciar sesión?</h1>
                </div>
               <div className="ButtonsFac">
                <div >
                <Link to={location => ({ ...location, pathname: "/RecuperarUsuario" })} >
                    <Button name="botonFA" text="Olvidé mi usuario" />
                    <label>
                    <img src={FAvanzar} alt="flecha" style={{"margin-bottom": "-1em"}} />
                    </label>
                    </Link>
                    </div>
                <div >
                <Link to={location => ({ ...location, pathname: "/OlvidarPass",state: {codigo: 1 } })} >
                    <Button name="botonFA" text="Olvidé mi contraseña" />
                    <label>
                    <img src={FAvanzar} alt="flecha" style={{"margin-bottom": "-1em"}} />
                    </label>
                    </Link>
                    </div>
                <div >
                <Link to={location => ({ ...location, pathname: "/OlvidarPass",state: {codigo: 2 }  })} >
                    <Button name="botonFA" text="Se me bloqueo mi contraseña" />
                    <label>
                    <img src={FAvanzar} alt="flecha" style={{"margin-bottom": "-1em"}} />
                    </label>
                    </Link>
                </div>
                </div>
                </div>
            <FooterComponet />
        </div>
    )
}




