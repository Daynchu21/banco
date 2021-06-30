import React,{useState} from 'react';
import HeaderComponent from './../modulos/header/header'
// import FooterComponet from './../modulos/footer/footer'
import Button from './../modulos/button/button'
import "./multipleCuitComponent.scss"
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom';



// renderUserButtons = () => {
//     return data.map((userData) => (
//         <UserButton key="Some-unique-id-can-be-anything" PASS_YOUR_PROPS_HERE/>
//     ))
// }

// render() {
//     return (
//         <div>
//             ...
//             {this.renderUserButtons()}
//             ...
//         </div>
//     );
// }

var user= [
    {cuit:"23124851459",
    razonSocial:"a"},
    {cuit:"30500011072",
    razonSocial:"a"},
    {cuit:"30629401888",
    razonSocial:"a"}
    ]

function Mbuttons (user){
   

    }




export default function Mcuits(){

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })
    //const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })

    const [cuits,Setcuits] = useState(null)

    const handleChange = (e)=>{
        e.preventDefault();
        Setcuits(e.target.value)
    }

    const enviar =() =>{


    }

    return(
        
        <div>
            <HeaderComponent />
                <div className="containerformMC">
                <h1 className="item1">¿Con qué empresa querés operar?</h1>
                <div className="ButonInterno">
                {/* <div className=""><Button name="botonEmpresa" text="Empresa 1" /></div>
                <div className=""><Button name="botonEmpresa" text="Empresa 2" /></div>
                <div className=""><Button name="botonEmpresa" text="Empresa 3" /></div> */}
                {  user.map(function(obj) {
         return <button className="botonEmpresa" value={obj.cuit} key={obj.cuit} onClick={handleChange}  >{obj.razonSocial} <br/>{obj.cuit}</button>
        })}

                </div>
                <div className="containerformBTN">
            <div><Button name="botonCerrarSesion" text="Cerrar sesión" /></div>
           {cuits === null ? <button className="botonSiguiente"  disabled >Seleccionar</button> :  <button className="botonSiguiente" onClick={enviar} >Seleccionar</button>}
            {/* <div><Button name="botonSiguiente" text="Seleccionar" /></div> */}
            </div>
                {/* <div className="grid-item"><Button name="botonEmpresa" text="Empresa 4" /></div>
                <div className="grid-item"><Button name="botonEmpresa" text="Empresa 5" /></div>
                <div className="grid-item"><Button name="botonEmpresa" text="Empresa 6" /></div> */}
            </div>
        </div>
    )
}




