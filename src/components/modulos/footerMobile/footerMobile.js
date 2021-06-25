import React from "react";
import Button from "./../button/button"
import './footerMobile.scss';

export default function FooterComponentMobile (props) {
  return (
    <div className="posicionMobile">
      <div className="footerMobile">
        {/* <label className="CBancoHipotecario">© 2021 Banco Hipotecario</label> */}
        <address className="CBancoHipotecarioMobile">© 2021 Banco Hipotecario</address>
        <Button name="botonInvisible" text = "Terminos y Condiciones" />
        <Button name="botonInvisible" text = "Protección de Datos Personales" />
        <Button name="botonInvisible" text = "Código de Prácticas Bancarias" />
        <Button name="botonInvisible" text = "Ayuda" />
        </div>      
        </div>
  );
}
