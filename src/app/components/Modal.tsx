"use client";

import React from "react";
import cn from "classnames";

function Modal({ children, type, open, onOpen }) {
  const title = {
    board: "New board",
    task: "Task details",
  };

  return (
    <div
      className={cn(
        "w-screen h-screen transition-opacity grid place-items-center",
        open ? "fixed top-0 left-0 right-0 bg-gray-opacity z-10" : "z-0 hidden"
      )}
    >
      <div className='rounded-xl bg-black p-4 shadow-md  w-3/5'>
        <div className='flex justify-between items-center mb-5'>
          <p className='text-xl text-white-dark'>{title[type]}</p>
          <button
            className='bg-transparent border-0'
            onClick={() => onOpen(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-none'
            >
              <g>
                <path
                  d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-white-dark'
                />
              </g>
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
