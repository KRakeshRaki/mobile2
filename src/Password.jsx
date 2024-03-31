import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';

const Password = () => {

const newpass = 'rakesh';

const [pass,setPass] = useState('');
const handleClick =(e)=>{
  setPass(e.target.value);
};
const handleSave =(e) =>{
  setPass(e.target.value)
}

  const {timestamp, showTimestamp} = useTimestamp();
  return (
    <div>
      
      <form className='wallpaper'>
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>


          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
         <br />
         <h2>Welcome to passwords</h2>


        <input type="text"
         placeholder='Set new password'
         
         onChange={handleClick} />
        <button type='button'onClick={handleSave} >Change password</button>
  
        <h2>{pass}</h2>

         </div>



      <footer><pre >
        <button className='button0'>  ...  </button>
      <Link to='/home'>
      <button className='button0'>Home</button>
      </Link>
      <Link to='/security'>
      <button className='button0'>   ~   </button>
      </Link>
      </pre></footer>
      </form>
    </div>
  )
}

export default Password
