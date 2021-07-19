import React,  {  useEffect} from "react"
import HeaderComponent from "../../modulos/header/header"
import "./validacion_metodos.scss"
import { Link } from 'react-router-dom';
import {validametodos} from "../../../actions/validaciones/recupero"
import { useDispatch,useSelector } from "react-redux";
import {validadorLlamado} from "../../../actions/validaciones/recupero"
import HeaderMobile from '../../modulos/headerMobile/headerMobile'

export default function Vmetodos ()
{

  const dispatch = useDispatch();
  const data = useSelector((state) => state.retrieve )

  // useEffect(() => {
  //   GenerarValidador()
  //  },[]);


  //  const GenerarValidador =() => {
  //    dispatch(validametodos("30527677331"))
  //  }

   const metodos = (validador) => {
    dispatch(validadorLlamado(validador))
   }

    return(
        <div>
            <div id="header_desktop">
                <HeaderComponent />
            </div>
            <div id="header_mobile">
                <HeaderMobile path={'/FactoresAutenticacion'}/>
            </div>
            <div id="ContainerVmetodos">
            <div>
                <h1>
                    ¿Como querés generar el código de acceso?
                </h1>
            </div>
                {<div id="Buttons">
         
        {  (data.validador).map(function(obj) {
         return (
         <Link to={{ pathname: "/Recuperacion_metodos",  state: {codigo: obj.id,descripcion:obj.descripcion }, }}>
         <button className="botonEmpresa" value={obj.id} key={obj.id} onClick={() => {metodos(obj.id)}} >{obj.descripcion}</button>
         </Link>)
        })}


                </div>}

            </div>
        </div>
    )
}