import React from 'react';
import HeaderComponent from './../modulos/header/header'
import Button from './../modulos/button/button'
import "./recuperar-usuario.scss"

export default function RecuperarUsuario(){

    return(
        <div>
            <HeaderComponent />
                <div className="containerforRusuario">
                <div>
                    <h1 className="item1">Recuperar Usuario</h1>
                <h2 className="">Enviaremos su nombre de usuario al email que ha informado en sus datos personales.</h2>
                </div>
                <div className=""><input className="CuitCuilEmpresa" placeholder="Cuit/Cuil" /></div>
                <div className="containerformBTNRecUsuario">
            
            <div><Button name="botonCerrarSesion" text="Cerrar sesión" /></div>
            <div><Button name="botonSiguiente" text="Seleccionar" /></div>
            </div>
            </div>
            
        </div>
    )
}




