import React, {useState, useEffect} from 'react'
import './style.css'
import Header from './Header'

const MyTodo = () => {
    const [addItem, setAddItem] = useState("")
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) ?? [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function submitItem(e) {
        e.preventDefault()
        if(!addItem) {
            alert('Enter new item.....')
        } else {
            let addDate = new Date()
            const newItem = {
            id: todos.length,
            text: addItem,
            newDate: addDate.toDateString(),
            completed: false
        }
        setTodos([...todos, newItem])
        setAddItem("")
        }

    }

    
  return (
    <div className='box'>
      <form onSubmit={submitItem}>
        <input className='addItem' type='text' value={addItem} onChange={(e) => setAddItem(e.target.value)} />
        <button className='btnSubmit' type='submit'>Add</button>
      </form>
      <div className='list'>
        {
            todos.map(todo => <div className='list-item' key={todo.id}>  
                     <div className='text-item'>{todo.text} <span className='newDate'>{todo.newDate} </span></div>
            </div>)
        }
      </div>
    </div>
  )
}

export default MyTodo
