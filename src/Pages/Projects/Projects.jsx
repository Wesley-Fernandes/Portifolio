import React, { useEffect, useState } from 'react'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import "./Projects.sass"
export default function Projects() {

  const [user_data, setData] = useState([])

  useEffect(()=>{
    async function getData(){
      const github = await fetch("https://api.github.com/users/Wesley-Fernandes/repos");
      const github_data = await github.json();
      setData(github_data)
    }
    
    getData();
  }, [])
  return (
    <div className='Projects-Page'>

        {user_data &&(
          user_data.map((user, index)=>{
            return(
                <ProjectCard key={index} title={user.name} url={user.html_url}>
                  <p>{user.description||"Usuario não forneceu uma descrição."}</p>
                </ProjectCard>
            )
          })
        )}

    </div>
  )
}
