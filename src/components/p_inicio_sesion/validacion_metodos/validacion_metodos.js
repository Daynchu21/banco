import React from "react"
import HeaderComponent from "../../modulos/header/header"
import "./validacion_metodos.scss"

export default function Vmetodos ()
{
    return(
        <div>
            <HeaderComponent/>
            <div id="ContainerVmetodos">
            <div>
                <h1>
                    ¿Adonde te enviamos el código de acceso?
                </h1>
            </div>
                <div id="Buttons">
                    <button id="Inputs" >Soft token</button>
                    <button id="Inputs" >Tarjeta de Coordenadas</button>
                    <button id="Inputs" >Sms al 11-12</button>
                    <button id="Inputs" >Email al @casca</button>
                </div>

            </div>
        </div>
    )
}