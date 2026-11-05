import { useState, createContext, useContext, useMemo } from "react";

import { type TaskItemProps } from "../types";
import { type Task } from "../types";

// Steps to follow
// 1. creating context
// 2. providing context
// 3. consuming context

let initialTask = {
  id: "1",
  text: "Study React",
  status: "",
};

// 1. creating context
const ToDoContext = createContext<TaskItemProps | undefined>(undefined);

// 2. Create the Provider component where state and actions are declared
export function TodoProvider() {}

// let initialTaskItem = {
//   task: initialTask,
//   onStatusChange: checkStatusChange,
//   addTodo: addTask,
//   toggleTodo: toggleTaskStatus,
//   deleteTodo: delTask,
//   editTodo: updateTask,
//   clearCompleted: removeCompleted,
// };

export default ToDoContext;
