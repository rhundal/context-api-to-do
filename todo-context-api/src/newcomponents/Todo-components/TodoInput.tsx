import TodoList from "./TodoList";



export default function TodoInput() {


  return (
    <>
      <div className="flex justify-center m-5">
        <div className="flex flex-row w-full justify-between p-5">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="w-full h-12 border-t border-gray-100 rounded-md bg-white"
          />
        </div>
        <div className="my-auto">
          <button className="text-lg bg-blue-600 rounded-md px-7 py-3 text-white whitespace-nowrap">
            Add Todo
          </button>
        </div>
      </div>
      <div className="flex justify-center flex flex-row gap-3">
        <button className="text-lg bg-blue-500 rounded-md px-4 py-2 text-white whitespace-nowrap">
          All
        </button>
        <button className="text-lg bg-gray-300 border-1 border-gary-100 rounded-md px-5 py-2 text-black whitespace-nowrap">
          Active
        </button>
        <button className="text-lg bg-gray-300 border-1 border-gary-100 rounded-md px-7 py-2 text-black whitespace-nowrap">
          Completed
        </button>
      </div>
      <TodoList />
    </>
  );
}
