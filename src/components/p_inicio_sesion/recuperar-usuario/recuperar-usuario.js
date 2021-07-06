import React from 'react';
import HeaderComponent from "../../modulos/header/header.js"
import Button from "../../modulos/button/button.js"
import "./recuperar-usuario.scss"
import { Link } from "react-router-dom";


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
                <div>
                <Link to={location => ({ ...location, pathname: "/FactoresAutenticacion" })} >
                    <Button name="botonCerrarSesion" text="Cancelar" />
                    </Link>
                    </div>
                <div>
                    <button className="botonSiguiente"  >Continuar</button>
                    </div>
            </div>
            </div>
            
        </div>
    )
}




