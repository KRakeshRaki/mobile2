import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleSave = () => {
    if (name.trim() !== '') {
      const newEntry = {
        name: name || 'Untitled',
        number: number
      };
      setContacts([...contacts, newEntry]);
      setName('');
      setNumber('');
    }
  };
  const {timestamp, showTimestamp} = useTimestamp()
  return (
    <div>
      <form className='wallpaper'>
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>


          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
         <h2>conatcts</h2>
         <input
        type="text"
        placeholder="Enter contact name"
        value={name}
        onChange={handleName}
      />
      <br />
      <input
        type='number'
        value={number}
        onChange={handleNumber}
        placeholder="Enter mobile number"
      />
      <button className='cb' title='Add new contact' type='button' onClick={handleSave}> + </button>
      <div>
        <h2>Saved Contacts</h2>
        <div className='contactlist'>
        {contacts.map((entry, index) => (
          <div key={index}>
            <p>{entry.name} <br /> {entry.number}</p>
            <hr />
          </div>
        ))}
        </div>
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

export default Contacts