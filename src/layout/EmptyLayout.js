/**Estilos de la pantalla sin login */

import { Content } from "../layout";
import React from "react";
import "../styles/_main.scss";

const EmptyLayout = ({ children, ...restProps }) => (
  <main className="main-app" {...restProps}>
    <Content fluid>{children}</Content>
  </main>
);

export default EmptyLayout;
