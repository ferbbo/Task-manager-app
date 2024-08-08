"use client";
import cn from "classnames";

import { useCollapse } from "@/providers/CollapseProvider";
import IconSvg from "@/components/IconSvg";
import ThemeButton from "@/components/ThemeButton";

type HandleClose = (evt: React.MouseEvent<HTMLButtonElement>) => void;

export default function Sidebar() {
  const { collapse, handleCollapse } = useCollapse();

  const handleClose: HandleClose = (evt) => {
    evt.preventDefault();
    handleCollapse();
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
        onClick={handleClose}
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
              strokeWidth='2'
              strokeLinecap='round'
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
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='stroke-black dark:stroke-white-dark'
            />
          </svg>
        )}
      </button>
      <div className={cn("h-full mt-[60px] flex flex-col gap-2")}>
        <ul className='p-0 gap-2 list-none'>
          {[1, 2, 3].map((el) => (
            <li
              key={el}
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
              fillRule='evenodd'
              clipRule='evenodd'
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
      <ThemeButton />
    </aside>
  );
}
