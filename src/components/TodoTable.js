import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export function TodoTable({ todos, onToggle }) {
    return (_jsxs("table", Object.assign({ border: 1, cellPadding: 8 }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "ID" }), _jsx("th", { children: "User ID" }), _jsx("th", { children: "\u041D\u0430\u0437\u0432\u0430" }), _jsx("th", { children: "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u043E" })] }) }), _jsx("tbody", { children: todos.map((todo) => (_jsxs("tr", { children: [_jsx("td", { children: todo.id }), _jsx("td", { children: todo.userId }), _jsx("td", { children: todo.title }), _jsx("td", { children: _jsx("input", { type: "checkbox", checked: todo.completed, onChange: () => onToggle(todo.id) }) })] }, todo.id))) })] })));
}
