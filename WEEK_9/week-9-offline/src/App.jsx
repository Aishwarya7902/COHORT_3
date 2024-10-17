import { useEffect, useState } from 'react'

function App() {

const todos=[{
  title:"week 9.4",
  done:false
},{
  title:"web3 week 4",
  done:true
}]

const todosComponents=todos.map(todo=><Todo title={todo.title} done={todo.done}/>)
  return (
    <div>
        {todosComponents}
    </div>

  )
}

function Todo({title,done}){
  return <div>
     {title}-{done ? "Done!!" : "Go and Finish"}

  </div>
}

export default App
