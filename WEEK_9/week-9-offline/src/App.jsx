import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div style={{
      background:"#dfe6e9",
      height:"100vh",
      width:"100vw"
      
    }}>
       <ToggleMeassge/> 
    </div>
  )
}

const ToggleMeassge =()=>{
  const [notificationCount,setNotifactionCount]=useState(0);
  function increment(){
    setNotifactionCount(notificationCount+1)
  }
  return(
    <div>
        <button onClick={increment}>Toggle Message</button>
        {notificationCount}
    </div>
  )
}
export default App
