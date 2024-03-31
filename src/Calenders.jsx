import React from 'react'
import {Link} from 'react-router-dom';
import Calender from 'react-calendar';
import { useTimestamp } from './TimestampContext'; 

const Calenders = () => {
  const {timestamp, showTimestamp} = useTimestamp();

  return (
    <div>
      <form className='wallpaper'>
        <header>
          {showTimestamp && <h className='nb'><h>&#160;</h> O <h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>


          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
          <br /><br /><br />
        <div className='calender' >
           <Calender/> 
        </div >
   
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

export default Calenders

