import { useContext, useEffect, useState } from "react";
import { useTodoContext } from "../context/TodoProvider";
import { MemoContext } from "../context/MemoProvider";

const Section = () => {
  const { todos, dispatch, editFlag } = useTodoContext();
  const {
    itemCount,
    filterType,
    showAllTodos,
    showOnlyUndone,
    showOnlyCompleted,
  } = useContext(MemoContext);
  const clearAllTodos = () => {
    dispatch({ type: "DELETE_ALL_TODOS" })
    dispatch({type:"CANCEL_EDIT_OPERATION"})
  }

  return (
    todos.length > 0 && (
      <>
        <section className="flex  max-sm:items-center max-sm:text-xs bg-[#6895D2] dark:bg-slate-800 border-t-slate-300 border-t-[1px] text-slate-100 dark:text-slate-400 px-3 py-2 text-sm justify-between rounded-b-md">
          
          <p className="counter">
            <span>{itemCount}</span> items left
          </p>
          {!editFlag && (
            <>
              <div className="filter-box flex gap-2">
                <button
                  onClick={showAllTodos}
                  className={`${
                    filterType === "all" && "active"
                  } outline-none hover:text-light-yellow dark:hover:text-[#f0f0f0]`}
                >
                  All
                </button>
                <button
                  onClick={showOnlyUndone}
                  className={`${
                    filterType === "undone" && "active"
                  } outline-none hover:text-light-yellow dark:hover:text-[#f0f0f0]`}
                >
                  Undone
                </button>
                <button
                  onClick={showOnlyCompleted}
                  className={`${
                    filterType === "completed" && "active"
                  } outline-none hover:text-light-yellow dark:hover:text-[#f0f0f0]`}
                >
                  Completed
                </button>
              </div>
              <div
                onClick={clearAllTodos}
                className="clear-all hover:text-[#D04848]"
              >
                <button>Clear All Items</button>
              </div>
            </>
          )}
        </section>
      </>
    )
  );
};

export default Section;
