import type { Task } from "../../types/types";

interface Props {
  task: Task;
  onDelete: (id: number) => void;
}

export const TaskItem = ({ task, onDelete }: Props) => {

  const handleClick = () => {
    onDelete(task.id)
  }

  return (
    <>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <button onClick={handleClick}>Delete</button>
    </>
  );
};
