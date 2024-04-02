import { PiSunBold } from "react-icons/pi";
import { IoMoon } from "react-icons/io5";
import { ThemeContext, useThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";
import { useTodoContext } from "../context/TodoProvider";

const Head = () => {
  const { isDark, dispatch } = useThemeContext();
  const { inputRef } = useTodoContext();
  return (
    <header className="text-4xl flex w-full justify-between mt-[10rem]">
      <h1 className="tracking-widest font-extralight dark:text-white">TODO</h1>

      <button
        className="rounded-xl p-2 bg-[#e3dfdf39] border-[#ffffff3e] border shadow-md hover:shadow-xl hover:scale-105  text-light-yellow dark:bg-[#ffffff3e] dark:text-slate-800"
        onClick={() => {
          dispatch({ type: "toggleTheme" });
          inputRef.current.focus();
        }}
      >
        {isDark ? <IoMoon /> : <PiSunBold />}
      </button>
    </header>
  );
};

export default Head;
