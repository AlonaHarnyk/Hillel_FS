// import { TodoList } from "./TodoList";
// import { render, screen, fireEvent } from "@testing-library/react";

// describe("TodoList Component", () => {
//   it("renders without crashing", () => {
//     render(<TodoList />);
//     const root = screen.getByTestId("todo-list");
//     expect(root).toBeInTheDocument();
//   });

//   it("can add a todo", () => {
//     render(<TodoList />);
//     const input = screen.getByPlaceholderText("Add todo");
//     const addBtn = screen.getByText("Add");
//     fireEvent.change(input, { target: { value: "Test Todo" } });
//     fireEvent.click(addBtn);
//     expect(screen.getByText("Test Todo")).toBeInTheDocument();
//   });

//   it("can delte a todo", () => {
//     render(<TodoList />);
//     const input = screen.getByPlaceholderText("Add todo");
//     const addBtn = screen.getByText("Add");
//     fireEvent.change(input, { target: { value: "Test Todo for Deleting" } });
//     fireEvent.click(addBtn);

//     const deleteBtn = screen.getByText("Delete");
//     fireEvent.click(deleteBtn);

//     expect(
//       screen.queryByText("Test Todo for Deleting"),
//     ).not.toBeInTheDocument();
//   });

//   it("does not add empty todo", () => {
//     render(<TodoList />);
//     const addBtn = screen.getByText("Add");
//     fireEvent.click(addBtn);
//     const listItems = screen.queryAllByRole("listitem");
//     expect(listItems.length).toBe(0);
//   });
// });

import { TodoList } from "./TodoList";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TodoList Component", () => {
  it("renders without crashing", () => {
    render(<TodoList />);
    const root = screen.getByTestId("todo-list");
    expect(root).toBeInTheDocument();
  });

  it("can add a todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    const addBtn = screen.getByText("Add");

    await userEvent.type(input, "Test Todo");
    await userEvent.click(addBtn);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("can delte a todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add todo");
    const addBtn = screen.getByText("Add");

    await userEvent.type(input, "Test Todo for Deleting");
    await userEvent.click(addBtn);

    const deleteBtn = screen.getByText("Delete");
    await userEvent.click(deleteBtn);

    expect(
      screen.queryByText("Test Todo for Deleting"),
    ).not.toBeInTheDocument();
  });

  it("does not add empty todo", async () => {
    render(<TodoList />);
    const addBtn = screen.getByText("Add");
    await userEvent.click(addBtn);
    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
  });
});
