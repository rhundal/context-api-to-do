import FilterContext from "../../context/FilterContext";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function FilterButtons({
  currFilter,
  setCurrFilter,
}: {
  currFilter: string;
  setCurrFilter: (filter: string) => void;
}) {
  const context = useContext(FilterContext);
  const themeContext = useContext(ThemeContext);

  if (!context || !themeContext) return null;

  const activeTheme = themeContext?.initialTheme.currentTheme;

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
          className={`text-lg rounded-md px-4 py-2 whitespace-nowrap transition-colors ${
            currFilter === "All"
              ? "bg-blue-500 text-white" // Selected Style (same for both dark and light modes)
              : activeTheme === "dark"
                ? "bg-[#1e1e1e] border border-gray-700 text-white hover:bg-gray-800" // Unselected Dark Mode
                : "bg-gray-300 text-black hover:bg-gray-400" // Unselected Light Mode
          }`}
        >
          All
        </button>
        <button
          onClick={handleActiveTasks}
          value={currFilter}
          onChange={(e) => setCurrFilter(e.target.value)}
          className={`text-lg rounded-md px-4 py-2 whitespace-nowrap transition-colors ${
            currFilter === "Active"
              ? "bg-blue-500 text-white" // Selected Style (same for both dark and light modes)
              : activeTheme === "dark"
                ? "bg-[#1e1e1e] border border-gray-700 text-white hover:bg-gray-800" // Unselected Dark Mode
                : "bg-gray-300 text-black hover:bg-gray-400" // Unselected Light Mode
          }`}
        >
          Active
        </button>
        <button
          onClick={handleCompletedTasks}
          value={currFilter}
          onChange={(e) => setCurrFilter(e.target.value)}
          className={`text-lg rounded-md px-4 py-2 whitespace-nowrap transition-colors ${
            currFilter === "Completed"
              ? "bg-blue-500 text-white" // Selected Style (same for both dark and light modes)
              : activeTheme === "dark"
                ? "bg-[#1e1e1e] border border-gray-700 text-white hover:bg-gray-800" // Unselected Dark Mode
                : "bg-gray-300 text-black hover:bg-gray-400" // Unselected Light Mode
          }`}
        >
          Completed
        </button>
      </div>
    </>
  );
}
