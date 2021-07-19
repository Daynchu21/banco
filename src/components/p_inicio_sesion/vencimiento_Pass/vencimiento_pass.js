import React,{useState} from 'react';
import HeaderComponent from "../../modulos/header/header";
import HeaderMobile from '../../modulos/headerMobile/headerMobile'
import "./vencimiento_pass.scss"
import eye_open from "../../../assets/iconos/eye_open.svg"
import eye_close from "../../../assets/iconos/eye_close.svg"
import { Link,Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { recuperoClaveExpirada } from "../../../actions/validaciones/recupero";

export default function Vcontraseña () {
    const [btnDisabled, setbtnDisabled] = useState(false);
    const [tipo, setTipo] = useState(false);
    const [borderError, setBorderError] = useState(false);
    const [DatosUsuario,SetDatosUsuarios] = useState({
        pass1: '',
        pass2: ''
    })

    const dispatch = useDispatch();
    const validaciones = useSelector((state) => state.auth);
    const data = useSelector((state) => state.auth);

    const handleChange=(e)=>{
        SetDatosUsuarios({
            ...DatosUsuario,
            [e.target.name] : e.target.value
        })

        if(DatosUsuario.pass1 !== '' || DatosUsuario.pass2 !== ''){
            setbtnDisabled(true);
        }        
    }

    const ocultarContraseña = () => {
        setTipo(tipo ? false : true);
    }   

    const validarContraseña = () => {
        if(DatosUsuario.pass1 === DatosUsuario.pass2 && DatosUsuario.pass1 !== '' && DatosUsuario.pass2 !== ''){
            dispatch(recuperoClaveExpirada(validaciones.validaciones,DatosUsuario.pass1))
            setBorderError(false);
        }else{
            setBorderError(true);
            /* console.log(dispatch(recupero(DatosUsuario.pass1))); */
        }
    }

    return(
        <div>
             {data.user !== null ? <Redirect to={{pathname: '/NuevaClaveSucces'}}/>   :
            <div>
            <div id="header_desktop">
                <HeaderComponent />
            </div>
            <div id="header_mobile">
                <HeaderMobile path={'/login'}/>
            </div>
            <div id="containerForm">            
                <div className="containerforRusuarioGrid">
                    <h1>Creá tu nueva clave</h1>
                </div>    
                <div id="inputPosition" >
                    <input 
                    type={tipo ? "text" : "password"} name="pass1" onChange={handleChange} 
                    id={(borderError ? 'error' : 'inputBlancoVctoPass')}
                    placeholder="Nueva clave" />
                    <label onClick={() => {ocultarContraseña()}}>
                    {tipo ? <img src={eye_open} alt="ojo" id="inputImg"/> : <img src={eye_close} alt="ojo" id="inputImg"/> }
                    </label>
                </div>            
                <div id="inputPosition">
                    <input 
                    type={tipo ? "text" : "password"} name="pass2" onChange={handleChange} 
                    id={(borderError ? 'error' : 'inputBlancoVctoPass')}
                    placeholder="Repetir Nueva clave" /> 
                    <label onClick={() => {ocultarContraseña()}}>
                    {tipo ? <img src={eye_open} alt="ojo" id="inputImg"/> : <img src={eye_close} alt="ojo" id="inputImg"/> }
                    </label>                    
                </div>   
                <div>
                    <h4 id="containerText">
                        La clave debe ser de 8 a 14 caracteres.<br/>
                        Debe contener letras, números y al menos un caracter en mayúscula.
                    </h4>
                </div>
                <div id="containerformBTNVctoPass">
                    <div>
                        <Link to="/Login" replace >
                            <button id="buttonWhite">Cancelar</button>
                        </Link>                    
                    </div>
                    <div>
                        <button 
                            id="buttonGreen"
                            disabled={!btnDisabled}
                            onClick={() => {validarContraseña()}}>
                            Continuar
                        </button>
                    </div>
                </div>    
            </div>

            </div>
            }
        </div>
    )
}