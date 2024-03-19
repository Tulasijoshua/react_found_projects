import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import Header from './components/Header'
import TodoDetails from './components/TodoDetails'
import TodoApp from './components/TodoApp'
import MyTodo from './components/MyTodo'
// import {v4 as uuidv4} from 'uuid';

function App() {

  return (
    <div className="body">
      <div className="container">
        <MyTodo />
        {/* <TodoDetail /> */}
        {/* <TodoDetails />
        <TodoApp /> */}
        {/* <Header />
        <TodoList /> */}
      </div>
    </div>
  )
}

export default App
