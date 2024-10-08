"use client";

import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import Status from "@/components/Status";
import { labelByStatus } from "@/components/Status";
import { StatusLabel } from "../types";

function Select() {
  const [status, setStatus] = useState<StatusLabel | null>(null);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpenList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative'>
      <p className='mb-2 text-blue dark:text-gray-light text-sm block'>
        Status
      </p>
      <div ref={dropdownRef}>
        <button
          type='button'
          aria-expanded={isOpenList}
          className='border-2 rounded-xl p-2 text-md w-full text-left text-gray-light min-h-11 flex items-center gap-2
              dark:border-gray-light dark:bg-gray-dark dark:focus:bg-gray dark:focus:border-white-dark'
          onClick={() => setIsOpenList((state) => !state)}
        >
          {status ? (
            <Status status={status} size='small' />
          ) : (
            "Select Status..."
          )}
        </button>
        <ul
          role='listbox'
          className={cn(
            "list-none p-1 rounded-xl dark:bg-black absolute z-10 w-full max-h-52 overflow-auto",
            [isOpenList ? "animate-options-open" : "hidden"]
          )}
        >
          {Object.keys(labelByStatus).map((item: StatusLabel) => (
            <li
              key={item}
              className='px-2 py-1 hover:bg-blue hover:rounded-lg cursor-pointer'
              onClick={() => {
                setStatus(item);
                setIsOpenList(false);
              }}
            >
              <Status status={item} size='small' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Select;
