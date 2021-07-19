import React from 'react'
import HeaderComponent from '../../modulos/header/header'
import "./nClaveSucces.scss"
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {logout} from "../../../actions/auth"


export default function Nclave (){
    const dispatch = useDispatch();
    const success = () =>{
        dispatch(logout())
    }


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
                <Link to={location => ({ ...location, pathname: "/login" })} onClick={() => {success()}}>
                <button  className="botonSiguiente" >Aceptar</button>
                </Link>
            </div>
            </div>
        </div>
    )
}