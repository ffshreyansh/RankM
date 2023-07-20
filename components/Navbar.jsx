"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className="bg-white py-4 px-7 text-3xl items-center text-gray-500">
      <div className="flex justify-between">
        <i className="fa-solid fa-chevron-left h-fit my-auto text-xl"></i>
        <p className="font-semibold">Bitcoin Wallet</p>
        <i className="fa-solid fa-ellipsis-vertical h-fit my-auto text-2xl er" onClick={toggleModal}></i>

        {showModal && (
          <div className="fixed inset-0 bg-opacity-50 bg-black flex items-start justify-end z-50" onClick={toggleModal}>
            <div className="bg-white shadow-lg rounded w-36 py-3 px-2 mt-20 mr-8">
              <ul className=' text-sm'>
                <li className='flex items-center justify-between border-b p-1'><span>Edit</span> <span><i class="fa-regular fa-pen-to-square"></i></span></li>
                <li className='flex items-center justify-between border-b p-1'><span>Share</span> <span><i class="fa-regular fa-pen-to-square"></i></span></li>
                <li className='flex items-center justify-between border-b p-1 text-red-700'><span>Remove</span> <span><i class="fa-regular fa-pen-to-square"></i></span></li>
                
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
