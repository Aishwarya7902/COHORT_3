import React, { useRef } from 'react';

function FocusInput(){
const inputRef=useRef(null)
const handleFocus = () => {
    inputRef.current.focus()
};
  return <div>

    <input ref={inputRef} type='text' placeholder='click the button to focus me'/>
    <button onClick={handleFocus}>Focus the input</button>
  </div>
}

export default FocusInput;