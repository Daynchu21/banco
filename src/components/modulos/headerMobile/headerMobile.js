import React from "react";
import './headerMobile.scss'
import { Link } from "react-router-dom";
import arrow from './../../../assets/iconos/Back.svg';
import PropTypes from 'prop-types';

export default function HeaderComponentMobile ({ path }) {
  console.log(path);
  
  return (
    <div className="posicion_headerMobile">
     <div className="headerMobile">
        <div id="back">
          <Link to={{pathname: path}}>
            <img src={arrow} className="githubIcon" />
          </Link>
        </div>
      </div>
      </div>
  );
}