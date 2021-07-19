import React from "react";
import Button from "./../button/button"
import './footer.scss';

export default function FooterComponent (props) {
  return (
    <div className="posicion">
      <footer className="footerDesktop">
        {/* <label className="CBancoHipotecario">© 2021 Banco Hipotecario</label> */}
        <address className="CBancoHipotecario">© 2021 Banco Hipotecario</address>
        <button id="invisible">Terminos y Condiciones</button>
        <button id="invisible">Protección de Datos Personales</button>
        <button id="invisible">Código de Prácticas Bancarias</button>
        <button id="invisible">Ayuda</button>
        </footer>      
        </div>
  );
}
