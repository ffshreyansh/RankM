"use client"
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Card1 = () => {
  const [hide, setHide] = useState(true);

  const showFull = () => {
    setHide(!hide);
  };

  return (
    <div className={`w-auto h-fit p-8 sd rounded-2xl bg-white`}>
      <div className="flex items-center justify-between">
        <div className='flex gap-6 items-center'>
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" className=' -rotate-12' alt="btc image" />
          <p className='font-semibold text-lg text-text-gray'>Bitcoin</p>
        </div>
        <p className='font-semibold text-gray-400'>BTC</p>
      </div>
      <CSSTransition
        in={hide}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className={`text-gray-600 text-3xl font-semibold mt-4`}>3.529020 <span>BTC</span></div>
      </CSSTransition>
      <CSSTransition
        in={hide}
        timeout={200}
        classNames="fade"
        unmountOnExit
      >
        <div className={`flex justify-between items-center mt-2`}>
          <div className='font-medium text-gray-400 text-xl'>$19.153 USD</div>
          <div className='bg-p-red px-2 py-1 rounded-full text-white font-medium'>-2.32%</div>
        </div>
      </CSSTransition>
      <button onClick={showFull} className='w-full text-3xl text-gray-400 mt-3 decoration-none '>
      <i className="fa-solid fa-angle-down"></i>
      </button>
    </div>
  );
};

export default Card1;
