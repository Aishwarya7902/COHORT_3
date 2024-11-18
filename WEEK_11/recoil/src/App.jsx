import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from './store/atoms/counterAtom';
function App() {
  

  return (
    <>
      <RecoilRoot>
         <Counter/>
      </RecoilRoot>
    </>
  )
}

function Counter(){
  return <>
     <CurrentCount/>
     <Increase/>
     <Decrease/>
  </>
}

function CurrentCount(){
  const count=useRecoilValue(counterAtom)
  return <>
    {count}
  </>
}

function Increase(){
  const setCount=useSetRecoilState(counterAtom)
  function handleIncrease()
  {
    setCount(c=>c+1);
  }
  return <>
    <button onClick={handleIncrease}>Increase</button>
  </>
}

function Decrease(){
  const setCount=useSetRecoilState(counterAtom)
  function handleDecrease()
  {
    setCount(c=>c-1);
  }
  return <>
    <button onClick={handleDecrease}>Decrease</button>
  </>
}

export default App
