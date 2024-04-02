import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import TodoReducer from "../Reducer/TodoReducer";

export const TodoContext = createContext();

const initialState = {
  todos: [],
  editFlag: false,
  editID: "",
  textToEdit: "",
};
export const TodoProvider = ({ children }) => {
  const inputRef = useRef(null)
  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    const LS_todos = localStorage.getItem("todos");
    return {
      ...initialState,
      todos: LS_todos ? JSON.parse(LS_todos) : initialState.todos,
    };
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        editFlag: state.editFlag,
        editID: state.editID,
        textToEdit: state.textToEdit,
        dispatch,
        inputRef,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
