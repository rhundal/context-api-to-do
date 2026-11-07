import "./App.css";

import TodoInput from "./components/Todo-components/TodoInput";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
import { ThemeProvider } from "./context/ThemeContext";
import ThemedToggleButton from "./components/Theme-components/ThemeToggleButton";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";
function App() {
  const themeContext = useContext(ThemeContext);

  const activeTheme = themeContext?.initialTheme.currentTheme || "light";

  return (
    // under the hood of ToDoContext -> it takes care of all the logic including setting states and acitons
    // so i dont call the native React Context object <ToDoContext.Provider></ToDoContext.Provider> here because its being called inside the custom <TodoProvider>
    // now inside the child ui components, i wont pass props, instead i will pull the functions out of the ToDoContext
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <div
            className={`flex justify-center m-15 min-h-screen transition-colors ${
              activeTheme === "dark" ? "bg-black" : "bg-[#F2F2F2]/50"
            }`}
          >
            <div
              className={`flex w-[700px] flex-col rounded-md shadow-sm border transition-colors ${
                activeTheme === "dark"
                  ? "bg-[#1e1e1e] border-gray-800 text-white"
                  : "bg-white border-gray-200 text-black"
              }`}
            >
              <ThemedToggleButton />
              <hr className="border-t border-gray-300 w-[95%] mx-auto" />
              <TodoInput />
            </div>
          </div>
        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
