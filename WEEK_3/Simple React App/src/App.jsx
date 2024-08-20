import { useState } from 'react'
import './App.css'



function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("")

  function addTodo() {
    setTodos([...todos, {
      title: inputValue
    }])
    setInputValue(""); //clear input value
  }

  function deleteTodo(index){
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos)
  }

 
  return (

    <div>
      <input
        type='text'
        value={inputValue}
        placeholder='Add Todo'
        onChange={(e) => setInputValue(e.target.value)

        }
      />
      <button onClick={addTodo}>Add </button>
      {todos.map((todo,index ) => (
          <Todo 
                  key={index}
                  title={todo.title}
                  index={index}
                  deleteTodo={deleteTodo}
                />
         
      )
      )}

    </div>

  )
}

function Todo({title,index,deleteTodo}) {


  return <div>
    <h1>{title}</h1>
    <button onClick={() => deleteTodo(index)}>Delete</button>
  </div>
}




export default App
