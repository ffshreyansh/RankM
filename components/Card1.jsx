"use client"

import React, { useState } from 'react';

const Card1 = () => {
  const [hide, setHide] = useState(false);

  const showFull = () => {
    setHide(!hide);
  };

  return (
    <div className={`w-auto h-fit p-8 sd rounded-xl bg-white ${hide ? 'card-closed' : 'card-open'}`}>
      <div className="flex items-center justify-between">
        <div className='flex gap-6 items-center'>
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" alt="btc image" />
          <p className='font-semibold text-lg text-text-gray'>Bitcoin</p>
        </div>
        <p className='font-semibold text-gray-400'>BTC</p>
      </div>
      <p className={`text-gray-600 text-3xl font-semibold mt-4 ${hide ? 'tt' : 'hidden'}`}>3.529020 <span>BTC</span></p>
      <div className={`flex justify-between items-center mt-2 ${hide ? 'tt' : 'hidden'}`}>
        <p className='font-medium text-gray-400 text-xl'>$19.153 USD</p>
        <p className='bg-p-red px-2 py-1 rounded-full text-white font-medium'>-2.32%</p>
      </div>
      <button onClick={showFull} className='w-full text-3xl text-gray-400 mt-3 decoration-none '>
        {hide ? (<i className="fa-solid fa-angle-up"></i>) : (<i className="fa-solid fa-angle-down"></i>)}
      </button>
    </div>
  );
};

export default Card1;
