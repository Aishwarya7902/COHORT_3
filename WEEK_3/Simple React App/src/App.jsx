import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <input type="text" placeholder='Add Your todo Here'/>
        <br />
        <br />
        <button onClick={<AddTodo/>}>Add Todo!!</button>
      </>
  )
}

export default App
