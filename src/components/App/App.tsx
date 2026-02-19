// import { Footer } from "../Footer/Footer";
// import { Header } from "../Header/Header";
import { data } from "../../data/data";
import { TaskList } from "../TaskList/TaskList";
import { Section } from "../Section/Section";

import { useState } from "react";
import { TaskItem } from "../Task/Task";

export const App = () => {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const handleClick = () => {
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    console.log(counter);
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <p>Counter value: {counter} </p>
      {/* <Header /> */}
      <Section title="Tasks list">
        <TaskList tasks={data} />
      </Section>
      <TaskItem task={data[0]} />
      {/* <Footer /> */}
    </>
  );
};
