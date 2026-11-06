import TodoList from "./TodoList";
import FilterButtons from "../Filter-components/FilterButtons";
import { useContext, useState } from "react";
import ToDoContext from "../../context/TodoContext";
import { type TaskStatus } from "../../types";

export default function TodoInput() {
  const context = useContext(ToDoContext);

  if (!context) return null;

  const { addTodo } = context.initialTask;
  const [currFilter, setCurrFilter] = useState("All");
  const [inputField, setInputField] = useState("");

  function handleAddTask() {
    if (!inputField.trim()) return;
    addTodo(inputField);
    setInputField("");
  }

  return (
    <>
      <div className="flex justify-center m-5">
        <div className="flex flex-row w-full justify-between p-5">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="w-full h-12 border-t border-gray-100 rounded-md bg-white"
            value={inputField}
            onChange={(e) => setInputField(e.target.value)}
          />
        </div>
        <div className="my-auto">
          <button
            onClick={handleAddTask}
            className="text-lg bg-blue-600 rounded-md px-7 py-3 text-white whitespace-nowrap"
          >
            Add Todo
          </button>
        </div>
      </div>
      <FilterButtons currFilter={currFilter} setCurrFilter={setCurrFilter} />{" "}
      <TodoList currFilter={currFilter} />
    </>
  );
}

// pass callback to FilterButtons, get filters and pass it to TodoList
