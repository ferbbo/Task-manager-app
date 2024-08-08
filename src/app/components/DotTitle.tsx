import React from "react";
import cn from "classnames";
import type { StatesOfBoard } from "@/app/types";
interface DotTitleProps {
  statesOfBoard: StatesOfBoard;
  count: number;
}

type DotState = {
  label: string;
  style: string;
};

const dotByState: Record<StatesOfBoard, DotState> = {
  backlog: {
    label: "Backlog",
    style: "bg-blue ",
  },
  inProgress: {
    label: "In Progress",
    style: "bg-yellow",
  },
  inReview: {
    label: "In Review",
    style: "bg-purple",
  },
  completed: {
    label: "Done",
    style: "bg-green",
  },
};
const DotTitle = ({ statesOfBoard, count }: DotTitleProps) => {
  const { label, style } = dotByState[statesOfBoard] || {
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
