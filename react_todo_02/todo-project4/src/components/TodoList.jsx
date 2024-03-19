import React, {useState} from 'react'

const TodoList = () => {
  const [addItem, setAddItem] = useState("")
  const [todos, setTodos] = useState([])
  const [updateItem, setUpdateItem] = useState(null)
  const [editingItem, setEditingItem] = useState("")

  const submitItem = (e) => {
    e.preventDefault()
    const listItem = {
      id: todos.length,
      text: addItem,
      completed: false
    }
    setTodos([...todos, listItem])
    setAddItem("")
  }

  const deleteItem = (id) => {
    const delItem = todos.filter(todo => todo.id !== id)
    setTodos(delItem)
  }

  const completeItem = (id) => {
    const compItem = todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed 
      }
      return todo
    })
    setTodos(compItem)
  }

  function editItem(id) {
    const update = todos.map(todo => {
      if(todo.id === id) {
        todo.text = editingItem
      }
      return todo
    })
    setTodos(update)
    setEditingItem("")
    setUpdateItem(null)
  }
  return (
    <div>
      <form onSubmit={submitItem}>
        <input type="text" value={addItem} onChange={(e) => setAddItem(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {
          todos.map(todo =>
            <div key={todo.id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {
                updateItem === todo.id ? <input type='text' value={editingItem} onChange={(e) => setEditingItem(e.target.value)} />
                : <div>{todo.text}</div>
              }
              {
                !updateItem && <button onClick={() => deleteItem(todo.id)}>Del</button>
              }
              {
                !updateItem && <input type="checkbox" onChange={() => completeItem(todo.id)} />
              }

              {
                updateItem === todo.id ? (<button onClick={() => editItem(todo.id)}>Edit</button>) 
                : (<button onClick={() => setUpdateItem(todo.id)}>Update</button>)
              }
            </div>)
        }
      </div>
    </div>
  )
}

export default TodoList
