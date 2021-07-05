import React from 'react';
import HeaderComponent from '../../modulos/header/header'
import Button from '../../modulos/button/button'
import "./recuperar-success.scss"

export default function RecuperarSuccess(){

    return(
        <div>
            <HeaderComponent />
                <div className="containerformRS">
                <div style={{"display": "grid", "grid-gap": "1em"}}>
                    <div>
                 <h1 className="item1">Enviamos tu usuario</h1>
                 </div>
                 <div>
                <h2 className="">Recibirás tu usuario al e-mail s***m@gmail.com</h2>
                </div>
                </div>
                 <div>
                     <Button name="botonAceptarRS" text="Aceptar" />
                     </div>
                </div>
            
        </div>
    )
}




