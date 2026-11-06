import TodoItem from "./TodoItem";
import { type TaskStatus } from "../../types";
import { useContext } from "react";
import ToDoContext from "../../context/TodoContext";
import FilterContext from "../../context/FilterContext";

export default function TodoList({ currFilter }: { currFilter: string }) {
  const context = useContext(ToDoContext);
  const filterContext = useContext(FilterContext);

  if (!context || !filterContext) return null;

  const displayedTasks = context.displayedTasks;
  // const currentFilter = filterContext.initialFilters.appliedFilter;

  // const activeStatus = currentFilter || "All";

  const filteredTasks = displayedTasks.filter((task) => {
    if (currFilter === "Active") return task.status === "Active";
    if (currFilter === "Completed") return task.status === "Completed";
    return true;
  });

  console.log(displayedTasks);

  return (
    <div className="m-5">
      <div>
        {filteredTasks.map((task) => {
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
