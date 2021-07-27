import React,{useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import HeaderComponent from "../../modulos/header/header"
import HeaderMobile from '../../modulos/headerMobile/headerMobile'
import FooterComponent from '../../modulos/footer/footer';
import "./preChangePass_Expiration.scss"
import { Redirect,Link } from "react-router-dom";



export default function preChangePassExpiration() {

    return (
        <div>
            <div id="containerChangePass">
                <div id="header_desktop">
                    <HeaderComponent />
                </div>
                <div id="containerformChangePass">
                    <div id="FormContainerChangePass">
                        <div>
                            <div id="logoChangePass"></div>
                        </div>
                        <div>
                            <h3 id="titulo" className="mbChangePass">Tu clave se ha vencido</h3>   
                        </div>
                        <div>
                            <h4>Tenés que generar una nueva clave</h4>
                        </div>
                        <div>
                        <Link to={location => ({ ...location, pathname: "/ValidaMetodos" })} >
                            <button id="buttonGreen">Cambiar clave</button>
                            </Link>
                        </div>
                        <div>
                            <button id="buttonWhite">Cancelar</button>
                        </div>
                    </div>    
                </div>
                <div id="footer_desktop">
                    <FooterComponent />
                </div>
            </div>
        </div>
    )
}