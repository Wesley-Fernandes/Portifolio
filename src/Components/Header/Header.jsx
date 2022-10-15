import React from 'react'
import logo from "../../Imgs/infinitum.gif"
import { Link } from 'react-router-dom'
import "./Header.sass"
export default function Header({setPage}) {

  function changePage(page) {
    setPage(page)
  }
  return (
    <header className='header-site'>
        <div className='header-icon'>
            <img className='animate__animated animate__bounceIn' src={logo} alt="Logo icon"/>
        </div>
        <nav className='header-nav'>
            <ul className='header-ul'>
                <li><button onClick={()=>changePage("Home")}>Home</button></li>
                <li><button onClick={()=>changePage("Contacts")}>Contato</button></li>
                <li><button onClick={()=>changePage("Projects")}>Projetos</button></li>
            </ul>
        </nav>
    </header>
  )
}
