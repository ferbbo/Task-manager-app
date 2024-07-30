import DotTitle from "@/components/DotTitle";
import Task from "@/components/Task";

type Task = {
  id: number | string;
  image: string;
  title: string;
};

interface TaskColumnProps {
  type: string;
  tasks: Array<Task>;
}

const TaskColumn = ({ type = "backlog", tasks }: TaskColumnProps) => {
  return (
    <section className='flex flex-col gap-5'>
      <header className='flex items-center gap-2 w-48'>
        <DotTitle type={type} count={2} />
      </header>
      {tasks.map((el) => (
        <Task
          key={el.id}
          image='/images/placeholder.jpg'
          title='Investigue Framer-Motion for animation'
        />
      ))}
    </section>
  );
};
export default TaskColumn;
