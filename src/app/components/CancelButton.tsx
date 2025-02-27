import React from "react";

interface CancelButtonProps {
  closeModal: () => void;
}

function CancelButton({ closeModal }: CancelButtonProps) {
  return (
    <button
      type='button'
      className='border-2 text-md px-6 p-2 rounded-3xl transition-colors outline-none
      border-blue dark:border-gray-light
      text-blue dark:text-gray-light
      bg-white dark:bg-gray-dark
      hover:border-blue-dark hover:text-blue-dark hover:dark:opacity-60 hover:opacity-60'
      onClick={closeModal}
    >
      Cancel
    </button>
  );
}

export default CancelButton;
