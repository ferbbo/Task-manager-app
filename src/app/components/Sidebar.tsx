"use client";

import React, { useState } from "react";
import cn from "classnames";
import IconSvg from "./IconSvg";

export default function Sidebar() {
  const [mode, setMode] = useState("light");
  const [collapse, setCollapse] = useState(false);

  const handleClick = (evt) => {
    evt.preventDefault();
    setMode(mode === "light" ? "dark" : "light");
    if (mode === "light") document.documentElement.classList.remove("dark");
    if (mode === "dark") document.documentElement.classList.add("dark");
  };
  const HandleClose = (evt) => {
    evt.preventDefault();

    setCollapse(!collapse);
  };
  return (
    <aside
      className={cn(
        "flex  flex-col max-w-[350px] pt-5 pb-3 px-3 overflow-hidden transition-all relative",
        [collapse ? "w-[68px]" : "w-[350px]"]
      )}
      aria-label='Sidebar Navigation'
    >
      <button
        className={cn(
          "bg-purple-light dark:bg-gray  w-[44px] absolute h-[44px] flex items-center justify-center rounded-full transition-colors   dark:hover:bg-gray-dark"
        )}
        onClick={HandleClose}
        aria-expanded={!collapse}
        aria-label={collapse ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {collapse ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 24 24'
            className='fill-black dark:fill-white-dark'
          >
            <path
              d='M5 7h14M5 12h8M5 17h14'
              stroke-width='2'
              stroke-linecap='round'
              className='stroke-black dark:stroke-white-dark'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 24 24'
            className='fill-black dark:fill-white-dark'
          >
            <path
              d='M18 6L6 18M6 6L18 18'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='stroke-black dark:stroke-white-dark'
            />
          </svg>
        )}
      </button>
      <div className={cn("h-full mt-[60px] flex flex-col gap-2")}>
        <ul className='p-0 gap-2 list-none'>
          {[1, 2, 3].map((el) => (
            <li
              className={cn(
                "flex items-center gap-2 font-medium text-black dark:text-white-dark border-white-dark dark:border-black border-2  hover:border-blue",
                [
                  collapse
                    ? "rounded-[50%] h-[48px] w-[44px] p-1"
                    : "rounded-3xl h-12  p-2 px-1",
                ]
              )}
            >
              <IconSvg id={el} />
              <span
                className={cn("text-nowrap overflow-hidden text-ellipsis", {
                  hidden: collapse,
                })}
              >
                Frontend Board
              </span>
            </li>
          ))}
        </ul>
        <button
          className={cn(
            "rounded-3xl flex items-center overflow-hidden gap-2 p-1 ms-1 text-lg font-medium border-white-dark hover:border-blue dark:text-white-dark  dark:border-black border dark:hover:border-blue-light",
            { "rounded-[50%] h-[34px] w-[34px]": collapse }
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z'
              className='fill-black dark:fill-white-dark'
            />
          </svg>
          <span
            className={cn("text-nowrap overflow-hidden text-ellipsis", {
              hidden: collapse,
            })}
          >
            Add new board
          </span>
        </button>
      </div>
      <div
        className={cn("relative  flex justify-center gap-3 overflow-hidden", [
          collapse
            ? "w-10 h-[46px]"
            : "bg-purple-light dark:bg-gray rounded-xl p-1",
        ])}
      >
        <button
          className={cn(
            "flex gap-2 items-center justify-center font-medium rounded-xl border-0 text-black bg-white dark:bg-black dark:text-white-dark transform duration-500",
            [
              collapse &&
                (mode === "dark" ? "translate-x-0 " : "translate-x-10"),
            ],
            [
              collapse
                ? "absolute rounded-[50%] w-[40] h-[40] p-1 bg-purple-light"
                : "p-3 w-6/12 ",
            ]
          )}
          onClick={handleClick}
          aria-label='Switch to dark mode'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='fill-black dark:fill-white-dark'
          >
            <path
              d='M15 4c.292 0 .438 0 .578.042.614.184.9.89.586 1.449-.072.128-.29.339-.726.76C13.935 7.704 13 9.743 13 12s.935 4.296 2.439 5.751c.436.422.654.633.726.761.314.558.028 1.264-.586 1.448-.14.042-.286.042-.578.042v0C10.582 20 7 16.418 7 12S10.582 4 15 4v0z'
              className='fill-black dark:fill-white-dark'
            />
          </svg>
          <span className={cn({ hidden: collapse })}>Dark</span>
        </button>
        <button
          className={cn(
            "flex gap-2 items-center justify-center font-medium rounded-xl border-0 text-black bg-white dark:bg-gray dark:text-white-dark transform duration-500",
            [
              collapse &&
                (mode === "light" ? "translate-x-0" : "-translate-x-10 "),
            ],
            [
              collapse
                ? "absolute rounded-[50%] w-[40] h-[40] p-1"
                : "p-3 w-6/12 bg-white-dark",
            ]
          )}
          onClick={handleClick}
          aria-label='Switch to light mode'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            viewBox='0 0 25 25'
            className='fill-black dark:fill-white-dark'
          >
            <circle
              cx='12'
              cy='12'
              r='4'
              className='fill-black dark:fill-white-dark'
            />
            <path
              d='M12 5V3M12 21V19M16.95 7.05l1.414-1.414M5.636 18.364l1.414-1.414M19 12h2M3 12h2M16.95 16.95l1.414 1.414M5.636 5.636l1.414 1.414'
              stroke-width='2'
              stroke-linecap='round'
              className=' stroke-black dark:stroke-white-dark'
            />
          </svg>
          <span className={cn({ hidden: collapse })}>Light</span>
        </button>
      </div>
    </aside>
  );
}
