import './login.scss'
import './../modulos/button/button.scss'
import Button from './../modulos/button/button'
import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { useMediaQuery } from 'react-responsive'

import HeaderComponent from "./../modulos/header/header"
import FooterComponent from '../modulos/footer/footer';
// const axios = require('axios');
// const Swal = require('sweetalert2')


export default function Login() {

    const [DatosUsuario,SetDatosUsuarios] = useState({
        Usuario: '',
        Pass: ''
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
   const [Enviado,SetEnviado] = useState(false)
//    const { isLoggedIn } = useSelector((state) => state.auth);
//    const { message } = useSelector((state) => state.message);
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
            window.location.reload();
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

return(
    <div >
    {isDesktopOrLaptop && <>
    {/* <div> style={{width: "1440px",height: "1024px",color:"black", backgroundColor:"black"}}> */}
    <div className="container">
        <HeaderComponent />
        <div className="containerform">
            <form name="form" onSubmit={handleSubmit}>
            <div className={"centerTextDiv"}>
            <div className="margenIzquierdo">
            <h1 >
                ¡Bienvenido a Office Banking!
                </h1>
                <div className={'form-group' + ( !DatosUsuario.Usuario ? ' has-error' : '')} >
                    <input type="text" className="form-control" name="Usuario" placeholder="Usuario"  onChange={handleChange} />
                </div>
                <div className={'form-group' + ( !DatosUsuario.Pass ? ' has-error' : '')} >
                    <input type="password" className="form-control" name="Pass" placeholder="Contraseña" onChange={handleChange} />
                    { Enviado && !DatosUsuario.Pass &&
                        <div className="help-block" style={{color:"red"}}>Los datos ingresados son incorrectos</div>
                    }
                </div>
                <div  className="container_check_destokp">
                    <div>
                    <input type="checkbox" name="my-checkbox" id="opt-in"></input>
                    </div>
                    <div style={{"padding-top": "3px"}}>
                    <label for="opt-in" >Recordar mi Usuario</label>
                    </div>
                </div>
                <div className="form-group" >
                    {/* <button className="btn btn-primary" >Login</button> */}
                    <Button name="botonVerde" text="Iniciar sesión"/> 
                    <Button name="botonBlanco" text="Crear cuenta empresa" />                     
                </div>
                <Button name="botonInvisible" text = "¿Tenes problemas para iniciar sesión?" />
                </div>
                <hr></hr>
                <div className="margenIzquierdo">
                    <Button name="botonBlanco" text="Crear Cuenta Empresa" />
                    </div>
                </div>
            </form>
            </div>
            
            <FooterComponent />
    </div>
    </>}
    {isTabletOrMobileDevice &&
    
    <form name="form" onSubmit={handleSubmit} >
            <h1 style={{margin:"16px"}}>
                ¡Bienvenido a Office Banking!
                </h1>
                <div className={'form-group' + ( !DatosUsuario.Usuario ? ' has-error' : '')} >
                    <input type="text" className="form-control" name="Usuario" placeholder="Usuario"  onChange={handleChange} />
                    {Enviado && !DatosUsuario.Usuario &&
                        <div className="help-block" style={{color:"red"}}>Ingrese Usuario</div>
                    }
                </div>
                <div className={'form-group' + ( !DatosUsuario.Pass ? ' has-error' : '')} >
                    <input type="password" className="form-control" name="Pass" placeholder="Contraseña" onChange={handleChange} />
                    { Enviado && !DatosUsuario.Pass &&
                        <div className="help-block" style={{color:"red"}}>Ingrese Contraseña</div>
                    }
                </div>
                <div className="container_check">
                    <div className="left_check">
                <input type="checkbox" name="my-checkbox" id="opt-in" />
                </div>
                <div className="right_check">
                <label className="text_check">Recordar mi usuario</label>
                </div>
                </div>
                <div className="form-group" >
                    <Button name="botonVerde" text="Iniciar sesión"/> 
                    <h1>¿Tenes problema para el inicio de sesion?</h1>
                    <Button name="botonBlanco" text="Crear cuenta empresa" />                     
                </div>
            </form>

    }
    </div>
) 
    
}