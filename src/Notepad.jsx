import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';

const Notepad = () => {
  const [entries, setEntries] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentText, setCurrentText] = useState('');

  const handleTitleChange = (e) => {
    setCurrentTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setCurrentText(e.target.value);
  };

  const handleSave = () => {
    if (currentText.trim() !== '') {
      const newEntry = {
        title: currentTitle || 'Untitled',
        text: currentText
      };
      setEntries([...entries, newEntry]);
      setCurrentTitle('');
      setCurrentText('');
    }
  };


  const {timestamp, showTimestamp} = useTimestamp();
  return (
    <div>
      <form className='wallpaper' >
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>
        



        <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
  <br />
      <input
        type="text"
        placeholder="Enter title (optional)"
        value={currentTitle}
        onChange={handleTitleChange}
      />
      <br />
      <textarea
        rows="8"
        cols="28"
        value={currentText}
        onChange={handleTextChange}
        placeholder="Start typing..."
        
      />
      <br />
       <button type="button" onClick={handleSave}>Save</button>
      <div>
        <h2>Saved Entries</h2>
        {entries.map((entry, index) => (
          <div key={index}>
            <h3>{entry.title}</h3>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
     </div>

      <footer>
        <pre >
      <button className='button0'>  ...  </button>
      <Link to='/home'>
      <button className='button0'>Home</button>
      </Link>
      <Link to='/home'>
      <button className='button0'>   ~   </button>
      </Link>
      </pre>
      </footer>
      
      </form>
    </div>
  )
}

export default Notepad 