import React from 'react';
import HeaderComponent from './../modulos/header/header'
// import FooterComponet from './../modulos/footer/footer'
import Button from './../modulos/button/button'
import "./multipleCuitComponent.scss"
import { useMediaQuery } from 'react-responsive'


export default function Mcuits(){

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    //const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })

    return(
        <div>
            <HeaderComponent />
                <div>
                </div>
                <div className="containerformMC">
                <h1 className="item1">¿Con qué empresa querés operar?</h1>
                <div></div>
                <div></div>
                <div></div>
                <div className=""><Button name="botonEmpresa" text="Empresa 1" /></div>
                <div className=""><Button name="botonEmpresa" text="Empresa 2" /></div>
                <div className=""><Button name="botonEmpresa" text="Empresa 3" /></div>
                {/* <div className="grid-item"><Button name="botonEmpresa" text="Empresa 4" /></div>
                <div className="grid-item"><Button name="botonEmpresa" text="Empresa 5" /></div>
                <div className="grid-item"><Button name="botonEmpresa" text="Empresa 6" /></div> */}
                <div></div>
                <div></div>
                <div></div>
                <div className="containerformBTN">
            
            <div><Button name="botonCerrarSesion" text="Cerrar sesión" /></div>
            <div><Button name="botonSiguiente" text="Seleccionar" /></div>
            </div>
            </div>
            
        </div>
    )
}




