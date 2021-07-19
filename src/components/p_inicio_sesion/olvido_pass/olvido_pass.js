import React, { useState } from "react"
import HeaderComponent from "../../modulos/header/header"
import HeaderMobile from '../../modulos/headerMobile/headerMobile'
import "./olvido_pass.scss"
import { Link,Redirect } from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import {olvidoBloqueoUser} from "../../../actions/validaciones/recupero"
import ENV from "../../../env";
export default function RecuperoPass (){
    const [btnDisabled, setbtnDisabled] = useState(false);
    const [borderError, setBorderError] = useState(false);
    const [datosUsuarios,setDatosUsuario] = useState({
        dni:'',
        user:'',
        captcha:''
    })
    const [img,SetImagen] = useState("")
    // const location = useLocation()
    // const { codigo } = location.state
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.retrieve )

    

    const handleChange =(e) =>{
        setDatosUsuario({
            ...datosUsuarios,
            [e.target.name] : e.target.value
        })

        if(datosUsuarios !== ''){
            setbtnDisabled(true);
        } 
        console.log(message)
    }

        const EnviarDatos = () => {
            console.log(datosUsuarios)

            if(datosUsuarios.dni !== '' && datosUsuarios.user !== '' && datosUsuarios.captcha !== ''){
                setBorderError(false);
                console.log(olvidoBloqueoUser(datosUsuarios.dni,datosUsuarios.user,datosUsuarios.captcha));
                dispatch(olvidoBloqueoUser(datosUsuarios.dni,datosUsuarios.user,datosUsuarios.captcha))
                .then(() => {
                    // props.history.push("/");
                // window.location.reload();
                })
                .catch(() => {
                    setBorderError(true);
              });
            }else{
                setBorderError(true);
            }
        }

    return(
        <div>
            {data.validador !== null ? <Redirect to={{pathname: '/ValidaMetodos'}}/>   :
            <div>
                <div id="header_desktop">
                    <HeaderComponent />
                </div>
                <div id="header_mobile">
                    <HeaderMobile path={'/FactoresAutenticacion'}/>
                </div>
                <div id="ContainerOpass">
                    <div id="TituloText">
                        {/* {(codigo === 1 && <div> </div>) 
                        || (codigo === 2 && <div> <h1>¿Se bloqueo tu clave?</h1></div>)} */}
                        <h1>¿Olvidaste o bloqueaste tu clave?</h1>
                        <h3>Ingresa los siguientes datos para que podamos ayudarte</h3>
                    </div>
                    <div id="inputs_Cuits">
                        <input type="text" placeholder="D.N.I" name="dni" id={(borderError ? 'errorCuitCuilEmpresa' : 'cuitCuilEmpresa')} onChange={handleChange}></input>
                        <input type="text" placeholder="Usuario" name="user" id={(borderError ? 'errorCuitCuilEmpresa' : 'cuitCuilEmpresa')} onChange={handleChange}></input>
                    </div>

                    {  (message !== null) ?
                        <div id="message_error" style={{color:"red", fontFamily:"Roboto"}}>Los datos ingresados son incorrectos</div>
                        :
                        ''
                    }
                    
                    <div style={{justifySelf: "center"}}>
                        {/* <img src={"http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/captcha"} /> */}
                        <img src={ENV.BASE_URL+"/ob/api/captcha"} />
                    </div>
                    <div>
                        <input type="text" placeholder="Codigo de verificación" name="captcha" id={(borderError ? 'errorCuitCuilEmpresa' : 'cuitCuilEmpresa')} onChange={handleChange}></input>
                    </div>
                    <div id="buttons">
                        <div className="btnCancelMob">
                            <Link to={location => ({ ...location, pathname: "/FactoresAutenticacion" })} >
                                <button id="buttonWhite">Cancelar</button>
                            </Link>
                        </div>
                        <div>
                            {/* <Link to={{ pathname: "/ValidaMetodos" }}> */}
                            <button id="buttonGreen" disabled={!btnDisabled} className="btnContinueMob" onClick={()=> {EnviarDatos()}}>Continuar</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}