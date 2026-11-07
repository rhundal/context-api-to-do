import TodoItem from "./TodoItem";
import { useContext } from "react";
import ToDoContext from "../../context/TodoContext";
import FilterContext from "../../context/FilterContext";
import ThemeContext from "../../context/ThemeContext";

export default function TodoList({ currFilter }: { currFilter: string }) {
  const context = useContext(ToDoContext);
  const filterContext = useContext(FilterContext);
  const themeContext = useContext(ThemeContext);

  if (!context || !filterContext || !themeContext) return null;

  const activeTheme = themeContext.initialTheme.currentTheme;

  const displayedTasks = context.displayedTasks;

  const itemsLeftCount = displayedTasks.filter(
    (task) => task.status === "Active",
  ).length;

  const filteredTasks = displayedTasks.filter((task) => {
    if (currFilter === "Active") return task.status === "Active";
    if (currFilter === "Completed") return task.status === "Completed";
    return true;
  });

  console.log(displayedTasks);

  return (
    <div
      className={`m-5 ${
        activeTheme === "dark"
          ? "bg-[#1e1e1e] border-gray-700 text-white placeholder-gray-500"
          : "bg-white border-gray-200 text-black"
      }`}
    >
      <div>
        {filteredTasks.map((task) => {
          return <TodoItem key={task.id} task={task} />;
        })}
      </div>
      <hr className="border-t border-gray-300 w-full mx-auto" />
      <div
        className={`w-full flex justify-between flex-row p-3  ${
          activeTheme === "dark"
            ? "bg-[#1e1e1e] border-gray-700 text-white placeholder-gray-500"
            : "bg-white border-gray-200 text-black"
        }
            `}
      >
        {itemsLeftCount} items left
      </div>
    </div>
  );
}
