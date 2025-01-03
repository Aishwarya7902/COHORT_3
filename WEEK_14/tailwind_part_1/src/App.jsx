import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import { Otp } from './components/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='h-screen bg-blue-700'>
      <Otp/>
    </div>

  )
}

export default App
