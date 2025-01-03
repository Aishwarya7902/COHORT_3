import React from 'react'

const Input = ({
    onClick,
    type,
    placeholder
}) => {
  return (
    <span onClick={onClick} className={`text-white p-4  text-4xl px-2 py-2 cursor-pointer bg-blue-500 `}>
      <input className='bg-blue-500 outline-none rounded-2xl' type={type} placeholder={placeholder}>
      
      </input>
    </span>
  )
}

export default Input