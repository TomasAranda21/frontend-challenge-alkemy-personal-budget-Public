import React from 'react'

const InputsForm = ({name, value, onChange, type}) => {

  return (

    <div className="flex flex-col gap-1">
        <label htmlFor={name} className="capitalize">{name}</label>
        
        <input 

        type={type} 
        name={name}
        value={value}
        onChange={onChange}
        className="border-2 border-blue-400"
        

        />
    </div>
    
  )
}

export default InputsForm