import cn from "classnames";
import React from "react";
import type { Category } from "@/app/types";

interface TagProps {
  category: Category;
  size?: "large"
}

type Label = {
  label: string;
  style: string;
};

export const labelByCategory: Record<Category, Label> = {
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
  frontEnd: {
    label: "Front-end",
    style: "bg-green-light text-green",
  },
};
const Tag = ({ category, size }: TagProps) => {
  const { label, style } = labelByCategory[category] || {
    label: "Concept",
    style: "bg-pink text-red",
  };
  return (
    <div className={cn("rounded-md py-0.5 px-2 tracking-wider", [style, size == 'large' ? "text-md py-1 font-semibold" : "text-min-sm" ], )}>
      {label}
    </div>
  );
};

export default React.memo(Tag);
