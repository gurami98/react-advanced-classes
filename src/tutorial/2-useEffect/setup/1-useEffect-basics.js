import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [incomingMessageCount, setIncomingMessageCount] = useState(0)
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('value useEffect run')
    if(incomingMessageCount > 0){
      document.title = `New Messages(${incomingMessageCount})`
    }
  }, [incomingMessageCount])

  useEffect(() => {
    console.log('initial render useEffect');
  }, [])

  return (
    <>
      <h1>{incomingMessageCount}</h1>
      <button className="btn" onClick={() => setIncomingMessageCount(incomingMessageCount + 1)}>
        click me
      </button>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        for counter
      </button>
    </>
  )
  
};

export default UseEffectBasics;
