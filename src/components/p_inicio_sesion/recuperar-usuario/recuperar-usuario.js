import React from 'react';
import HeaderComponent from "../../modulos/header/header.js"
import Button from "../../modulos/button/button.js"
import "./recuperar-usuario.scss"

export default function RecuperarUsuario(){

    return(
        <div>
            <HeaderComponent />
                <div className="containerforRusuario">
                <div>
                    <h1 >Recuperar Usuario</h1>
                </div>
                <div className="TituloText">
                    <h3 >Enviaremos su nombre de usuario al email que ha informado en sus datos personales.</h3>
                </div>
                <div >
                <input className="CuitCuilEmpresa" placeholder="Cuit/Cuil" /></div>
                <div className="containerformBTNRecUsuario">
                <div><Button name="botonCerrarSesion" text="Cerrar sesión" /></div>
                <div><Button name="botonSiguiente" text="Seleccionar" /></div>
            </div>
            </div>
            
        </div>
    )
}




