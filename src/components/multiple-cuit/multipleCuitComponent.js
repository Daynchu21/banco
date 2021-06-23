import React from 'react';
import HeaderComponent from './../modulos/header/header'
import FooterComponet from './../modulos/footer/footer'
import Button from './../modulos/button/button'
import "./multipleCuitComponent.scss"

export default function Mcuits(){



    return(
        <div>
            <HeaderComponent />
            <div className="containerformMC">
                <div>
                <h1>¿Con que empresa queres operar?</h1>
                </div>
                <div className="InputRow">
                     <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                </div>
                {/* <form >
                    <div >
                        <input type="text"></input>
                        <input type="text"></input>
                        <input type="text"></input>
                    <Button name="botonBlanco" text="Cerrar Sesión" /> 
                    <Button name="botonVerde" text="Ingresar" /> 
                    </div>
                </form> */}


            </div>
            <FooterComponet />
        </div>
    )
}




