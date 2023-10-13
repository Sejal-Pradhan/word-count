// KindaCode.com
// src/App.js
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // the text entered by the user
  const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  // character count
  const [charCount, setCharCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

    // update char count (including whitespaces)
    setCharCount(text.length);
  }, [text]);

  return (
    <div className='container'>
      <div><h2>Responsive Paragraph Word</h2></div>
      <div className='row'><h2>Counter</h2></div>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder='Write something here !'
        ></textarea>

        <div>
          <p className='word-count'>Word Count: {wordCount}</p>
          <p className='char-count'>
            Character Count (Including Whitespaces): {charCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;