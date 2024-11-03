import React,{ useContext, useState } from "react"

const BulbContext = React.createContext();
function App() {

  const [bulbOn, setBulbOn] = useState(false)
  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn,
        setBulbOn
      }}>
        <LightBulb />
      </BulbContext.Provider>

    </div>
  )
}

function LightBulb() {


  return <div>
    <BulbState />
    <ToggleBulb />
  </div>
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb is On" : "Bulb is off"}
  </div>
}

function ToggleBulb() {
  const { bulbOn, setBulbOn } = useContext(BulbContext)
  function toggle() {
    setBulbOn(currentState => !currentState)
  }
  return <div>
    <button onClick={toggle}>Toggle Bulb</button>
  </div>
}
export default App
