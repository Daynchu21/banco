import React from "react"
import HeaderComponent from "../../modulos/header/header"
import "./recuperacion_metodos.scss"
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';




function Sms (props){
    return(
        <div>
            <div>
                <h1>Ingresá el código de acceso</h1>
            </div>
            <div>
            <h3>Te enviamos el código por SMS al 11*****21</h3>
            </div>
        </div>
    )
}


function SoftToken (props){
    return(
        <div>
            <div>
                <h1>Ingresá el código de acceso</h1>
            </div>
            <div>
            <h3>Ingresá el Token que aparece en la Aplicación de Soft Token</h3>
            </div>
        </div>
    )
}

function TCordenadas (props){
    return(
        <div>
            <div>
                <h1>Ingresá los números de su tarjeta de coordenadas</h1>
            </div>
            <div>
            <h3>Ingresá los números de las siguientes coordenadas de su tarjeta ····50</h3>
            </div>
        </div>
    )
}


function Email (props){
    return(
        <div>
            <div>
                <h1>Ingresá el código de acceso</h1>
            </div>
            <div>
            <h3>Te enviamos el código por Email al m······@softmedia.com.ar</h3>
            </div>
        </div>
    )
}


export default function Rmetodos(props)
{
    const location = useLocation()
  const { codigo } = location.state

    return (
        <div>
            <HeaderComponent/>
            <div id="ContainerRMetodos">
                 <div>
        {   (codigo === "SMS_TOKEN" && <Sms name={"david"}/>) 
        || (codigo === "SOFT_TOKEN" && <SoftToken name={"leo"}/>)
        || (codigo === "TARJETA_COORDENADAS" && <TCordenadas name={"casa"}/>)
        || (codigo === "EMAIL_TOKEN" && <Email name={"csa"}/>)
        }
        </div>

                     <div>
                     <input placeholder="Código de acceso" id="Inputs"></input>
                 </div>
                 <div id="buttons">
                 <Link to={location => ({ ...location, pathname: "/ValidaMetodos" })} >
                     <button className="botonCerrarSesion">Cancelar</button>
                     </Link>
                     <button className="botonSiguiente">Continuar</button>
                 </div>


         
         </div>
        </div>
    )
}