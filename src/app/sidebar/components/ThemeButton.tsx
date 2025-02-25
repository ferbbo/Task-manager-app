import React from "react";
import cn from "classnames";
import { useCollapse } from "@/providers/CollapseProvider";
import { useTheme } from "@/providers/ThemeProvider";

function ThemeButton() {
  const { collapse } = useCollapse();
  const { theme, handleTheme } = useTheme();
  return (
    <div
      className={cn(
        "relative  flex justify-center items-center gap-3 overflow-hidden bg-blue-light-opacity dark:bg-gray rounded-xl py-2 p-1",
        { "w-10 h-[46px]": collapse }
      )}
    >
      <button
        className={cn(
          "flex gap-2 items-center justify-center font-medium rounded-lg border-0 text-black bg-blue-light-opacity dark:bg-black dark:text-white-dark transform duration-500",
          [collapse && (theme === "dark" ? "translate-x-10" : "translate-x-0")],
          [collapse ? "absolute rounded-[50%] p-1 " : "p-3 w-6/12 "]
        )}
        onClick={() => handleTheme("dark")}
        aria-label='Switch to dark mode'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className='fill-black dark:fill-white'
        >
          <path
            d='M15 4c.292 0 .438 0 .578.042.614.184.9.89.586 1.449-.072.128-.29.339-.726.76C13.935 7.704 13 9.743 13 12s.935 4.296 2.439 5.751c.436.422.654.633.726.761.314.558.028 1.264-.586 1.448-.14.042-.286.042-.578.042v0C10.582 20 7 16.418 7 12S10.582 4 15 4v0z'
            className='fill-black dark:fill-white'
          />
        </svg>
        <span className={cn({ hidden: collapse })}>Dark</span>
      </button>
      <button
        className={cn(
          "flex gap-2 items-center justify-center font-medium rounded-xl border-0 text-black bg-white dark:bg-gray dark:text-white transform duration-500",
          [
            collapse &&
              (theme === "light" ? "-translate-x-10" : "translate-x-0"),
          ],
          [
            collapse
              ? "absolute rounded-[50%] w-[40] h-[40] p-1"
              : "p-3 w-6/12 bg-white",
          ]
        )}
        onClick={() => handleTheme("light")}
        aria-label='Switch to light mode'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 25 25'
          className='fill-black dark:fill-white'
        >
          <circle
            cx='12'
            cy='12'
            r='4'
            className='fill-black dark:fill-white'
          />
          <path
            d='M12 5V3M12 21V19M16.95 7.05l1.414-1.414M5.636 18.364l1.414-1.414M19 12h2M3 12h2M16.95 16.95l1.414 1.414M5.636 5.636l1.414 1.414'
            strokeWidth='2'
            strokeLinecap='round'
            className=' stroke-black dark:stroke-white'
          />
        </svg>
        <span className={cn({ hidden: collapse })}>Light</span>
      </button>
    </div>
  );
}

export default ThemeButton;
