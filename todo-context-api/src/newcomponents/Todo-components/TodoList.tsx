import TodoItem from "./TodoItem";
export default function TodoList() {
  return (
    <div className="m-5">
      <div>
        <TodoItem />
      </div>
      <hr className="border-t border-gray-300 w-full mx-auto" />
      <div className="bg-white w-full flex justify-between flex-row p-3">
        2 items left
      </div>
    </div>
  );
}
