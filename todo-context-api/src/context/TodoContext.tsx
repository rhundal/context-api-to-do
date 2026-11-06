import { useState, createContext, useContext, useMemo, Children } from "react";

import { type TaskItemProps } from "../types";
import { type Task } from "../types";
import { type TaskStatus } from "../types/index";

// Steps to follow
// 1. creating context
// 2. providing context
// 3. consuming context

interface TodoProviderProps {
  children: React.ReactNode;
}

interface TodoContextType {
  initialTask: TaskItemProps;
  hasUpdatedText: boolean;
  hasUpdatedStatus: boolean;
  displayedTasks: Task[];
}

// 1. creating context
const ToDoContext = createContext<TodoContextType | undefined>(undefined);

// 2. Create the Provider component (custom wrapper component) where state and actions are declared
// Custom wrapper component - Its only job is to manage the state logic and inject it into the component tree using ToDoContext.Provider.
// Whatever components placed inside it will become its children
// UI is not built inside the context (this file)
// This will now be imported into App.tsx component
export function TodoProvider({ children }: TodoProviderProps) {
  let firstTask: Task = {
    id: "1",
    text: "Study React",
    status: "",
  };

  let tasksArray: Task[] = [];

  const [allTasks, setAllTasks] = useState<Task[]>(tasksArray);
  const [displayedTasks, setDisplayedTasks] = useState<Task[]>(tasksArray);
  const [tasksLength, setTasksLength] = useState<number>(tasksArray.length);

  const [hasUpdatedText, setHasUpdatedText] = useState(false);
  const [hasUpdatedStatus, setHasUpdatedStatus] = useState(false);

  function checkStatusChange(taskId: string, newStatus: TaskStatus) {
    let selectedTask = allTasks.find((task) => task.id === taskId);
    if (!selectedTask) return;
    setDisplayedTasks(
      allTasks.map((task) =>
        task === selectedTask ? { ...task, status: newStatus } : task,
      ),
    );
    setHasUpdatedStatus(true);
  }

  function addTask(inComingTask: string) {
    // 1. construct the task
    // 2. add it to the allTasks array

    let newTask: Task = {
      id: (tasksLength + 1).toString(),
      text: inComingTask,
      status: "Active",
    };

    const updatedTasks = [...allTasks, newTask];
    setTasksLength(updatedTasks.length);
    setAllTasks(updatedTasks);
    setDisplayedTasks(updatedTasks);
    // setAddTask(false);
    setHasUpdatedStatus(false);
    setHasUpdatedText(false);
  }

  function toggleTaskStatus(id: string | number) {
    let selectedTask = allTasks.find((task) => task.id === id);
    if (!selectedTask) return;
    setDisplayedTasks(
      allTasks.map((task) =>
        task === selectedTask
          ? {
              ...task,
              status: task.status === "Active" ? "Completed" : "Active",
            }
          : task,
      ),
    );
    setHasUpdatedStatus(true);
  }

  function delTask(id: string | number) {
    let arrayAfterDeletion = allTasks.filter((task) => task.id !== id);
    setTasksLength(arrayAfterDeletion.length);
    setAllTasks(arrayAfterDeletion);
    setDisplayedTasks(arrayAfterDeletion);
  }
  function updateTask(taskId: string | number, newText: string) {
    let selectedTask = allTasks.find((task) => task.id === taskId);
    if (!selectedTask) return;
    setDisplayedTasks(
      allTasks.map((task) =>
        task === selectedTask ? { ...task, stattextus: newText } : task,
      ),
    );
  }

  function removeCompleted() {
    let removedCompletedTasks = allTasks.filter(
      (task) => task.status === "Completed",
    );
    if (!removedCompletedTasks) return;
    setAllTasks(removedCompletedTasks);
    setDisplayedTasks(removedCompletedTasks);
  }

  // Memoizing the structure down to exact state primitives to prevent unexpected re-renders
  let value = useMemo<TodoContextType>(
    () => ({
      initialTask: {
        task: firstTask,
        onStatusChange: checkStatusChange,
        addTodo: addTask,
        toggleTodo: toggleTaskStatus,
        deleteTodo: delTask,
        editTodo: updateTask,
        clearCompleted: removeCompleted,
      },
      displayedTasks,
      hasUpdatedText,
      hasUpdatedStatus,
    }),
    [allTasks, hasUpdatedText, hasUpdatedStatus],
  );

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
}

export default ToDoContext;
