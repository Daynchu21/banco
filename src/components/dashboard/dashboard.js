import React from 'react'
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";


export default function Dashboard ()
{
    const dispatch = useDispatch();

    const desloguear =() =>{
        dispatch(logout())
    }

    return(
        <div>
            <h1>Hola</h1>
            <button type="button" onClick={() => {desloguear()}} >Cerrar Sesion</button >
            </div>
    )
}