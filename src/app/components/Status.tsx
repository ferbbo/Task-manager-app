import React from "react";
import cn from "classnames";
import type { StatusLabel } from "@/app/types";
interface StatusProps {
  status: StatusLabel;
  size?: "small";
  count?: number;
}

type Label = {
  label: string;
  style: string;
};

export const labelByStatus: Record<StatusLabel, Label> = {
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
const Status = ({ status, size, count = 0 }: StatusProps) => {
  const { label, style } = labelByStatus[status] || {
    label: "",
    style: "",
  };
  return (
    <div className='flex items-center gap-2 w-fit'>
      <span className={cn("w-2 h-2 rounded-[50%]", style)}></span>
      <p className="text-lg text-black dark:text-white">
        {label}
        {count !== 0 && (
          <span className='text-lg text-black dark:text-white ms-1'>
            ({count})
          </span>
        )}
      </p>
    </div>
  );
};

export default React.memo(Status);
