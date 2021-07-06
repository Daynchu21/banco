import React from "react";
import './header.scss'
import { Link } from "react-router-dom";

export default function HeaderComponent (props) {
  return (
    <div className="posicion_header">
      <header >
      <Link to={location => ({ ...location, pathname: "/login" })} >
        <div id="logo"></div>
        </Link>
      </header>
      </div>
  );
}
