import { type Task } from "../../types";
import ToDoContext from "../../context/TodoContext";
import { useContext, useState } from "react";

interface taskProps {
  task: Task;
}

export default function TodoItem({ task }: taskProps) {
  const [editMode, setEditMode] = useState(false);
  const [inputField, setInputField] = useState("");
  const context = useContext(ToDoContext);

  if (!context) return null;

  const deleteTodo = context.initialTask.deleteTodo;
  const editTodo = context.initialTask.editTodo;

  function handleDeleteTask(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    deleteTodo(task.id);
  }

  function handleEditTask(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setEditMode(true);
  }

  function saveChanges(newTodo: string) {
    if (!newTodo.trim()) {
      setInputField(task.text);
      setEditMode(false);
      return;
    }
    editTodo(task.id, inputField);
    setEditMode(false);
  }

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault();
    saveChanges(inputField);
  }

  return (
    <>
      <div className="bg-white w-full flex justify-between flex-row py-3 px-5 border-1 border-gray-300 rounded-md">
        {editMode ? (
          <form
            onSubmit={handleSubmitForm}
            className="flex flex-row w-full gap-3 items-center"
          >
            <div className="flex flex-row w-full justify-between p-5">
              <input
                type="text"
                className="w-full h-12 border-t border-gray-100 rounded-md bg-white"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
                autoFocus
                onBlur={(e) => saveChanges(e.target.value)}
              />
            </div>
          </form>
        ) : (
          <>
            <div className="flex flex-row gap-3 text-lg items-center">
              <input
                type="checkbox"
                // checked={task.status === "Completed"}
                className="rounded-full border border-gray-300 appearance-none w-5 h-5 checked:bg-green-400 checked:border-transparent"
              />
              {task.text}
            </div>
            <div className="flex flex-row gap-2">
              <button
                onClick={(e) => handleDeleteTask(e)}
                className="bg-[url('/delete.jpg')] bg-cover bg-center w-10 h-11"
              ></button>
              <button
                onClick={(e) => handleEditTask(e)}
                className="bg-[url('/edit.svg')] bg-cover bg-center w-12 h-12"
              ></button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
