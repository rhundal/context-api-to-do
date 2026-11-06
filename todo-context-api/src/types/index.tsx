// types/index.ts

// modified each type in relevance to the application structure and requirement

export type TaskStatus = "All" | "Active" | "Completed" | "";

export interface Task {
  id: string;
  text: string;
  status: TaskStatus;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string) => Task;
}

// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
  onDelete?: (taskId: string) => void;
  onEdit?: (taskId: string) => Task;
  addTodo: (text: string) => void;
  toggleTodo: (id: string | number) => void;
  deleteTodo: (id: string | number) => void;
  editTodo: (id: string | number, newText: string) => void;
  clearCompleted: (id: string | number) => void; //  Removes all completed todos.
}

export interface TaskFilterProps {
  appliedFilter: TaskStatus;
  onFilterChange: (filters: { status?: TaskStatus }) => void;
  setFilter: (filter: TaskStatus) => void;
}

export interface FormDataProps {
  tasksLength: number;
  onTaskChange: (newTask: Task) => void;
}

export interface ThemeSwitchingProps {
  toggleTheme: (currentTheme: string) => void;
}
