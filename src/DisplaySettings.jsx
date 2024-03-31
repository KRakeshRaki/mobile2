import React, { createContext, useContext, useState } from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';

const DisplaySettings = () => { 
  
  const { showTimestamp, setShowTimestamp } = useTimestamp();
const toggleTimestamp = () => {
  setShowTimestamp((prevShowTimestamp) => !prevShowTimestamp);
};
  return (
    <div>
         <form className='camhole'>o


        <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
           <br /><br />

          <div>
            <h6>Press the button to 
              <button  type="button" onClick={toggleTimestamp}>
                  {showTimestamp ? 'Hide' : 'Show'}
              </button>Time stamp</h6>
          </div>

        </div>

      <footer><pre ><button className='button0'>  ...  </button>
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

export default DisplaySettings
