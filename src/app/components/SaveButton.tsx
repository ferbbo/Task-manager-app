import React from "react";

interface SaveButtonProps {
  closeModal: () => void;
}

export default function SaveButton({ closeModal }: SaveButtonProps) {
  const createBoard = (evt) => {
    evt.preventDefault();
    closeModal();
  };
  return (
    <button
      className='flex items-center gap-3 justify-between border-0 text-md px-6 p-2 rounded-3xl transition-colors outline-none
        text-white
        bg-blue
        hover:bg-blue-dark'
      onClick={createBoard}
    >
      Create board
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6'
          stroke='#FEF7EE'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </button>
  );
}
