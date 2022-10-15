import React, { useState } from 'react'
import { SiJavascript, SiHtml5, SiSass, SiCss3, SiBootstrap, SiReact, SiGit, SiGithub,SiNodedotjs, SiNodemon, SiSocketdotio, SiReactrouter, SiFirebase, SiMysql, SiPostgresql,SiHandlebarsdotjs, SiStyledcomponents } from 'react-icons/si'
import "./About.sass"
import AboutC from '../../Components/About-Content/AboutContent'

export default function About() {
    const [value, setValue] = useState(0)
    
  return (
    <article className='About-Page'>
        <div className='Left-table'>
            {value>0 && (
                <AboutC title={"Quem eu sou"}>
                    Meu nome é Wesley fernandes, tenho aproximadamente 20 anos e sou apaixonado por tecnologia desde meus 17 anos. Atualmente trabalho na empressa <a href="https://www.facebook.com/intelligence.myvillage/">Intelligence - MyVillage</a>. Focando meus estudos contemporanemante apenas nessa area, mais especificamente em front-end. Tendo completado diversos cursos, desde Python até Javascript.
                </AboutC>
            )}
            {value>1 && (
                <AboutC title={"Tecnologias"}>
                    Completei diversos cursos, desde front-end até back-end como estruturar um banco de dados, tudo para seguir rumo a meus objetivos. Abaixo listei algumas das tecnologias que mais utilizo em prol de criar sites eficientes, tentando sempre aperfeiçoar cada um.
                    <hr />
                    <div className='Modules'>
                        <SiJavascript title='Javascript Ecma 6'/>
                        <SiHtml5 title='Html5'/>
                        <SiSass title='Sass'/>
                        <SiCss3 title='CSS 3'/>
                        <SiGithub title='GitHub'/>
                        <SiGit title='Git'/>
                        <SiReact title='ReactJs'/>
                        <SiBootstrap title='React Bootstrap'/>
                        <SiNodedotjs title='NodeJs'/>
                        <SiNodemon title='Nodemon'/>
                        <SiSocketdotio title='Socket IO'/>
                        <SiReactrouter title='React Router'/>
                        <SiFirebase title='Firebase'/>
                        <SiMysql title='MySql'/>
                        <SiStyledcomponents title='Styled Component'/>
                        <SiPostgresql title='Postgresql'/>
                        <SiHandlebarsdotjs title='Handlebars'/>
                    </div>
                </AboutC>
            )}
            {value>2 && (
                <AboutC title={"Minha rotina"}>
                    Costumo estudar recorrentemente de 10h a 12h horas por dia quando não é meu dia de trabalho sobre diversas tecnologias, tendo passado por diversas plataformas como <a href="https://www.alura.com.br/">Alura</a>, <a href="https://www.rocketseat.com.br/">Rocketseat</a> e <a href="https://www.cursoemvideo.com/meus-cursos/">Curso em video</a>, considerando todas de excelentes conteudos e também aprendi com varios professores cujo tenho como objetivo de conhecimento: <a href="https://www.linkedin.com/in/guanabara/">Gustavo Guanabara</a>, <a href="https://www.linkedin.com/in/diego-schell-fernandes/">Diego Fernandes</a>, <a href="https://www.linkedin.com/in/rodrigo-goncalves-santana/">Rodrigo Santana</a> e <a href="https://www.linkedin.com/in/matheusbattisti/">Matheus Battisti</a>.
                </AboutC>
            )}
        {value<3 && (
            <>
                <hr className='separator' />
                <button className='button--showmore animate__animated animate__fadeIn' onClick={()=> setValue(value+1)}>Mostrar mais informações</button>
            </>
        )}
        </div>
    </article>
  )
}

