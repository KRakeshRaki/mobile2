import React from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';


const Settings = () => {
   const {timestamp, showTimestamp} = useTimestamp();

  return (
    <div>
      <form className='wallpaper'>
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>



          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
        <section >
      <br />
        <Link to='/displaysettings'>
           <h4 className='se'>Display settings</h4>
        </Link>
        <Link to='/security'>
           <h4 className='se'>Security</h4>
        </Link>
        <Link to='/addsettings'>
           <h4 className='se'>Additional settings</h4>
        </Link>
        <Link to='/aboutdevice'>
           <h4 className='se'>About divice</h4>
        </Link><br />
        <br />

        </section>
      </div>



      <footer><pre ><button className='button0'>  ...  </button>
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

export default Settings
