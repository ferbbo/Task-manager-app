"use client";

import React, { useRef, useEffect } from "react";
import cn from "classnames";

interface ModalProps {
  children: React.ReactNode;
  typeModal: string;
  isOpen: boolean;
  closeOpen: () => void;
}
type LabelModal = "task" | "board";

const labelByType: Record<LabelModal, string> = {
  task: "Task details",
  board: "New board",
};

function Modal({ children, typeModal, isOpen, closeOpen }: ModalProps) {
  const modalRef = useRef(null);
  const wrapperRef = useRef(null);
  useEffect(() => {
    const $node = modalRef.current;
    const $wrapperNode = wrapperRef.current;
    const handleClick = (evt: MouseEvent) => {
      if (evt.target === $wrapperNode) {
        closeOpen();
      }
    };

    const handleAnimationStart = (evt: AnimationEvent) => {
      if (evt.animationName === "modalIn") {
        $wrapperNode.classList.remove("hidden");
      }
    };

    const handleAnimationEnd = (evt: AnimationEvent) => {
      if (evt.animationName === "modalOut") {
        $wrapperNode.classList.add("hidden");
      }
    };
    if ($node && $wrapperNode) {
      $wrapperNode.addEventListener("click", handleClick);
      $node.addEventListener("animationstart", handleAnimationStart);
      $node.addEventListener("animationend", handleAnimationEnd);
    }
    return () => {
      $wrapperNode.removeEventListener("click", handleClick);
      $node.removeEventListener("animationstart", handleAnimationStart);
      $node.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [closeOpen]);
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 left-0 right-0 z-10 bg-gray-opacity transition-opacity duration-[500ms] place-items-center grid",
        isOpen ? "opacity-100 " : "opacity-0 delay-500"
      )}
      ref={wrapperRef}
    >
      <div
        className={cn(
          "rounded-xl bg-white dark:bg-gray-dark p-8 shadow-md w-full md:w-[40%]",
          isOpen ? "animate-modal-in" : "animate-modal-out"
        )}
        ref={modalRef}
      >
        <div className='flex justify-between items-center mb-5'>
          <p className='text-xl text-blue dark:text-white-dark'>
            {labelByType[typeModal]}
          </p>
          <button
            className='hover:bg-blue-light-opacity dark:hover:bg-gray-light dark: p-2 transition-colors delay-75 border-0 rounded-full'
            onClick={() => closeOpen()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-none'
            >
              <g>
                <path
                  d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='stroke-blue dark:stroke-white-dark'
                />
              </g>
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
