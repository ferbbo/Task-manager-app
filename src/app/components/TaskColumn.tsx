import DotTitle from "@/components/DotTitle";
import Task from "@/components/Task";
import type { StatesOfBoard } from "@/app/types";

type Task = {
  id: number | string;
  image: string;
  title: string;
};

interface TaskColumnProps {
  stateOfBoard: StatesOfBoard;
  tasks: Array<Task>;
}

const TaskColumn = ({ stateOfBoard = "backlog", tasks }: TaskColumnProps) => {
  return (
    <section className='flex flex-col gap-5'>
      <header className='flex items-center gap-2 w-48'>
        <DotTitle statesOfBoard={stateOfBoard} count={2} />
      </header>
      {tasks.map((el) => (
        <Task
          key={el.id}
          image='/images/placeholder.jpg'
          title='Investigue Framer-Motion for animation'
          categories={["technical", "design"]}
        />
      ))}
    </section>
  );
};
export default TaskColumn;
