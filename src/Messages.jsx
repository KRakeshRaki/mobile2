import React from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';

const Messages = () => {
  const {timestamp, showTimestamp} = useTimestamp();

  return (
    <div>
      <form className='wallpaper'>
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>


          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
        
         <h2>Welcome to messenger</h2>
        <h3>Choose below options to chat in web</h3>
      <button className='msg' type='button' title='Open whatsapp web'><a href="https://web.whatsapp.com/"> Whatsapp Web </a> </button><br />
      <button className='msg' type='button' title='Open telegram web'><a href="https://web.telegram.org/">Telegram Web</a></button><br />
      <button className='msg' type='button' title='Open FB messenger web'> <a href="https://www.facebook.com/messenger/">Facebook messenger</a></button><br />
      <button className='msg' type='button' title='Open Twitter web'><a href="https://twitter.com/messenger?lang=en">X</a></button><br />
      <button className='msg' type='button' title='Open  web'><a href="https://mail.google.com/mail/">Email</a></button><br />
      <button className='msg' type='button' title='Open  web'><a href="https://web.snapchat.com/ ">Snapchat</a></button><br />
      <button className='msg' type='button' title='Open  web'><a href="https://discord.com/login">Discord web</a></button><br />
      {/* <button className='msg' type='button' title='Open  web'><a href=" "></a></button><br />
       */}
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

export default Messages