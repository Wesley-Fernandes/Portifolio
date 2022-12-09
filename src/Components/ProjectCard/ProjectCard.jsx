import React from 'react'
import "./ProjectCard.sass"
export default function ProjectCard({title, url ,children}) {
  return (
    <div className="Project_Card animate__animated animate__fadeIn animate__faster">
        <h2>{title}</h2>
        <hr />
        {children}
        <hr />
        <a href={url}>
            <button>Ir para projeto</button>
        </a>
    </div>
  )
}
