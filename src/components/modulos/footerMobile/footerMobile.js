import React from "react";
import Button from "./../button/button"
import './footerMobile.scss';

export default function FooterComponentMobile (props) {
  return (
    <div className="posicionMobile">
      <div className="footerMobile">
        {/* <label className="CBancoHipotecario">© 2021 Banco Hipotecario</label> */}
        <address className="CBancoHipotecarioMobile">© 2021 Banco Hipotecario</address>
        <button id="invisible">Terminos y Condiciones</button>
        <button id="invisible">Protección de Datos Personales</button>
        <button id="invisible">Código de Prácticas Bancarias</button>
        <button id="invisible">Ayuda</button>
        </div>      
        </div>
  );
}
