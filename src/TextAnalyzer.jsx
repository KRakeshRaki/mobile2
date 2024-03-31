import React from 'react'
import {Link} from 'react-router-dom';
import { useTimestamp } from './TimestampContext';
import { useState } from 'react';
import nlp from 'compromise/three';

const TextAnalyzer = () => {

    const [text, setText] = useState('');
    const [analysis, setAnalysis] = useState(null);
  
    const analyzeText = () => {
      const doc = nlp(text);
      const words = doc.terms().out('array');
      const letters = text.replace(/\s+/g, '').split('');
      const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
      const symbols = text.replace(/[a-zA-Z0-9\s\n]/g, '').split('');
      const numbers = text.match(/\d+/g) || [];
  
      setAnalysis({
        letterCount: letters.length,
        wordCount: words.length,
        paragraphCount: paragraphs.length,
        symbolCount: symbols.length,
        numberCount: numbers.length
      });
    };
  
    const handleChange = (e) => {
      setText(e.target.value);
    };

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
        <h2>Text Analyzer</h2>
      <textarea v
      alue={text} 
      onChange={handleChange} 
      placeholder="Enter text here..." 
      style={{ width: '95%', minHeight: '200px' }} />
      <br />
      <button type='button' onClick={analyzeText}>Analyze Text</button>
      <br />
      {analysis && (
        <div>
          <h3>Analysis Results:</h3>
          <p>Letter Count: {analysis.letterCount}</p>
          <p>Word Count: {analysis.wordCount}</p>
          <p>Paragraph Count: {analysis.paragraphCount}</p>
          <p>Symbol Count: {analysis.symbolCount}</p>
          <p>Number Count: {analysis.numberCount}</p>
        </div>
      )}

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

export default TextAnalyzer
