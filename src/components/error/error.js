import './error.scss'
import React,{ useState, useEffect}  from 'react';
import HeaderComponent from "./../modulos/header/header"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Error() {
    const message = useSelector((state) => state.message);
    const [error, setError] = useState(false);

    /* useEffect(() => {
        if(message.message !== null){
            setError(true);
        }
    }); */

    
    return(
        <div>
            <div>
                <div id="header_desktop">
                    <HeaderComponent />
                </div>
                <div id="containerError">            
                    <div>
                        <div style={{backgroundColor: "gray", height:44, width:44, marginLeft:74}}></div>
                    </div>    
                    <div>
                        <h3>Se ha procudido un error</h3>
                    </div>                
                    <div>
                        <h4>Vuelvalo a intentarlo más tarde</h4>
                    </div>                
                </div>
            </div>
        </div>
    )     
}