import React from 'react';
import TodoApp from './TodoApp';
import TodoList from './TodoList';

const TodoDetails = ({ selectedTodo }) => {
  return (
    <div className="todo-details">
      {selectedTodo ? (
        <div>
          <h2>Todo Details</h2>
          <div>
            <strong>Text:</strong> {TodoApp.text}
          </div>
          <div>
            <strong>Date:</strong> {TodoList.newDate}
          </div>
        </div>
      ) : (
        <div>Please select a todo item.</div>
      )}
    </div>
  );
};

export default TodoDetails;
