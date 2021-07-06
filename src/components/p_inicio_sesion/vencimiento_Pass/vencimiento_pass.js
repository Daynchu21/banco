import React,{useState} from 'react';
import HeaderComponent from "../../modulos/header/header";
import "./vencimiento_pass.scss"
import eye_open from "../../../assets/iconos/eye_open.svg"
import eye_close from "../../../assets/iconos/eye_close.svg"
import { Link } from 'react-router-dom';

export default function Vcontraseña () {
    const [tipo, setTipo] = useState(false);
    const [borderError, setBorderError] = useState(false);
    const [DatosUsuario,SetDatosUsuarios] = useState({
        pass1: '',
        pass2: ''
    })

    const handleChange=(e)=>{
        SetDatosUsuarios({
            ...DatosUsuario,
            [e.target.name] : e.target.value
        })
    }

    const ocultarContraseña = () => {
        setTipo(tipo ? false : true);
    }   

    const validarContraseña = () => {
        console.log(DatosUsuario.pass1);

        if(DatosUsuario.pass1 === DatosUsuario.pass2 && DatosUsuario.pass1 !== '' && DatosUsuario.pass2 !== ''){
            console.log("igual");
        }else{
            setBorderError(true);
        }
    }

    return(
        <div>
            <HeaderComponent />
            <div className="containerforRusuario">            
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
                            <button id="botonCancelar">Cancelar</button>
                        </Link>                    
                    </div>
                    <div>
                        <button id="botonContinuar"
                        onClick={() => {validarContraseña()}}>Continuar</button>
                    </div>
                </div>    
            </div>
        </div>
    )
}