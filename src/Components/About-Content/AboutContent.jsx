import React from 'react'
import "./AboutContent.sass"
export default function AboutC({title, children}) {
  return (
    <div className='Outlined-About animate__animated animate__fadeIn'>
        <h2>{title}</h2>
        <hr />
        <p>{children}</p>
    </div>
  )
}
