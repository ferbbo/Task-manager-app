import React from "react";
import Image from "next/image";
import cn from "classnames";
import { Tag } from "@/components/Tag";
import type { Category } from "@/app/types";

interface TaskProps {
  image: string;
  title: string;
  categories: Category[];
}

const Task = ({ image, title, categories }: TaskProps) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-3 rounded-xl p-3 bg-white-dark text-black dark:bg-black dark:text-white-dark"
      )}
    >
      <figure className='rounded-lg aspect-[16/5] overflow-hidden w-full relative object-cover'>
        <Image
          src={image}
          alt={`hero tak`}
          fill={true}
          priority={true}
          sizes='100%'
        ></Image>
      </figure>
      <p className='text-lg text-black dark:text-white-dark'>{title}</p>
      <div className='flex items-center gap-2'>
        {categories.map((el) => (
          <Tag key={el} category={el}></Tag>
        ))}
      </div>
    </article>
  );
};
export default React.memo(Task);
