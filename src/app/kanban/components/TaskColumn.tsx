"use client";

import { useState } from "react";
import Status from "@/components/Status";
import Task from "@/kanban/components/Task";
import TaskModal from "@/kanban/components/TaskModal";
import type { StatusLabel } from "@/app/types";

type Task = {
  id: number | string;
  image: string;
  title: string;
};

interface TaskColumnProps {
  board: StatusLabel;
  tasks: Array<Task>;
}

const TaskColumn = ({ board = "backlog", tasks }: TaskColumnProps) => {
  const [openModal, setOpenModal] = useState<boolean | null>(false);

  const handleBoardModal = () => {
    setOpenModal((state) => !state);
  };

  return (
    <section className='flex flex-col gap-5'>
      <header className='flex items-center gap-2 w-48'>
        <Status status={board} count={2} />
      </header>
      {tasks.map((el) => (
        <Task
          key={el.id}
          image='/images/placeholder.jpg'
          title='Investigue Framer-Motion for animation'
          categories={["technical", "design"]}
        />
      ))}
      <button
        className='flex items-center justify-between text-lg font-medium rounded-2xl border-0 bg-blue-semilight p-4 py-3 text-blue-medium outline-none hover:opacity-95 transition-opacity'
        onClick={() => setOpenModal(true)}
      >
        Add new task card
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12 6L12 18'
            stroke='#2A4DD0'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M18 12L6 12'
            stroke='#2A4DD0'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      </button>
      {board === "backlog" && (
        <TaskModal
          isOpen={openModal}
          closeOpen={handleBoardModal}
          name='name'
          image='/images/placeholder.jpg'
        />
      )}
    </section>
  );
};
export default TaskColumn;
