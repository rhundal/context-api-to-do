import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function ThemedToggleButton() {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const activeTheme = context.initialTheme.currentTheme;
  const toggleTheme = context.initialTheme.toggleTheme;

  function handleThemeChange() {
    toggleTheme(activeTheme);
  }

  const buttonStyle = {
    background: activeTheme === "dark" ? "#333" : "#FFF",
    color: activeTheme === "dark" ? "#FFF" : "#333",
    padding: "10px",
    border: `1px solid ${activeTheme === "dark" ? "#FFF" : "#333"}`,
  };

  return (
    <>
      <div
        className={`flex flex-row items-center w-full justify-between p-15  ${
          activeTheme === "dark"
            ? "bg-[#1e1e1e] border-gray-800 text-white"
            : "bg-white border-gray-200 text-black"
        }`}
      >
        <h1 className="font-black text-4xl"> Todo App (Context API) </h1>
        <button
          className=" rounded-md h-18 w-36 justify-end items-center text-white bg-[#3B3B3B]"
          style={buttonStyle}
          onClick={handleThemeChange}
        >
          Switch to <br /> {activeTheme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </>
  );
}
