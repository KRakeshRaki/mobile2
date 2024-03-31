import React from 'react'
import {Link} from 'react-router-dom';
import './Disp.css'
import YT from './images/YT.jpg'
import googlemaps from './images/googlemaps.png'
import gphotos from './images/gphotos.png'
import calculator from './images/calculator.png'
import ch from './images/ch.jpg'
import ab from './photos/ab.jpg'
import { useTimestamp } from './TimestampContext';

const Home = () => {
  const {timestamp, showTimestamp} = useTimestamp();

  return (
    <div>
      <form className='wallpaper'>
        <header className='nb'>
               <h>&#160;</h>O {showTimestamp && <h ><h>&#160;</h> <h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h><h>&#160;</h> <h>&#160;</h>{timestamp}</h>}
        </header>
          
        <div style={{ width: '240px', height: '480px' }}>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br />
        <br />
        <h>&#160;</h><a href="https://www.google.com/?&bih=506&biw=516&prmd=ivsnmbtz&rlz=1C1CHBF_enIN994IN995&hl=en"><img className='icons' title='Google Chrome' src={ch} alt="Chrome" width='40px' height={40}/></a><br />
        <Link to='/maps'title='Google Maps'><h className='icons'><img src={googlemaps} alt="Google maps" width={50}/></h></Link><h>&#160;</h><h>&#160;</h><h>&#160;</h>
        <Link to='/youtube' title='YouTube'><h className='icons'><img src={YT} alt="YouTube" width={45} height={40} /></h></Link><h>&#160;</h>
        <Link to='/notepad'title='Note Pad'><h className='icons'>&#128221;</h></Link>
        <Link to='/textanalyzer'title='Text Analyzer'><h className='icons'> &#128466;</h></Link><h>&#160;</h>
      <br />
        <Link to='/calculator'title='Calculator'><h className='icons'><img src={calculator} alt="calculator" width={50} /></h></Link><h>&#160;</h>
        <Link to='/clock'title='Clock'><h className='icons'>&#9200;</h></Link><h>&#160;</h>
        <Link to='/camera'title='Camera'><h className='icons'>&#128248;</h></Link><h>&#160;</h>
        <Link to='/photos'title='Photos'><h className='icons'><img src={gphotos} alt="photos" width={50} /></h></Link>
        <br />
        <Link to='/contacts' title='Contacts'><h className='icons'>&#128222;</h></Link>
        <Link to='/messages'title='Messages'><h className='icons'>&#128233;</h></Link><h>&#160;</h>
        <Link to='/settings'title='Settings'><h className='icons'> &#9881;</h></Link>
        <Link to='/calenders'title='Calender'><h className='icons'> &#128197;</h></Link>
       <br />
   
     </div>


      <footer><pre >
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

export default Home
