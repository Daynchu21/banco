import React from 'react';
import HeaderComponent from '../modulos/header/header'
import FooterComponet from '../modulos/footer/footer'
import Button from '../modulos/button/button'
import "./factoresAutenticacion.scss"

export default function FactoresAutenticacion(){



    return(
        <div>
            <HeaderComponent />
                <div>
                </div>
                <div className="containerformFA">
                <h1 className="itemPorblemasSesion">¿Tenés problemas para iniciar sesión?</h1>
                <div className=""><Button name="botonFA" text="Olvidé mi usuario" /></div>
                <div className="OrientacionIzq"><Button name="botonFA" text="Olvidé mi contraseña" /></div>
                <div className="OrientacionIzq"><Button name="botonFA" text="Se me bloqueo mi contraseña" /></div>
                {/* <div className="grid-item"><Button name="botonEmpresa" text="Empresa 4" /></div>
                <div className="grid-item"><Button name="botonEmpresa" text="Empresa 5" /></div>
                <div className="grid-item"><Button name="botonEmpresa" text="Empresa 6" /></div> */}
                <div></div>
                <div></div>
                <div></div>
            </div>
            <FooterComponet />
            
        </div>
    )
}




