import "./App.css";

import TodoList from "./newcomponents/Todo-components/TodoList";
import TodoInput from "./newcomponents/Todo-components/TodoInput";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    // under the hood at the bottom of ToDoContext -> it takes care of all the logic including setting states and acitons
    // so i dont call the native React Context object <ToDoContext.Provider></ToDoContext.Provider> here because its being called inside the custom <TodoProvider>
    // now inside the child ui components, i wont pass props, instead i will pull the functions out of the ToDoContext in the child components
    <TodoProvider>
      <div>
        <TodoInput />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
