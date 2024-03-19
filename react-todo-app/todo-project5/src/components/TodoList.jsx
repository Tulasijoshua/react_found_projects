import React, {useState, useEffect} from 'react'
import './style.css'
import Header from './Header'

const TodoList = () => {
    // const initialState = 
    const [addItem, setAddItem] = useState("")
    // const [todos, setTodos] = useState([])
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) ?? [])
    const [todoEditing, setTodoEditing] = useState(null)
    const [editText, setEditText] = useState("")

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
        // localStorage.setItem("todos", JSON.stringify([...todos, newItem]))
        setAddItem("")
        }

    }

    function deleteItem(id) {
        const delItem = todos.filter((todo) => todo.id !== id)
        setTodos(delItem)
        // localStorage.setItem(JSON.stringify(delItem))
    }

    function itemComplete(id) {
        const compItem = todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(compItem)
        localStorage.setItem('todos', JSON.stringify(compItem))
    }

    function editUpdate(id) {
        const updated = todos.map(todo => {
            if(todo.id === id) {
                todo.text = editText
            }
            return todo
        })
        setTodos(updated)
        setTodoEditing(null)
        setEditText("")
        // localStorage.setItem('todos', JSON.stringify(updated))
    }
  return (
    <div className='box'>
        {/* <div className='sub-header'>Display: {addItem}</div> */}
      <form onSubmit={submitItem}>
        <input className='addItem' type='text' value={addItem} onChange={(e) => setAddItem(e.target.value)} />
        <button className='btnSubmit' type='submit'>Add</button>
      </form>
      <div className='list'>
        {
            todos.map(todo => <div className='list-item' key={todo.id}>
                {
                    todoEditing === todo.id ? <input className='edit-input' type='text' value={editText} onChange={(e) => setEditText(e.target.value)} />
                    : <div className='text-item'>{todo.text} <span className='newDate'>{todo.newDate} </span></div>
                }

                <div className='btns'>
                    {!todoEditing && <button className='btn delBtn' onClick={() => deleteItem(todo.id)}>
                        <i className='fa fa-trash'></i>
                    </button>}

                    { !todoEditing && <input className='btn compBtn' type="checkbox" onChange={() => itemComplete(todo.id)} />}

                    {
                        todoEditing === todo.id ? (<button className='btn updateBtn' onClick={() => editUpdate(todo.id)}>Submit</button>) 
                        :
                        (<button className='btn editBtn' onClick={() => setTodoEditing(todo.id)}>
                            <i className='fa fa-edit'></i>
                        </button>)
                    }
                </div>

            </div>)
        }
      </div>
    </div>
  )
}

export default TodoList
