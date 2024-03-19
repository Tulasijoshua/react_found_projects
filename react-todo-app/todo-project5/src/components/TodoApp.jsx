import React, { useState, useEffect } from 'react';
import './style.css';
import TodoList from './TodoList';
import TodoDetails from './TodoDetails';

const TodoApp = () => {
  const [addItem, setAddItem] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editText, setEditText] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null); // New state for selected todo item

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // ... (rest of the code remains the same)

  function handleTodoClick(todo) {
    setSelectedTodo(todo);
  }

  return (
    <div>
      <TodoList todos={todos} setTodos={setTodos} setTodoEditing={setTodoEditing} setEditText={setEditText} handleTodoClick={handleTodoClick} />
      <TodoDetails selectedTodo={selectedTodo} />
    </div>
  );
};

export default TodoApp;
