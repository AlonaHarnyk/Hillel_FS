import { data } from "../../data/data";
import type { Task } from "../../types/types";
import { AddTask } from "../AddTask/AddTask";
// import { CounterBtn } from "../CounterBtn/CounterBtn";
// import { CounterValue } from "../CounterValue/CounterValue";
import { TaskList } from "../TaskList/TaskList";

import { useState } from "react";

export const App = () => {
  // const [counter, setCounter] = useState(0);
  const [tasks, setTasks] = useState<Task[]>(data);
  const [isListVisible, setIsListVisible] = useState(false);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };

  const deleteTask = (id: number) => {
    // setTasks(tasks.filter((item) => id !== item.id));
    setTasks((prevTasks) => prevTasks.filter((item) => id !== item.id));
  };

  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask])
  }

  const changeVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <>
      {/* <CounterBtn handleClick={handleClick} />
      <CounterBtn handleClick={handleClick} />
      <CounterBtn handleClick={handleClick} />
      <CounterValue counter={counter} /> */}
      <button onClick={changeVisibility}>
        {isListVisible ? "Hide" : "Show"} tasks
      </button>
      {isListVisible && (
        <>
          <TaskList tasks={tasks} onDelete={deleteTask} /> <AddTask onAdd={addTask} />
        </>
      )}
    </>
  );
};
