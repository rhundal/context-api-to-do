import { useState, createContext, useMemo } from "react";

import { type TaskFilterProps } from "../types";
import { type TaskStatus } from "../types";

// import ToDoContext from "./TodoContext";

// Steps to follow
// 1. creating context
// 2. providing context
// 3. consuming context

interface FilterProviderProps {
  children: React.ReactNode;
}
interface FilterContextType {
  initialFilters: TaskFilterProps;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: FilterProviderProps) {
  const [currentFilter, setCurrentFilter] = useState<TaskStatus>("All");

  //   let firstFilters = {
  //     status: "Active",
  //   };

  function handleFilterChange(filters: { status?: TaskStatus }) {
    if (filters.status === "All") {
      setCurrentFilter("All");
    } else if (filters.status === "Active") {
      setCurrentFilter("Active");
    } else if (filters.status === "Completed") {
      setCurrentFilter("Completed");
    } else {
      setCurrentFilter("");
    }
  }

  function setFilter(filter: TaskStatus) {
    setCurrentFilter(filter);
  }

  let value = useMemo<FilterContextType>(
    () => ({
      initialFilters: {
        appliedFilter: currentFilter,
        onFilterChange: handleFilterChange,
        setFilter: setFilter,
      },
    }),
    [],
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export default FilterContext;
