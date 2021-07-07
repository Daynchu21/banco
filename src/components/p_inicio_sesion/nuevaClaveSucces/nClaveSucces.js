import React from 'react'
import HeaderComponent from '../../modulos/header/header'
import "./nClaveSucces.scss"
import { Link } from "react-router-dom";


export default function Nclave (){

    return (
        <div>
            <HeaderComponent/>
            <div id="ContainerNclave">
            <div>
            <img></img>
            </div>
            <div>
            <h1>
            ¡Cambiaste tu clave con éxito!
            </h1>
            </div>
            <div>
            <h3>Volvé a iniciar con tu nueva clave.</h3>
            </div>
            <div>
                <Link to={location => ({ ...location, pathname: "/login" })}>
                <button  className="botonSiguiente" >Aceptar</button>
                </Link>
            </div>
            </div>
        </div>
    )
}