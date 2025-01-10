import React from "react";

interface InputTextProps {
  label: string;
  value: string;
  onInput: (value: EventTarget) => void;
}
const idFromLabelFormat = (label) =>
  label.toLowerCase().split(/[/\s]/).join("-");

function InputText({ label, value, onInput }: InputTextProps) {
  const idFromLabel = idFromLabelFormat(label);
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
        value={value}
        required
        pattern='[Aa-zZ0-9áéíóú.,\-\s]+'
        placeholder='e.g default board'
        className='border-2 rounded-xl p-2 text-lg w-full
            placeholder:italic placeholder:text-sm placeholder:text-gray-light
            border-gray-light dark:bg-gray-dark dark:focus:bg-gray dark:focus:border-white-dark
            invalid:[&:not(:placeholder-shown):not(:focus)]:border-red valid:[&:not(:placeholder-shown)]:border-blue'
        onInput={(evt) => onInput(evt.target)}
      />
    </div>
  );
}

export default InputText;
