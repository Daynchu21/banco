import React from "react";
import Button from "./../button/button"
import './footer.scss';

export default function FooterComponent (props) {
  return (
    <div className="posicion">
      <footer>
        {/* <label className="CBancoHipotecario">© 2021 Banco Hipotecario</label> */}
        <address className="CBancoHipotecario">© 2021 Banco Hipotecario</address>
        <Button name="botonInvisible" text = "Terminos y Condiciones" />
        <Button name="botonInvisible" text = "Protección de Datos Personales" />
        <Button name="botonInvisible" text = "Código de Prácticas Bancarias" />
        <Button name="botonInvisible" text = "Ayuda" />
        </footer>      
        </div>
  );
}
