import React, { useState } from 'react';
import HeaderComponent from "../../modulos/header/header.js"
import Button from "../../modulos/button/button.js"
import { useDispatch,useSelector } from "react-redux";
import { Link,Redirect } from "react-router-dom";
import {retrieveUser} from "../../../actions/validaciones/recupero"
import "./recuperar-usuario.scss"
import HeaderMobile from '../../modulos/headerMobile/headerMobile'

export default function RecuperarUsuario(){
const [btnDisabled, setbtnDisabled] = useState(false);
const [dni,setDni] = useState("")
const { message } = useSelector((state) => state.message);
const data = useSelector((state) => state.retrieve )

const dispatch = useDispatch();

const handleChange =(e) =>{
    setDni({
        ...dni,
        [e.target.name] : e.target.value
    })

    if(dni !== ''){
        setbtnDisabled(true);
    }  
}

const enviarDni = () =>{
    dispatch(retrieveUser(dni))
    .then(() => {
        // props.history.push("/");
       // window.location.reload();
      })
      .catch(() => {
       
      });
}

    return(
        <div>
            {data.user !== null ? <Redirect to={{pathname: '/RecuperarUsuarioSucces'}}/>   :
            <div >
                <div id="header_desktop">
                    <HeaderComponent />
                </div>
                <div id="header_mobile">
                    <HeaderMobile path={'/FactoresAutenticacion'}/>
                </div>
                <div id="containerforRusuario" >
                <div>
                    <h1 >Recuperar Usuario</h1>
                </div>
                <div className="TituloText">
                    <h3 >Enviaremos su nombre de usuario al email que ha informado en sus datos personales.</h3>
                </div>
                <div >
                <input className="CuitCuilEmpresa" placeholder="D.N.I" name="dni" onChange={handleChange}/></div>
                <div className="containerformBTNRecUsuario">
                    <div className="btnCancelMob">
                        <Link to={location => ({ ...location, pathname: "/FactoresAutenticacion" })} >
                            <button id="buttonWhite">Cancelar</button>
                        </Link>
                    </div>
                    <div>
                        <button id="buttonGreen" disabled={!btnDisabled} className="btnContinueMob" onClick={() => {enviarDni()}} >Continuar</button>
                    </div>
                </div>
            </div>
            </div>
            }
        </div>
    )
}




