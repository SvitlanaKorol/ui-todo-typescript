import React, { useState } from "react";
import { TodoResponse } from "./types/types"; 
import { TodoTable } from "./components/TodoTable";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchTodos = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
      .then((res) => res.json())
      .then((data: TodoResponse[]) => {
        setTodos(data);
        setStarted(true);
      })
      .catch((error) => {
        console.error("Помилка завантаження:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>TODO (TypeScript)</h1>
      {!started && (
        <button onClick={fetchTodos} disabled={loading}>
          {loading ? "Завантаження..." : "Start TODO"}
        </button>
      )}
      {started && <TodoTable todos={todos} onToggle={toggleTodo} />}
    </div>
  );
}

export default App;