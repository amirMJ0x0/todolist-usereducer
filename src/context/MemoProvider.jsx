import { createContext, useMemo, useState } from "react";
import { useTodoContext } from "./TodoProvider";

export const MemoContext = createContext();
export const MemoProvider = ({ children }) => {
  const { todos } = useTodoContext();

  const [filterType, setFilterType] = useState("all");

  const filteredTodos = useMemo(() => {
    if (filterType === "completed") {
      return todos.filter((todo) => todo.isChecked);
    } else if (filterType === "undone") {
      return todos.filter((todo) => !todo.isChecked);
    } else return todos;
  }, [todos, filterType]);

  //   const itemCount = useMemo(() => filteredTodos.length, [filteredTodos]);
  const itemCount = useMemo(
    () => todos.filter((todo) => !todo.isChecked).length,
    [filteredTodos]
  );
  return (
    <MemoContext.Provider
      value={{
        itemCount,
        filteredTodos,
        filterType,
        setFilterType,
        showAllTodos: () => setFilterType("all"),
        showOnlyUndone: () => setFilterType("undone"),
        showOnlyCompleted: () => setFilterType("completed"),
      }}
    >
      {children}
    </MemoContext.Provider>
  );
};

export default MemoProvider;
