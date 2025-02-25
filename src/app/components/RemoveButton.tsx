import React from "react";

interface RemoveButtonProps {
  removeCover: () => void;
}

export default function RemoveButton({ removeCover }: RemoveButtonProps) {
  return (
    <button
      className='flex items-center gap-3 justify-between border-0 text-md px-6 p-2 rounded-3xl transition-colors outline-none
          text-white
          bg-red-light
          hover:bg-red'
      onClick={removeCover}
    >
      Remove
    </button>
  );
}
