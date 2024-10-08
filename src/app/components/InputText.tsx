import React, { Fragment } from "react";

function InputText({ label }) {
  const idFromLabel = label.toLowerCase().split(/[/\s]/).join("-");
  return (
    <div>
      <label
        htmlFor={`input-${idFromLabel}`}
        className='mb-2 text-blue dark:text-gray-light text-sm block'
      >
        {label}
      </label>
      <input
        type='text'
        name={label}
        id={`input-${idFromLabel}`}
        required
        pattern='[Aa-zZ0-9áéíóú.,\-\s]+'
        placeholder='e.g default board'
        className='border-2 rounded-xl p-2 text-lg w-full
            placeholder:italic placeholder:text-sm placeholder:text-gray-light
            border-gray-light dark:bg-gray-dark dark:focus:bg-gray dark:focus:border-white-dark
            invalid:[&:not(:placeholder-shown):not(:focus)]:border-red valid:[&:not(:placeholder-shown)]:border-blue'
      />
    </div>
  );
}

export default InputText;
