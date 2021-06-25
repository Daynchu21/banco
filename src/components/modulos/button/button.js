import React from 'react'
import './button.scss'


export default function BotonBase(props) {
    return (
        <div>
            <button className={props.name} >{props.text}</button>
        </div>
    );
   
}
