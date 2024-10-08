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
        className='rounded-2xl border-0 bg-blue p-4 text-white outline-none hover:bg-blue-dark transition-colors'
        onClick={() => setOpenModal(true)}
      >
        Add new task card
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
