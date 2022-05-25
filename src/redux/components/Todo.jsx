import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../reducers/todoReducer";

export const Todo = () => {
  const state = useSelector((state) => state.todos.state);
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const loadTodos = () => dispatch(fetchTodos());
  return (
    <div>
      {state === "loading" && <div>Loading...</div>}
      {todos !== undefined && (
        <div>
          <h4>Loaded Todos</h4>
          <div>
            {todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <input readOnly type="checkbox" checked={todo.completed} />
                  <span>{todo.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <button type="button" onClick={loadTodos}>
        Load todos
      </button>
    </div>
  );
};
