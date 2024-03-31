import React from 'react'
import {Link} from 'react-router-dom';
import Webcam from 'webcam-react';
import gphotos from './images/gphotos.png'
import { useTimestamp } from './TimestampContext';
import { useRef,useState } from 'react';

const Camera = () => {
  const {timestamp, showTimestamp} = useTimestamp();
  const webcamRef = useRef(null);
  const [photoData, setPhotoData] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(1);

  const captureImage = () => {
  const imageSrc = webcamRef.current.getScreenshot();
    setPhotoData(imageSrc);

    // Save image to local storage with a specific key path
    try {
      const key = `photos1/image${photoIndex}`;
      localStorage.setItem(key, imageSrc);
      setPhotoIndex(photoIndex + 1);
      
    } catch (error) {
      alert('Error storing image:', error);
    }
  };

  return (
    <div>
      <form className='wallpaper'>
        <header className='nb'>
        <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
          </header>


          <div style={{ width: '240px', height: '480px', overflow: 'auto' }}>
        <br /><br />

<h2>Webcam Capture</h2>
<Webcam
  audio={false}
  ref={webcamRef}
  screenshotFormat="image/jpeg"
  width={240}
  height={200}
/>
<br />
<h>&#160;</h><h>&#160;</h><h>&#160;</h>
<Link to='/photos'><h className='icons'><img src={gphotos} alt="photos" width={50} /></h></Link>
<h>&#160;</h><h>&#160;</h>
<button type='button' onClick={captureImage}>OK</button>
<br />
{photoData ? (
  <div>
    <h5>Image Captured....!  </h5>
    {/* <img src={photoData} alt="Captured" /> */}
  </div>
):(<div>
  <h5>Press OK to Capture Image. </h5>
  {/* <img src={photoData} alt="Captured" /> */}
</div>)}



         <h>&#160;</h><h>&#160;</h>
         
         <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h>
  
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

export default Camera

