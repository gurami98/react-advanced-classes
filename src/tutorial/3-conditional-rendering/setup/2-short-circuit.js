import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  // console.log(firstValue);
  // console.log(secondValue);

  return (
      <>
        {/* <h1>{firstValue}</h1>
        <h1>value : {secondValue}</h1> */}
        {/* {if(){console.log('hello world')}} */}
        <h1>{text || 'john doe'}</h1>
        {text && <h1>Hello World</h1>}
        {!text && <h1>Hello World</h1>}

        <button className="btn" onClick={() => setIsError(!isError)}>
          toggle error
        </button>

        {isError && <h1>Error...</h1>}

        {
          isError ? (
            <h1>Error with ternary</h1>
          ) : (
            <h1>No Error with ternary</h1>
          )
        }
      </>
  );
};

export default ShortCircuit;
