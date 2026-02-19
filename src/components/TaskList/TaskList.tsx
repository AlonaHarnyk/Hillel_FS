import type { Task } from "../../types/types";
import { TaskItem } from "../Task/Task";

interface Props {
    tasks: Task[]
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task}/>
        </li>
      ))}
    </ul>
  );
};
