import FilterContext from "../../context/FilterContext";
import { useContext, useState } from "react";

export default function FilterButtons({
  currFilter,
  setCurrFilter,
}: {
  currFilter: string;
  setCurrFilter: (filter: string) => void;
}) {
  const context = useContext(FilterContext);

  if (!context) return null;

  const [filters, setFilters] = useState<{ status: string }>({ status: "All" });
  const onFilterChange = context.initialFilters.onFilterChange;
  const setFilter = context.initialFilters.setFilter;

  function handleSelectAllTasks() {
    onFilterChange({ status: "All" });
    setFilter("All");
    setFilters({ status: "All" });
    setCurrFilter("All");
  }

  function handleActiveTasks() {
    onFilterChange({ status: "Active" });
    setFilter("Active");
    setFilters({ status: "Active" });
    setCurrFilter("Active");
  }

  function handleCompletedTasks() {
    onFilterChange({ status: "Completed" });
    setFilter("Completed");
    setFilters({ status: "Completed" });
    setCurrFilter("Completed");
  }

  return (
    <>
      <div className="flex justify-center flex flex-row gap-3">
        <button
          onClick={handleSelectAllTasks}
          value={currFilter}
          onChange={(e) => setCurrFilter(e.target.value)}
          className={`text-lg rounded-md px-4 py-2 text-white whitespace-nowrap ${
            currFilter === "All" ? "bg-blue-500" : "bg-gray-300 text-black"
          }`}
        >
          All
        </button>
        <button
          onClick={handleActiveTasks}
          value={currFilter}
          onChange={(e) => setCurrFilter(e.target.value)}
          className={`text-lg rounded-md px-5 py-2 text-white whitespace-nowrap ${
            currFilter === "Active" ? "bg-blue-500" : "bg-gray-300 text-black"
          }`}
        >
          Active
        </button>
        <button
          onClick={handleCompletedTasks}
          value={currFilter}
          onChange={(e) => setCurrFilter(e.target.value)}
          className={`text-lg rounded-md px-5 py-2 text-white whitespace-nowrap ${
            currFilter === "Completed"
              ? "bg-blue-500"
              : "bg-gray-300 text-black"
          }`}
        >
          Completed
        </button>
      </div>
    </>
  );
}
