import ClientWrapper from "@/components/ClientWrapper";
import TaskColumn from "@/kanban/components/TaskColumn";

export default function Page() {
  return (
    <ClientWrapper>
      <TaskColumn
        tasks={[
          { id: 1, image: "image1.jpg", title: "Task 1" },
          { id: 2, image: "image2.jpg", title: "Task 2" },
          { id: 3, image: "image3.jpg", title: "Task 3" },
        ]}
        board='backlog'
      />
      <TaskColumn board='inProgress' />
      <TaskColumn board='inReview' />
      <TaskColumn board='completed' />
    </ClientWrapper>
  );
}
