import { useContext } from "react";
import { useTodoContext } from "../context/TodoProvider";
import AlertMsg from "./AlertMsg";
import Todo from "./Todo";
import { MemoContext } from "../context/MemoProvider";

const Todos = () => {
  // const { todos } = useTodoContext();
  const { filteredTodos } = useContext(MemoContext);
  return (
    <div className="mt-8">
      <ul className="flex flex-col gap-3">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => {
            return <Todo key={todo.id} {...todo} />;
          })
        ) : (
          <AlertMsg />
        )}
      </ul>
    </div>
  );
};

export default Todos;
