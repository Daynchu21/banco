import './login.scss'
import './../modulos/button/button.scss'
import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect,Link } from "react-router-dom";

import HeaderComponent from "./../modulos/header/header"
import FooterComponent from '../modulos/footer/footer';
import ENV from '../../env';
// const axios = require('axios');
// const Swal = require('sweetalert2')
import eye_open from "../../assets/iconos/eye_open.svg"
import eye_close from "../../assets/iconos/eye_close.svg"

export default function Login() {

    const [DatosUsuario,SetDatosUsuarios] = useState({
        Documento: '',
        Usuario: '',
        Pass: ''
    })
    const [passShow,SetpassShow] = useState(false)
    const [userShow,SetuserShow] = useState(false)
    const [borderError, setBorderError] = useState(false);
    const [errorNet, setErrorNet] = useState(false);

   const [Enviado,SetEnviado] = useState(false)
   const data = useSelector((state) => state.auth )

   const message = useSelector((state) => state.message);
 
   const validaciones = useSelector((state) => state.auth);
   const dispatch = useDispatch();

   const handleChange =(e) =>{       
    SetDatosUsuarios({
        ...DatosUsuario,
        [e.target.name] : e.target.value
    })

    if (!DatosUsuario.Pass || !DatosUsuario.Usuario || !DatosUsuario.Documento)
    {
        setBorderError(false);
    }
    }

    //useEffect(() => {
        /* dispatch(isOnline());
       
        console.log('mensaje', message.message) */
       
        /* if(message.message == "200"){            
            setBorderError(false);
        }else{
            setError(true);
        } */

        /* switch(message.message) {
            case '200':
                console.log('case1');
                setBorderError(false);
            case 'undefined':
                setError(true);
            case 'CLAVE_INVALIDA':
                console.log('case4');
            default:
              return console.log('default');
          } */
    //});

  const  handleSubmit= () => {    
    SetEnviado(true)
    if (!DatosUsuario.Pass && !DatosUsuario.Usuario && !DatosUsuario.Documento)
    {
        setBorderError(true);
        console.log("por favor complete los datos")
    }else
    {
        dispatch(login(DatosUsuario.Documento,DatosUsuario.Usuario,DatosUsuario.Pass))
        .then(result => {
            setBorderError(false);
            setErrorNet(true);
             
            // props.history.push("/");
           // window.location.reload();
          })    
          .catch(
          );
        

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
const ocultarUsuario = () => {
    SetuserShow(userShow ? false : true);
}
return(
    <div >
    {  data.user !== null ? <Redirect to={{pathname: '/MultipleCuit'}}/>   :
    // isDesktopOrLaptop && 
    // {/* <div> style={{width: "1440px",height: "1024px",color:"black", backgroundColor:"black"}}> */}
    (validaciones.validaciones !== null ? <Redirect to={{pathname: '/ChangePassExpiration'}}/> :
   
    <div id="container">
         {console.log(validaciones)}
        <HeaderComponent />
        <div id="containerform">
            <div id="FormContainer">
            <h1 id="titulo">
                ¡Bienvenido a Office Banking!
                </h1>
            {/* <div className="InputsGrow" style={{marginTop:"10px"}}> */}
                          {console.log(ENV.BASE_URL)}
                          {console.log(process.env)  }
                <input type="text" id={(message.message !== null) ? 'errorBorder' : 'inputBlanco'} name="Documento" placeholder="DNI"  onChange={handleChange} />
                
                <div  className={'form-group' + ( !DatosUsuario.Usuario ? ' has-error' : '')} >
                    <input type={userShow ? "text" : "password"} 
                    id={(message.message !== null) ? 'errorBorder' : 'inputBlanco'}
                    name="Usuario" placeholder="Usuario"  onChange={handleChange} />
                    <label onClick={() => {ocultarUsuario()}} id="inputIm">
                    {userShow ? <img src={eye_open} alt="ojo" style={{marginBottom: "-0.5em", marginLeft: "-3em"}} /> : <img src={eye_close} alt="ojo" style={{marginBottom: "-1em", marginLeft: "-3em"}}/> }
                    </label>  
                </div>                

                <div className={'form-group' + ( !DatosUsuario.Pass ? ' has-error' : '')} >
                    <input type={passShow ? "text" : "password"} 
                    id={(message.message !== null) ? 'errorBorder' : 'inputBlanco'}
                     name="Pass" placeholder="Contraseña" onChange={handleChange} />
                    <label onClick={() => {ocultarContraseña()}} id="inputIm">
                    {passShow ? <img src={eye_open} alt="ojo" style={{marginBottom: "-0.5em", marginLeft: "-3em"}} /> : <img src={eye_close} alt="ojo" style={{marginBottom: "-1em", marginLeft: "-3em"}}/> }
                    </label>  
                    
                    {                        
                        errorNet ? <Redirect to={{pathname: '/error'}}/> : ''
                    }

                    { (message.message !== null) ?
                        <div id="help-block" style={{color:"red", fontFamily:"Roboto"}}>Los datos ingresados son incorrectos</div>
                        :
                        ''
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
                    {/* <Button name="botonVerde" text="Iniciar sesión"/>  */}
                <button id="default" onClick={()=> handleSubmit()}>
                    Iniciar sesión
                </button>
                {/* </div> */}
                <Link to={location => ({ ...location, pathname: "/FactoresAutenticacion" })} >
                {/* <Button name="botonInvisible" text = "¿Tenes problemas para iniciar sesión?" /> */}
                <button id="invisible" style={{margin:"10px"}}>
                    ¿Tenés problemas para iniciar sesión?
                </button>

        </Link>
            </div>
            </div>
            <FooterComponent />
    </div>
           )
    
    }
    </div>
) 
    
}