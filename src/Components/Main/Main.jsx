import React from 'react'
import "./Main.sass"

export default function Main({children}) {
  return (
    <main className='main-page'>
        <div className='content-main-page'>
          {children}
        </div>
    </main>
  )
}
