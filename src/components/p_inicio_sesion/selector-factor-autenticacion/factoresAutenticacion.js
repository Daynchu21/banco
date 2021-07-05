import React from 'react';
import HeaderComponent from '../../modulos/header/header'
import FooterComponet from '../../modulos/footer/footer'
import Button from '../../modulos/button/button'
import "./factoresAutenticacion.scss"
import { Link } from "react-router-dom";


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
                    </Link>
                    </div>
                <div >
                    <Button name="botonFA" text="Olvidé mi contraseña" />
                    </div>
                <div >
                    <Button name="botonFA" text="Se me bloqueo mi contraseña" />
                </div>
                </div>
                </div>
            <FooterComponet />
        </div>
    )
}




