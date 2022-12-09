import React, { useEffect, useState } from 'react'
import "./Footer.sass"
export default function Footer() {
    const [year, setYear] = useState("")
    useEffect(()=>{
        function updateYear(){
            setYear(new Date().getFullYear());
        }
        updateYear();
    })
  return (
    <footer className='Footer'>
        <h2>{year}</h2>
    </footer>
  )
}
