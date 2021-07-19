import React from 'react';
import HeaderComponent from '../../modulos/header/header'
import Button from '../../modulos/button/button'
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {recuperoUserSuccess} from "../../../actions/validaciones/recupero"
import "./recuperar-success.scss"

export default function RecuperarSuccess(){

    const data = useSelector((state) => state.retrieve )
    const dispatch = useDispatch();

    const successUser = () => {
         dispatch(recuperoUserSuccess())
    }


    return(
        <div>
                <div id="header_desktop">
                    <HeaderComponent />
                </div>
                <div id="containerformRS">
                <div style={{"display": "grid", "grid-gap": "1em"}}>
                    <div>
                 <h1 className="item1">Enviamos tu usuario</h1>
                 </div>
                 <div>
                    <h2 className="">Recibirás tu usuario al e-mail {data.user.email}</h2>
                </div>
                </div>
                 <div>
                 <Link to={location => ({ ...location, pathname: "/login" })} onClick={() => {successUser()}}>
                     <Button name="botonAceptarRS" text="Aceptar" />
                     </Link>
                     </div>
                </div>
            
        </div>
    )
}




