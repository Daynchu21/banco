import React from "react"
import HeaderComponent from "../../modulos/header/header"
import "./olvido_pass.scss"

export default function OlvidoPass (){

    return(
        <div>
            <HeaderComponent/>
            <div id="ContainerOpass">
                <div id="TituloText">
                <h1>¿Olvidaste tu clave?</h1>
                <h3>Ingresa los siguientes datos para que podamos ayudarte</h3>
                </div>
                <div id="inputs_Cuits">
                <input type="text" placeholder="Cuit/Cuil" className="CuitCuilEmpresa" ></input>
                <input type="text" placeholder="Usuario" className="CuitCuilEmpresa"></input>
                </div>
                <div>
                <img></img>
                <input type="text" placeholder="Codigo de verificación" className="CuitCuilEmpresa"></input>
                </div>
                <div id="buttons">
                    <button className="botonCerrarSesion">Cancelar</button>
                    <button className="botonSiguiente">Continuar</button>
                </div>
            
            </div>
        </div>
    )
}