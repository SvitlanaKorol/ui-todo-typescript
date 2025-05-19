import React from "react";
import { Todo } from "./types";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
};

export function TodoTable({ todos, onToggle }: Props) {
  return (
    <table border={1} cellPadding={8}>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Назва</th>
          <th>Виконано</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.userId}</td> 
            <td>{todo.title}</td>
            <td>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}