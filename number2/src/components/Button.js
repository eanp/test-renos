import React from 'react'
import './button.css'

export const Button = ({onOpen}) => {
  return (
    <div className="btn">
        <button onClick={()=>onOpen()} className="js-btn">Open Modal</button>
    </div>
  )
}
