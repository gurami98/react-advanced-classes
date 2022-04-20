import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item/>}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  const randfunc = () => {
    console.log('randfunc');
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    window.addEventListener('scroll', randfunc);
    return () => {
      window.removeEventListener('resize', checkSize);
      window.removeEventListener('scroll', randfunc);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size}</h2>
    </div>
  );
};

export default ShowHide;
