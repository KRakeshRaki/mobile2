import React from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';

const Security = () => {
  const {timestamp, showTimestamp} = useTimestamp();

  return (
    <div>
      <form className='wallpaper'>
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>

          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
         <Link to='/password'>
            <button className='button0'> password   </button>
          </Link>


</div>


      <footer><pre >
        <button className='button0'>  ...  </button>
      <Link to='/home'>
      <button className='button0'>Home</button>
      </Link>
      <Link to='/settings'>
      <button className='button0'>   ~   </button>
      </Link>
      </pre></footer>
      </form>
    </div>
  )
}

export default Security
