import React, { useEffect, useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState(''));
  // const value = useState('ragac')[0];
  // console.log(value);
  // const valueChange = useState('ragac')[0];

  const [text, setText] = useState('random title')

  const handleClick = () => {
    if(text === 'random title'){
      setText('hello world');
    } else {
      setText('random title');
    }
  }

  return (
    <> 
      <h1>{text}</h1>
      <button type='button' className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
