import React from "react"
import HeaderComponent from "../../modulos/header/header"
import "./olvido_pass.scss"
import { Link } from 'react-router-dom';
// import { useLocation } from "react-router-dom";

export default function RecuperoPass (){

    // const location = useLocation()
    // const { codigo } = location.state

    return(
        <div>
            <HeaderComponent/>
            <div id="ContainerOpass">
                <div id="TituloText">
                    {/* {(codigo === 1 && <div> </div>) 
                    || (codigo === 2 && <div> <h1>¿Se bloqueo tu clave?</h1></div>)} */}
               <h1>¿Olvidaste o bloqueaste tu clave?</h1>
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
                <Link to={location => ({ ...location, pathname: "/FactoresAutenticacion" })} >
                    <button className="botonCerrarSesion">Cancelar</button>
                    </Link>
                    <Link to={{ pathname: "/ValidaMetodos" }}>
                    <button className="botonSiguiente">Continuar</button>
                    </Link>
                </div>
            
            </div>
        </div>
    )
}