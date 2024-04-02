import { PiPlusCircleFill, PiArrowCircleRightFill } from "react-icons/pi";
import { useTodoContext } from "../context/TodoProvider";
import { MdCancel } from "react-icons/md";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
const Form = () => {
  const { dispatch, editFlag, textToEdit, inputRef } = useTodoContext();
  const [text, setText] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    setText(textToEdit);
  }, [textToEdit]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (editFlag) {
      console.log("edited");
      dispatch({ type: "EDIT_TODO", payload: text });
    } else {
      const newTodo = { id: nanoid(), text, isChecked: false };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      console.log("added");
    }

    //clear input
    setText("");
  };
  const back2Default = () => dispatch({ type: "CANCEL_EDIT_OPERATION" });
  const keyDownHandler = (e) => {
    let key = e.key;
    if (key === "Escape") {
      back2Default();
    }
    if (editFlag && key === "Enter") {
      dispatch({ type: "EDIT_TODO", payload: text });
    }
  };

  return (
    <form
      className="flex text-lg w-full mt-14 shadow-md"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => keyDownHandler(e)}
        placeholder="Type Something ..."
        required
        className="todoInput bg-[#f0f0f0] dark:bg-slate-700 p-2 outline-none rounded-l-md flex-1 text-black dark:text-white"
      />
      {editFlag && (
        <button
          onClick={back2Default}
          className="bg-[#D04848] dark:bg-slate-700 dark:hover:text-[#D04848] dark:text-slate-300 text-white text-4xl p-2 opacity-90 hover:animate-pulse hover:duration-300"
        >
          <MdCancel />
        </button>
      )}
      <button
        type="submit"
        className="p-2 text-4xl bg-[#6895D2] dark:bg-slate-800 dark:hover:text-[#98f4f4] text-slate-300 rounded-r-md hover:animate-pulse hover:duration-300 dark:text-slate-20"
      >
        {editFlag ? <PiArrowCircleRightFill /> : <PiPlusCircleFill />}
      </button>
    </form>
  );
};

export default Form;
