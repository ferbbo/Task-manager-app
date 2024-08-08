import cn from "classnames";
import React from "react";
import type { Category } from "@/app/types";

interface TagProps {
  category: Category;
}

type TagCategory = {
  label: string;
  style: string;
};

const tagByCategory: Record<Category, TagCategory> = {
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
export const Tag = ({ category }: TagProps) => {
  const { label, style } = tagByCategory[category] || {
    label: "Concept",
    style: "bg-pink text-red",
  };
  return (
    <div className={cn("rounded-md p-1 text-min-sm tracking-wider", [style])}>
      {label}
    </div>
  );
};
