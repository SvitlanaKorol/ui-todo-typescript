import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { TodoTable } from "./components/TodoTable";
function App() {
    const [todos, setTodos] = useState([]);
    const [started, setStarted] = useState(false);
    const [loading, setLoading] = useState(false);
    const fetchTodos = () => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=100")
            .then((res) => res.json())
            .then((data) => {
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
    const toggleTodo = (id) => {
        setTodos((prev) => prev.map((todo) => todo.id === id
            ? Object.assign(Object.assign({}, todo), { completed: !todo.completed }) : todo));
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "TODO (TypeScript)" }), !started && (_jsx("button", Object.assign({ onClick: fetchTodos, disabled: loading }, { children: loading ? "Завантаження..." : "Start TODO" }))), started && _jsx(TodoTable, { todos: todos, onToggle: toggleTodo })] }));
}
export default App;
