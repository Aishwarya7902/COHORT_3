import { useEffect, useState } from 'react'

function App() {




  return (
    <div>
        <Todo  key={1} title={"Go to gym"} done={false}/>
        <Todo key={2} title={"Go to study"} done={true}/>
    </div>

  )
}

function Todo({title,done}){
  return <div>
     {title}-{done ? "Done!!" : "Go and Finish"}

  </div>
}

export default App
