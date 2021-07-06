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
import eye_open from "../../assets/iconos/eye_open.svg"
import eye_close from "../../assets/iconos/eye_close.svg"


export default function Login() {
    let match = useRouteMatch();

    const [DatosUsuario,SetDatosUsuarios] = useState({
        Usuario: '',
        Pass: ''
    })
    const [passShow,SetpassShow] = useState(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1223px)'
    })
    //const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
   const [Enviado,SetEnviado] = useState(false)
   const data = useSelector((state) => state.auth )

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
           // window.location.reload();
          })
          .catch(() => {
           
          });
    }
}

const ocultarContraseña = () => {
    SetpassShow(passShow ? false : true);
}

return(
    <div >
   {data.user !== null ? <Redirect to={{pathname: '/MultipleCuit'}}/>   :
    isDesktopOrLaptop && <>
    {/* <div> style={{width: "1440px",height: "1024px",color:"black", backgroundColor:"black"}}> */}
    <div className="container">
        <HeaderComponent />
        <div className="containerform">
            <form name="form" onSubmit={handleSubmit} className="FormContainer">
                <div className="TextBienvenido">
                 <h1 className="h1Bienvenida">
                ¡Bienvenido a Office Banking!
                </h1>
                </div>

                <div className="InputsGrow" style={{marginTop:"10px"}}>
                <div className={'form-group' + ( !DatosUsuario.Usuario ? ' has-error' : '')} >
                    <input type="text" className="inputBlanco" name="Usuario" placeholder="Usuario"  onChange={handleChange} />
                </div>
                <div className={'form-group' + ( !DatosUsuario.Pass ? ' has-error' : '')} >
                    <input type={passShow ? "text" : "password"} className="inputBlanco" name="Pass" placeholder="Contraseña" onChange={handleChange} />
                    <label onClick={() => {ocultarContraseña()}} id="inputIm">
                    {passShow ? <img src={eye_open} alt="ojo" style={{"margin-bottom": "-1em"}} /> : <img src={eye_close} alt="ojo" style={{"margin-bottom": "-1em"}}/> }
                    </label>  
                    { Enviado && !DatosUsuario.Pass &&
                        <div className="help-block" style={{color:"red"}}>Los datos ingresados son incorrectos</div>
                    }
                </div>
                </div>

                <div  className="container_check_destokp">
                    <div>
                    <input type="checkbox" name="my-checkbox" id="opt-in"></input>
                    </div>
                    <div style={{paddingTop: "3px"}}>
                    <label className="TextRusuario" >Recordar mi Usuario</label>
                    </div>
                </div>
                <div className="form-group" style={{marginTop:"20px"}}>
                    <Button name="botonVerde" text="Iniciar sesión"/> 
                </div>
                {/* <Link to={"/FactoresAutenticacion"}> */}

                    
                <Link to={location => ({ ...location, pathname: "/FactoresAutenticacion" })} >
                <Button name="botonInvisible" text = "¿Tenes problemas para iniciar sesión?" />

        </Link>
            </form>
           
            </div>

            <div className="BotonNempresa">
                    <Button name="botonBlanco" text="Crear Cuenta Empresa" />
                    </div>
            
            <FooterComponent />
    </div>
    </>}
    {isTabletOrMobileDevice &&
    
    <div>
                <HeaderComponentMobile />
    <div className="containerformMobile">
            <form name="form" onSubmit={handleSubmit} className="FormContainer">
                <div className="TextBienvenido">
                 <h1 className="h1Bienvenida">
                ¡Bienvenido a Office Banking!
                </h1>
                </div>

                <div className="InputsGrow" style={{marginTop:"10px"}}>
                <div className={'form-group' + ( !DatosUsuario.Usuario ? ' has-error' : '')} >
                    <input type="text" className="inputBlanco" name="Usuario" placeholder="Usuario"  onChange={handleChange} />
                </div>
                <div className={'form-group' + ( !DatosUsuario.Pass ? ' has-error' : '')} >
                    <input type="password" className="inputBlanco" name="Pass" placeholder="Contraseña" onChange={handleChange} />
                    { Enviado && !DatosUsuario.Pass &&
                        <div className="help-block" style={{color:"red"}}>Los datos ingresados son incorrectos</div>
                    }
                </div>
                </div>

                <div  className="container_check_destokp">
                    <div>
                    <input type="checkbox" name="my-checkbox" id="opt-in"></input>
                    </div>
                    <div style={{paddingTop: "3px"}}>
                    <label className="TextRusuario" >Recordar mi Usuario</label>
                    </div>
                </div>
                <div className="form-group" style={{marginTop:"20px"}}>
                    <Button name="botonVerde" text="Iniciar sesión"/> 
                </div>
                <Button name="botonInvisible" text = "¿Tenes problemas para iniciar sesión?" />
            </form>
           
            </div>
            <div className="BotonNempresaMobile">
                    <Button name="botonBlanco" text="Crear Cuenta Empresa" />
                    </div>
            
            <FooterComponentMobile />
        </div>
    }
    </div>
) 
    
}