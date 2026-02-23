import type { Task } from "../../types/types";
import { TaskItem } from "../Task/Task";

interface Props {
  tasks: Task[]
  onDelete: (id: number) => void;
}

export const TaskList = ({ tasks, onDelete }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
