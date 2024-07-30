import React from "react";
import cn from "classnames";

const DotTitle = ({ type, count }) => {
  const dotByType = {
    backlog: {
      label: "Backlog",
      style: "bg-blue ",
    },
  };
  const { label, style } = dotByType[type] || {
    label: "-- --",
    style: "bg-white",
  };
  return (
    <>
      <span className={cn("w-2 h-2 rounded-[50%]", style)}></span>
      <p className='text-base'>
        {label}
        <span className='text-base text-black dark:text-white-dark ms-1'>
          ({count})
        </span>
      </p>
    </>
  );
};

export default DotTitle;
