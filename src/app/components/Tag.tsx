import cn from "classnames";
import React from "react";

export const Tag = ({ type }) => {
  const tagByLabel = {
    concept: {
      label: "Concept",
      style: "bg-pink text-red",
    },
    technical: {
      label: "Technical",
      style: "text-blue bg-blue-light",
    },
    design: {
      label: "Design",
      style: "bg-yellow text-orange",
    },
    "front-end": {
      label: "Fron-end",
      style: "bg-green-light text-green",
    },
  };

  const { label, style } = tagByLabel[type] || {
    label: "Concept",
    style: "bg-pink text-red",
  };
  return (
    <div className={cn("rounded-md p-1 text-min-sm tracking-wider", [style])}>
      {label}
    </div>
  );
};
