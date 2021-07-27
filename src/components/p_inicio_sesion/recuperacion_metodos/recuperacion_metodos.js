import React,{useState,useEffect} from "react"
import HeaderComponent from "../../modulos/header/header"
import "./recuperacion_metodos.scss"
import { useLocation } from "react-router-dom";
import { Link,Redirect } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import {validarToken,validarTokenTCO} from "../../../actions/validaciones/recupero"
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

    const [DatosUsuario,SetDatosUsuarios] = useState({
        token: '',
        T1: '',
        T2: ''
    })
  const data = useSelector((state) => state.retrieve )

    useEffect(() => {
        if(data.user !== null)
        {
            setT1(data.user.coordenada1)
            setT2(data.user.coordenada2)
        }
      },[data.user]);

    // const [token,setToken] = useState("")
    const [T1,setT1] = useState("")
    const [T2,setT2] = useState("")
  const { codigo,descripcion } = location.state
// var codigo ="TARJETA_COORDENADAS"
// var descripcion ="pepe"
//   const data1 = useSelector((state) => state.retrieve);
    const dispatch = useDispatch();

  const validarMetodoSeleccionado = () =>{
      if(codigo === "TARJETA_COORDENADAS")
      {
        dispatch(validarTokenTCO(DatosUsuario.T1,DatosUsuario.T2))
      }else
      {
        dispatch(validarToken(DatosUsuario.token,codigo))
      }
    
  }

  const handleChange =(e) =>{
    SetDatosUsuarios({
        ...DatosUsuario,
        [e.target.name] : e.target.value
    })

    if(DatosUsuario.T2 !== '' ||  DatosUsuario.T1 !== '' || DatosUsuario.token !== ''){
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
        {   (codigo === "SMS_TOKEN" && (<div><Sms name={descripcion}/>
            <div>
         <input placeholder="Código de acceso" id="Inputs" name="token" onChange={handleChange}></input>
         </div>
                                        </div>) ) 
        || (codigo === "SOFT_TOKEN" && (<div><SoftToken name={descripcion}/>
             <div>
         <input placeholder="Código de acceso" id="Inputs" name="token" onChange={handleChange}></input>
         </div>
                                        </div>))
        || (codigo === "TARJETA_COORDENADAS" && (<div ><TCordenadas name={descripcion}/> <div style={{"display": "grid", 
        "grid-gap": "1em",
        "grid-template-columns": "repeat(2,4rem)",
        "justify-content": "center",
       " text-align":" -webkit-center"}}>
            <input placeholder={T1} id="Inputs" name="T1" onChange={handleChange}></input>
            <input placeholder={T2} id="Inputs" name="T2" onChange={handleChange}></input>
            </div>
                                           </div>))
        || (codigo === "EMAIL_TOKEN" && (<div><Email name={descripcion}/>
         <div>
         <input placeholder="Código de acceso" id="Inputs" name="token" onChange={handleChange}></input>
         </div>
                                        </div>))
        }
        </div>

                     {/* <div>
                     <input placeholder="Código de acceso" id="Inputs" name="token" onChange={handleChange}></input>
                 </div> */}
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