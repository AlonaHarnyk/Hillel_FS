import type { Task } from "../../types/types";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  return (
    <>
      <p>{task.title}</p>
      <p>{task.description}</p>
    </>
  );
};
