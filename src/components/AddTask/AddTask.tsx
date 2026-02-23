import { useId } from "react";
import type { Task } from "../../types/types";

interface Props {
  onAdd: (newTask: Task) => void;
}

export const AddTask = ({ onAdd }: Props) => {
  const id = useId();
  //   const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const form = event.target;
  //     const formData = new FormData(form);
  //     const title = formData.get("title");
  //     const description = formData.get("description");
  //     const priority = formData.get("priority");
  //     console.log({
  //       title,
  //       description,
  //       priority,
  //     });
  //     form.reset();
  //   };

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;;
    const priority = formData.get("priority") as string;;
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status: "todo",
    };
    onAdd(newTask);
  };

  return (
    // <form onSubmit={handleSubmit}>
    <form action={handleSubmit}>
      <label htmlFor={`title - ${id}`}>Title</label>
      <input id={`title - ${id}`} type="text" name="title" />
      <label htmlFor={`description - ${id}`}>Description</label>
      <textarea id={`description - ${id}`} name="description"></textarea>
      <fieldset>
        <legend>Task priority</legend>
        <label>
          <input type="radio" name="priority" value="low" />
          Low
        </label>
        <label>
          <input type="radio" name="priority" value="medium" defaultChecked />
          Medium
        </label>
        <label>
          <input type="radio" name="priority" value="high" />
          High
        </label>
      </fieldset>
      <button>Add</button>
    </form>
  );
};
