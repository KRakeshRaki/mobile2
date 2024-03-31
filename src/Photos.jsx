import React from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';
import aa from './photos/aa.jpeg'
import ab from './photos/ab.jpg'
import ac from './photos/ac.jpg'
import { useState,useEffect } from 'react';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    // Retrieve photos from local storage
    const storedPhotos = [];
    for (let i = 1; i <= localStorage.length; i++) {
      const key = localStorage.key(i - 1);
      if (key.startsWith('photos1/image')) {
        storedPhotos.push({
          key: key,
          data: localStorage.getItem(key)
        });
      }
    }
    setPhotos(storedPhotos);
  }, []);

  const handlePreview = (photoData) => {
    setSelectedPhoto(photoData);
  };

  const handleDelete = (photoKey) => {
    localStorage.removeItem(photoKey);
    setPhotos(photos.filter(photo => photo.key !== photoKey));
    setSelectedPhoto(null); // Clear selected photo after deletion
  };


  const {timestamp, showTimestamp} = useTimestamp();

  return (
    <div>
      <form className='wallpaper' >
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>
       
   
        
          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
        <h2>Photos</h2>
        {photos.slice(0, 1).map((photo, index) => (
        <div key={index}>
          <button type='button' onClick={() => handlePreview(photo.data)}>Recent image</button>
          <h>&#160;</h>
          <button type='button' onClick={() => handleDelete(photo.key)}>Delete</button>
          
          {selectedPhoto === photo.data ? (
            <div>  
              <br />
              <img src={photo.data} alt={`Image ${index + 1}`}  />
              
              </div> 
          ):(<div>
            <br />
            <h3>Now click on recent images</h3>
            <img src={ab} alt="Default"height={170} width={240} />
            
            </div>
          )
         }
        </div>

      ))}
      {photos.length === 0 && (
        <div>
          <h3>No photos available</h3>
          
          <h3>This is default image</h3>
          <img src={ab} alt="Default"height={170} width={240} />
          <h3>Open the camera and click ok </h3>
        </div>
      )}
    </div >
    

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

export default Photos



