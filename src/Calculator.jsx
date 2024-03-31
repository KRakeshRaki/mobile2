import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useTimestamp } from './TimestampContext';
//import './Calc.html'


const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult('Error');
    }
  };

  const {timestamp, showTimestamp} = useTimestamp();

  return (
    <div>
      <form className='wallpaper'>
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>


          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
    <br /><br /><br />
      
      
      <div className="calculator-buttons">
      <input
        type="text"
        size={9}
        className="calculator-display"
        value={expression}
        readOnly
      />
      <button type='button'onClick={() => calculateResult()}>=</button>
      <input
        type="text"
        size={4}
        className="calculator-display"
        value={result}
        readOnly
      />
      <br />
        <br />
        <button type='button'onClick={() => handleButtonClick('1')}>1</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('2')}>2</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('3')}>3</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('+')}>+</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('4')}>4</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('5')}>5</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('6')}>6</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('-')}>-</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('7')}>7</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('8')}>8</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('9')}>9</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('*')}>*</button><h>&#160;</h><br />
        <button type='button'onClick={() => handleButtonClick('.')}> . </button><h>&#160;</h><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('0')}>0</button><h>&#160;</h>
        <button type='button'onClick={() => clearExpression()}>C</button><h>&#160;</h>
        <button type='button'onClick={() => handleButtonClick('/')}>/</button><h>&#160;</h>
        
    
      </div>
      
     </div>


      <footer><pre >
        <button className='button0'>  ...  </button>
 <Link to='/home'>
 <button className='button0'>Home</button>
 </Link>
 <Link to='/home'>
 <button className='button0'>   ~   </button>
 </Link>
 </pre></footer>
    </form>
    </div>
    
  )
}

export default Calculator