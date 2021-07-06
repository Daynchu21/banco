import React from "react"
import HeaderComponent from "../../modulos/header/header"
import "./validacion_metodos.scss"
import { Link } from 'react-router-dom';


export default function Vmetodos ()
{


    var datos={
        "estado": "0",
        "validadores": [
          {
            "id": "SOFT_TOKEN",
            "descripcion": "Soft Token"
          },
          {
            "id": "TARJETA_COORDENADAS",
            "descripcion": "Tarjeta de coordenadas"
          },
          {
            "id": "SMS_TOKEN",
            "descripcion": "SMS al 11***02"
          },
          {
            "id": "EMAIL_TOKEN",
            "descripcion": "Email a gs***@hipotecario.com.ar"
          }
        ]
      }



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
                    {/* <Link to={{ pathname: "/Recuperacion_metodos",  state: {codigo: 1 }, }}>
                    <button id="Inputs" >Soft token</button>
                    </Link>
                    <Link to={{ pathname: "/Recuperacion_metodos",  state: {codigo: 2 }, }}>
                    <button id="Inputs" >Tarjeta de Coordenadas</button>
                    </Link>
                    <Link to={{ pathname: "/Recuperacion_metodos",  state: {codigo: 3 }, }}>
                    <button id="Inputs" >Sms al 11-12</button>
                    </Link>
                    <Link to={{ pathname: "/Recuperacion_metodos",  state: {codigo: 4 }, }}>
                    <button id="Inputs" >Email al @casca</button>
                    </Link> */}
        {  (datos.validadores).map(function(obj) {
         return (
         <Link to={{ pathname: "/Recuperacion_metodos",  state: {codigo: obj.id }, }}>
         <button className="botonEmpresa" value={obj.id} key={obj.id} >{obj.descripcion}</button>
         </Link>)
        })}


                </div>

            </div>
        </div>
    )
}