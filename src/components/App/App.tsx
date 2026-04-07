import { Counter, TestRef } from "../TestRef/TestRef";
import { TodoList } from "../TodoList/TodoList";

export const App = () => {
  return (
    <>
      <TodoList />
      <TestRef />
      <Counter />
    </>
  );
};
