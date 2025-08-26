import { useState } from "react";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: newTodoText.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setNewTodoText("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const reorderTodos = (draggedId: string, targetId: string) => {
    const draggedIndex = todos.findIndex(todo => todo.id === draggedId);
    const targetIndex = todos.findIndex(todo => todo.id === targetId);
    
    if (draggedIndex === -1 || targetIndex === -1) return;
    
    const newTodos = [...todos];
    const [draggedTodo] = newTodos.splice(draggedIndex, 1);
    newTodos.splice(targetIndex, 0, draggedTodo);
    
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="add-todo">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add a new todo..."
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onReorder={reorderTodos}
          />
        ))}
      </div>
    </div>
  );
}
