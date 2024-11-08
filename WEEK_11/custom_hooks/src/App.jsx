import { useState } from 'react'
import './App.css'
import { usePrev } from './hooks/usePrev';

function App() {
 
  const [count,setCount]=useState(0);
  const prev=usePrev(count);
  return (
    <>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(curr=>curr+1);
      }}>Click Me</button>
      <p>The previous value was {prev}</p>
    </>
  )
}

export default App
