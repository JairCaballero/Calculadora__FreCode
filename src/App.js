import './App.css';
import logo from './img/logo.png'
import Button from './components/button.js';
import Pantalla from './components/screen.js';
import Btnclear from './components/button_clear.js'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  };

  const calcularResultado = ()  => {
    if(input) {
      setInput(evaluate(input));
    }
  }

  return (
    <div className='App'>
      <div className='frecode-logo-container'>
        <img className='frecode-logo' src={logo} alt="logo frecode" />
      </div>
      <div className='container-calculator'>
        <Pantalla input={input} />
        <div className='fila'>
          <Button manejarClic={addInput}>1</Button>
          <Button manejarClic={addInput}>2</Button>
          <Button manejarClic={addInput}>3</Button>
          <Button manejarClic={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>4</Button>
          <Button manejarClic={addInput}>5</Button>
          <Button manejarClic={addInput}>6</Button>
          <Button manejarClic={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={addInput}>7</Button>
          <Button manejarClic={addInput}>8</Button>
          <Button manejarClic={addInput}>9</Button>
          <Button manejarClic={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClic={calcularResultado}>=</Button>
          <Button manejarClic={addInput}>0</Button>
          <Button manejarClic={addInput}>.</Button>
          <Button manejarClic={addInput}>/</Button>
        </div>
        <div className='fila'>
          <Btnclear manejarClear= { () => setInput('') }>Clear</Btnclear>
        </div>
      </div>
    </div>
  );
}

export default App;
