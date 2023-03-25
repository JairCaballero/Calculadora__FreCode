import React from 'react';
import '../stylesheet/button_clear.css';

const Btnclear = (props) => (
  <button className='boton_clear' onClick={ props.manejarClear }>
    {props.children}
  </button>
);


export default Btnclear;