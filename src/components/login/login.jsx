import './login.scss'
import './../modulos/button/button.scss'
import Button from './../modulos/button/button'
import React,{useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { useMediaQuery } from 'react-responsive'
import { Redirect,Link,useRouteMatch } from "react-router-dom";

import HeaderComponent from "./../modulos/header/header"
import HeaderComponentMobile from "./../modulos/headerMobile/headerMobile.js"

import FooterComponent from '../modulos/footer/footer';
import FooterComponentMobile from '../modulos/footerMobile/footerMobile.js'
// const axios = require('axios');
// const Swal = require('sweetalert2')
import eye_open from "../../assets/iconos/eye_open.svg"
import eye_close from "../../assets/iconos/eye_close.svg"

export default function Login() {

    const [DatosUsuario,SetDatosUsuarios] = useState({
        Usuario: '',
        Pass: ''
    })
    const [passShow,SetpassShow] = useState(false)
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-device-width: 1224px)'
    // })
    // const isTabletOrMobileDevice = useMediaQuery({
    //     query: '(max-device-width: 1224px)'
    // })
    //const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })




    
    //   const isTabletOrMobileDevice = useMediaQuery({
    //     query: "(max-device-width: 22.5em)",
    //   });

    
    //   const isDesktopOrLaptop = useMediaQuery({
    //     query: "(min-device-width: 22.6em)",
    //   });
    
    //   const isBigScreen = useMediaQuery({
    //     query: "(min-device-width: 1201px )",
    //   });


   const [Enviado,SetEnviado] = useState(false)
   const data = useSelector((state) => state.auth )

//    const { isLoggedIn } = useSelector((state) => state.auth);
   const { message } = useSelector((state) => state.message);
   const dispatch = useDispatch();


   const handleChange =(e) =>{
    SetDatosUsuarios({
        ...DatosUsuario,
        [e.target.name] : e.target.value
    })
    }

  const  handleSubmit= (e) => {
    e.preventDefault()
    SetEnviado(true)
    console.log(process.env )

    if (!DatosUsuario.Pass && !DatosUsuario.Usuario)
    {
        console.log("por favor complete los datos")
    }else
    {
        dispatch(login(DatosUsuario.Usuario,DatosUsuario.Pass))
        .then(() => {
            // props.history.push("/");
           // window.location.reload();
          })
          .catch(() => {
           
          });


    //    axios.post('http://backend-unificado-canales-desa.appd.bh.com.ar/ob/api/login', {
    //     usuario: DatosUsuario.Usuario,
    //     clave: DatosUsuario.Pass
    //       })
    //       .then(function (response) {
    //           if((response.data).hasOwnProperty('datos'))
    //           {
    //             Swal.fire('Login Exitoso', response.data.datos.cuit, 'success')
    //           }else
    //           {
    //             Swal.fire('', "Los datos ingresados no son válidos", 'error')
    //           }
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    }

}
const ocultarContraseña = () => {
    SetpassShow(passShow ? false : true);
}
return(
    <div >
    {data.user !== null ? <Redirect to={{pathname: '/MultipleCuit'}}/>   :
    // isDesktopOrLaptop && 
    // {/* <div> style={{width: "1440px",height: "1024px",color:"black", backgroundColor:"black"}}> */}
    <div id="container">
        <HeaderComponent />
        <div id="containerform">
            <form name="form" onSubmit={handleSubmit} id="FormContainer">
            <h1 id="titulo">
                ¡Bienvenido a Office Banking!
                </h1>
            {/* <div className="InputsGrow" style={{marginTop:"10px"}}> */}
                <div  className={'form-group' + ( !DatosUsuario.Usuario ? ' has-error' : '')} >
                    <input type="text" id="inputBlanco" name="Usuario" placeholder="Usuario"  onChange={handleChange} />
                </div>
                <div className={'form-group' + ( !DatosUsuario.Pass ? ' has-error' : '')} >
                    <input type={passShow ? "text" : "password"} id="inputBlanco" name="Pass" placeholder="Contraseña" onChange={handleChange} />
                    <label onClick={() => {ocultarContraseña()}} id="inputIm">
                    {passShow ? <img src={eye_open} alt="ojo" style={{"margin-bottom": "-1em", "margin-left": "-3em"}} /> : <img src={eye_close} alt="ojo" style={{"margin-bottom": "-1em", "margin-left": "-3em"}}/> }
                    </label>  
                    { typeof message !== 'undefined' && (message.estado === 'USUARIO_INVALIDO' || message.estado === 'CLAVE_INVALIDA' ) &&
                        <div className="help-block" style={{color:"red", fontFamily:"Roboto"}}>Los datos ingresados son incorrectos</div>
                    }
                    { typeof message !== 'undefined' && (message.estado === 'USUARIO_BLOQUEADO') &&
                        <div className="help-block" style={{color:"red", fontFamily:"Roboto"}}>El usuario se encuentra bloqueado</div>
                    }
                </div>
                {/* </div> */}

                <div  id="container_check_destokp">
                    <div>
                    <input type="checkbox" name="my-checkbox" id="opt-in"></input>
                    </div>
                    <div style={{paddingTop: "3px"}}>
                    <label id="TextRusuario" >Recordar mi Usuario</label>
                    </div>
                </div>
                {/* <div className="form-group" style={{marginTop:"20px"}}> */}
                    <button id="botonVerde">
                    {/* <Button name="botonVerde" text="Iniciar sesión"/>  */}
                    Iniciar sesión
                    </button>
                {/* </div> */}
                <Link to={location => ({ ...location, pathname: "/FactoresAutenticacion" })} >
                {/* <button name="botonInvisible" text = "¿Tenes problemas para iniciar sesión?" /> */}
                    <button id="invisible">¿Tenes problemas para iniciar sesión?</button>
        </Link>
            </form>
            </div>
            <FooterComponent />
    </div>
           
    }
    </div>
) 
    
}