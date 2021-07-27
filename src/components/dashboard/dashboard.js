import './dashboard.scss'
import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import HeaderComponent from "./../modulos/header/header";
import { color } from '@material-ui/system';


export default function Dashboard ()
{
    const dispatch = useDispatch();

    const desloguear =() =>{
        dispatch(logout())
    }

    return(

        <div id="contenedor">
        <div id="header"><HeaderComponent /></div>
        <div id="profile">
            <text>Perfil</text>
        </div>
        <div id="menu-contenedor">
            <div id="menu-botones">
        <button id="invisible" >Inicio</button>
        <button id="invisible" >Cuentas</button>
        <button id="invisible" >Pagos</button>
        <button id="invisible" >Transferencias</button>
        <button id="invisible" >Inversiones</button>
        <button id="invisible" >Cobros</button>
        <button id="invisible" >Cheques</button>
        <button id="invisible" >Administración</button>
        </div>
        </div>
        <div id="contenedor-margen">
            <text id="contenedor-bienvenida">Hola Mía</text>
            <div id="cards">
                
                <div id="card-Movimientos"></div>
                <div id="card-Movimientos"></div>
                <div id="card-Movimientos"></div>
            </div>
        </div>
        <button type="button" onClick={() => {desloguear()}} >Cerrar Sesion</button >
        
        </div>




        // <div id="home">
        //     <div id="header">
        //         {/* <h1>HEADER</h1> */}
        //         <HeaderComponent />
        //     </div>

        //     <section id="menu">
        //             <button id="invisible" >Inicio</button>
        //             <button id="invisible" >Cuentas</button>
        //             <button id="invisible" >Pagos</button>
        //             <button id="invisible" >Transferencias</button>
        //             <button id="invisible" >Inversiones</button>
        //             <button id="invisible" >Cobros</button>
        //             <button id="invisible" >Cheques</button>
        //             <button id="invisible" >Administración</button>
        //     </section>
        //     <div id="contenido"></div>
        //     <div >
        //         <h1>Hola</h1>
        //         <button type="button" onClick={() => {desloguear()}} >Cerrar Sesion</button >
        //     </div>
        // // </div>
    )
}