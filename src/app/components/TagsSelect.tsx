"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import cn from "classnames";
import type { Category } from "@/app/types";
import { labelByCategory } from "@/components/Tag";
import Tag from "@/components/Tag";

const isSelectedBy = (array: Array<Category>, item: Category) =>
  array.some((el) => el === item);

const TagsSelect: React.FC = () => {
  const [tagList, setTagList] = useState<Array<Category>>([]);
  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpenList(false);
    }
  };

  const handleTags = (item: Category) => {
    setTagList((prevTagList) =>
      prevTagList.includes(item)
        ? prevTagList.filter((el) => el !== item)
        : [...prevTagList, item]
    );
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='relative'>
      <p className='mb-2 text-blue dark:text-gray-light text-sm block'>Tags</p>
      <div ref={dropdownRef}>
        <button
          type='button'
          aria-expanded={isOpenList}
          className='border-2 rounded-xl p-2 text-md w-full text-left text-gray-light min-h-11 flex items-center gap-2
            dark:border-gray-light dark:bg-gray-dark dark:focus:bg-gray dark:focus:border-white-dark text-ellipsis'
          onClick={() => setIsOpenList((prev) => !prev)}
        >
          {tagList.length
            ? tagList.map((tag) => (
                <div className='animate-tag-in'>
                  <Tag key={tag} category={tag} />
                </div>
              ))
            : "Select Tags..."}
        </button>
        <ul
          role='listbox'
          className={cn(
            "list-none p-1 rounded-xl bg-white dark:bg-black shadow-lg absolute z-10 w-full max-h-52 overflow-auto",
            [isOpenList ? "animate-options-open" : "hidden"]
          )}
        >
          {Object.keys(labelByCategory).map((item: Category) => (
            <li
              key={item}
              className={cn(
                "px-2 py-1 hover:bg-blue rounded-lg cursor-pointer",
                {
                  "opacity-50": isSelectedBy(tagList, item),
                }
              )}
              onClick={() => {
                handleTags(item);
                setIsOpenList(false);
              }}
            >
              <Tag category={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagsSelect;
