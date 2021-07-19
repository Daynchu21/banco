import React,{useState} from 'react';
import HeaderComponent from './../modulos/header/header'
// import FooterComponet from './../modulos/footer/footer'
import { useDispatch,useSelector } from "react-redux";
import "./multipleCuitComponent.scss"
import { useMediaQuery } from 'react-responsive'
import { logout,loginMultiple } from "../../actions/auth";
import { Link,Redirect } from 'react-router-dom';

export default function Mcuits(){

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    //const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })

    const {user} = useSelector((state) => state.auth )

    //    const { isLoggedIn } = useSelector((state) => state.auth);
    //    const { message } = useSelector((state) => state.message);
       const dispatch = useDispatch();

    const [cuits,Setcuits] = useState(null)


    const desloguear =() =>{
        dispatch(logout())
    }

    const handleChange = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
        Setcuits(e.target.value)
    }

    const enviar =() =>{
        dispatch(loginMultiple(user.documento,user.usuario,user.contaseña,cuits))
    }
    
    return(
       
        <div>
             {user === null ? <Redirect to={{pathname: '/Login'}}/>   :
             <div>
            <HeaderComponent />
                <div className="containerformMC">
                <h1 className="item1">¿Con qué empresa querés operar?</h1>
                <div className="ButonInterno">
                 {  user.respuesta.empresas.map(function(obj) {
         return <button className="botonEmpresa" value={obj.cuit} key={obj.cuit} onClick={handleChange}  >{obj.razonSocial} <br></br>{obj.cuit}</button>
        })}

                </div>
                <div className="containerformBTN">
            <div>
            <Link to="/Login" replace >
                <button className="botonCerrarSesion" onClick={() => {desloguear()}}>Cerrar sesión</button>
                </Link>
                </div>
           {cuits === null ? <button className="botonSiguiente"  disabled >Seleccionar</button> :  <button className="botonSiguiente" onClick={enviar} >Seleccionar</button>}
            </div>
            </div>
            </div>
             }
        </div>
   
    )
}




