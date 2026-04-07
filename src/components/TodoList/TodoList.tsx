import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
    }
    setInput("");
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div data-testId="todo-list">
      <h2>Todo list</h2>
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={`${todo.slice(0, 10)}-${index}`}>
            <p>{todo}</p>
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
