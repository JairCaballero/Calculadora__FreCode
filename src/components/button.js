import React from 'react';
import '../stylesheet/button.css';

function Button (props) {

  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    // () => para decirle que llame a la funcion mas no el valor retornado
    <div onClick={ () => props.manejarClic(props.children)} className={ `btn-container ${isOperator(props.children) ? 'operator' : null}`.trimEnd() }>
      {props.children}
    </div>
  )
}

export default Button;