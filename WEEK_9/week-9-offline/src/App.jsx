import { useEffect, useState } from 'react'

function App() {

const [count,setCount]=useState(1)
function increment(){
  setCount(currentVal=>currentVal+1)
}
useEffect(()=>{ //useEffect lets us perform side effect operations
  setInterval(increment,1000)
},[])//[] is the dependency array
  
  

  return (
    <div>
        {count}
    </div>

  )
}


export default App
