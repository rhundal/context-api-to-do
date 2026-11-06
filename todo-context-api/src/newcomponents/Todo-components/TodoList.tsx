import TodoItem from "./TodoItem";

import { useContext, useState } from "react";
import ToDoContext from "../../context/TodoContext";

export default function TodoList() {
  const context = useContext(ToDoContext);

  if (!context) return null;

  const displayedTasks = context.displayedTasks;

  console.log(displayedTasks);

  return (
    <div className="m-5">
      <div>
        {displayedTasks.map((task) => {
          return <TodoItem key={task.id} task={task} />;
        })}
      </div>
      <hr className="border-t border-gray-300 w-full mx-auto" />
      <div className="bg-white w-full flex justify-between flex-row p-3">
        {displayedTasks.length} items left
      </div>
    </div>
  );
}
