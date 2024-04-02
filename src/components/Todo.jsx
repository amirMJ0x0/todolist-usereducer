import { RiEditBoxLine, RiCheckboxBlankLine } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useTodoContext } from "../context/TodoProvider";
import { useMemo, useState } from "react";

const Todo = ({ id, isChecked, text }) => {
  const { dispatch, editFlag, editID } = useTodoContext();
  const editTodo = () => {
    dispatch({ type: "EDIT_CONFIG", payload: { id, text } });
    document.querySelector(".todoInput").focus();
  };

  return (
    <li
      className={`${isChecked && "opacity-30"} ${
        id === editID && "animate-bounce bg-[#618bc73b] dark:bg-slate-900"
      } flex bg-[#ffffff4b] border border-[#ffffff6d] shadow-md backdrop-blur-md dark:border-none dark:bg-slate-700 px-4 py-3 rounded-t-md justify-between items-baseline`}
    >
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "CHECK_TODO", payload: id })}
          className={`outline-none dark:text-[#98f4f4] text-[#6895D2] dark:hover:opacity-60 text-xl ${
            editFlag && "invisible"
          }`}
        >
          {isChecked ? <IoMdCheckboxOutline /> : <RiCheckboxBlankLine />}
        </button>
        <p
          className={`${
            id === editID && "animate-pulse font-bold"
          } text-slate-800 break-words px-2 max-sm:text-sm dark:text-slate-200 text-decoration-line-through ${
            isChecked && "line-through"
          }
          ${persianRex.text.test(text) ? "text-right" : "text-left"}`}
          title={text}
          dir={persianRex.text.test(text) ? "rtl" : "ltr"}
        >
          {text}
        </p>
      </div>
      <div className="flex gap-4 ml-1">
        <button
          onClick={editTodo}
          className={`text-slate-500 text-xl ${
            editFlag && "invisible"
          } outline-none`}
        >
          <RiEditBoxLine />
        </button>
        <button
          onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}
          className={`text-[#D04848] dark:text-slate-100 text-lg dark:hover:text-[#D04848] hover:animate-pulse hover:duration-300 ${
            editFlag && "invisible"
          } outline-none`}
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Todo;
