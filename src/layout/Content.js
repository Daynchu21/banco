/**Renderizamos el resto del contenido de los componentes */
import React from "react";

import bn from "../utils/bemnames";

// import { Container } from "reactstrap";

const bem = bn.create("content");

const Content = ({ tag: Tag, className, ...restProps }) => {
  const classes = bem.b(className);
  return <div className={classes} {...restProps} />;

  // return <Tag className={classes} {...restProps} />;
};

// Content.defaultProps = {
//   tag: Container,
// };

export default Content;
