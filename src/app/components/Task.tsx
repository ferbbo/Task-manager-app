import React from "react";
import Image from "next/image";
import cn from "classnames";
import { Tag } from "@/components/Tag";

interface PropsTask {
  image: string;
  title: string;
}

const Task = ({ image, title }: PropsTask) => {
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
        {["technical", "design"].map((el) => (
          <Tag key={el} type={el}></Tag>
        ))}
      </div>
    </article>
  );
};
export default React.memo(Task);
