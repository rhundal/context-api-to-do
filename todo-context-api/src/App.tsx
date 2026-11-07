import "./App.css";

import TodoInput from "./components/Todo-components/TodoInput";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";

function App() {
  return (
    // under the hood of ToDoContext -> it takes care of all the logic including setting states and acitons
    // so i dont call the native React Context object <ToDoContext.Provider></ToDoContext.Provider> here because its being called inside the custom <TodoProvider>
    // now inside the child ui components, i wont pass props, instead i will pull the functions out of the ToDoContext
    <TodoProvider>
      <FilterProvider>
        <div className="flex justify-center m-15 bg-[#F2F2F2]/50">
          <div className="flex bg-[#F2F2F2] w-[700px] flex-col">
            <div className="flex flex-row items-center w-full justify-between p-15">
              <h1 className="font-black text-4xl"> Todo App (Context API) </h1>
              <button className="justify-end items-center text-white bg-[#3B3B3B]">
                Switch to Dark
              </button>
            </div>
            <hr className="border-t border-gray-300 w-[95%] mx-auto" />
            <TodoInput />
          </div>
        </div>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;
