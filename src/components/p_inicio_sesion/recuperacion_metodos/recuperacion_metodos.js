import React,{useState} from "react"
import HeaderComponent from "../../modulos/header/header"
import "./recuperacion_metodos.scss"
import { useLocation } from "react-router-dom";
import { Link,Redirect } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import {validarToken} from "../../../actions/validaciones/recupero"
import HeaderMobile from '../../modulos/headerMobile/headerMobile'

function Sms (props){
    return(
        <div>
            <div>
                <h1>Ingresá el código de acceso</h1>
            </div>
            <div>
            <h3>Te enviamos el código por {props.name}</h3>
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
            <h3>Ingresá el Token que aparece en la Aplicación de {props.name}</h3>
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
            <h3>Ingresá los números de las siguientes {props.name}</h3>
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
            <h3>Te enviamos el código al {props.name}</h3>
            </div>
        </div>
    )
}


export default function Rmetodos()
{
    const [btnDisabled, setbtnDisabled] = useState(false);
    const location = useLocation()
    const [token,setToken] = useState("")
  const { codigo,descripcion } = location.state
//   const { message } = useSelector((state) => state.message);
  const data = useSelector((state) => state.retrieve )
    const dispatch = useDispatch();

  const validarMetodoSeleccionado = () =>{
    dispatch(validarToken(token.token))
    
  }

  const handleChange =(e) =>{
    setToken({
        ...token,
        [e.target.name] : e.target.value
    })

    if(token !== ''){
        setbtnDisabled(true);
    } 
    }

    return (
        <div>
            {data.validador === null ? <Redirect to={{pathname: '/Vencimiento_contraseña'}}/>   :
            <div>
            <div id="header_desktop">
                <HeaderComponent />
            </div>
            <div id="header_mobile">
                <HeaderMobile path={'/ValidaMetodos'}/>
            </div>
            <div id="ContainerRMetodos">
                 <div>
        {   (codigo === "SMS_TOKEN" && <Sms name={descripcion}/>) 
        || (codigo === "SOFT_TOKEN" && <SoftToken name={descripcion}/>)
        || (codigo === "TARJETA_COORDENADAS" && <TCordenadas name={descripcion}/>)
        || (codigo === "EMAIL_TOKEN" && <Email name={descripcion}/>)
        }
        </div>

                     <div>
                     <input placeholder="Código de acceso" id="Inputs" name="token" onChange={handleChange}></input>
                 </div>
                 <div id="buttons">
                    <div className="btnCancelMob">
                        <Link to={location => ({ ...location, pathname: "/ValidaMetodos" })} >
                        <button id="buttonWhite">Cancelar</button>
                        </Link>
                     </div>
                     <div>
                        {/* <button className="botonSiguiente" onClick={() =>{validarMetodoSeleccionado()}}>Continuar</button> */}
                        <button id="buttonGreen" disabled={!btnDisabled} className="btnContinueMob" onClick={() =>{validarMetodoSeleccionado()}}>Continuar</button>
                     </div>
                 </div>


         
         </div>
         </div>
            }
        </div>
    )
}