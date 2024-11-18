import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from './store/atoms/counterAtom';
import { useState } from 'react';
import { useEffect } from 'react';
import { memo } from 'react';
function App() {

  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(c => c + 1)
    }, 3000)
  }, [])
  return (
    <>
      <CurrentCount count={count}/>
      <Increase />
      <Decrease />
    </>
  )
}



const CurrentCount = memo(function ({count}) {

  return <>
    {count}
  </>
})

const Increase = memo(function () {

  function handleIncrease() {
    console.log("Hi from increase")
  }
  return <>
    <button onClick={handleIncrease}>Increase</button>
  </>
})

const Decrease = memo(function () {

  function handleDecrease() {
    console.log("Hi from decrease")
  }
  return <>
    <button onClick={handleDecrease}>Decrease</button>
  </>
})

export default App
