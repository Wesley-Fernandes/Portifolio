import React, { useState } from 'react'
import { SiJavascript, SiHtml5, SiSass, SiCss3, SiBootstrap, SiReact, SiGit, SiGithub,SiNodedotjs, SiNodemon, SiSocketdotio, SiReactrouter, SiFirebase, SiMysql, SiPostgresql,SiHandlebarsdotjs, SiStyledcomponents } from 'react-icons/si'
import "./About.sass"

export default function About() {
    const [value, setValue] = useState(0)
  return (
    <article className='About-Page'>
        <div className='Left-table animate__animated animate__fadeInDown'>
            <dir className="About-texts">
            <p className='text-box'>
            Meu nome é Wesley fernandes, tenho aproximadamente 20 anos e sou apaixonado por tecnologia desde meus 17 anos. Atualmente trabalho na empressa <a href="https://www.facebook.com/intelligence.myvillage/">Intelligence - MyVillage</a>. Focando meus estudos contemporaneamente apenas nessa area, mais especificamente em front-end. Tendo completado diversos cursos, desde javascript até mesmo python.
            </p>
            <p className='text-box'>
                Completei diversos cursos, desde front-end até back-end como estruturar um banco de dados, tudo para seguir rumo a meus objetivos. Abaixo listei algumas das tecnologias que mais utilizo em prol de criar sites eficientes, tentando sempre aperfeiçoar cada um.
            </p>
                <SiJavascript className='icon' title='Javascript Ecma 6'/>
                <SiHtml5 className='icon' title='Html5'/>
                <SiSass className='icon' title='Sass'/>
                <SiCss3 className='icon' title='CSS 3'/>
                <SiGithub className='icon' title='GitHub'/>
                <SiGit className='icon' title='Git'/>
                <SiReact className='icon' title='ReactJs'/>
                <SiBootstrap className='icon' title='React Bootstrap'/>
                <SiNodedotjs className='icon' title='NodeJs'/>
                <SiNodemon className='icon' title='Nodemon'/>
                <SiSocketdotio className='icon' title='Socket IO'/>
                <SiReactrouter className='icon' title='React Router'/>
                <SiFirebase className='icon' title='Firebase'/>
                <SiMysql className='icon' title='MySql'/>
                <SiStyledcomponents className='icon' title='Styled Component'/>
                <SiPostgresql className='icon' title='Postgresql'/>
                <SiHandlebarsdotjs className='icon' title='Handlebars'/>

                <p className='text-box'>
                    Costumo estudar recorrentemente de 10h a 12h horas por dia quando não é meu dia de trabalho sobre diversas tecnologias, tendo passado por diversas plataformas como <a href="https://www.alura.com.br/">Alura</a>, <a href="https://www.rocketseat.com.br/">Rocketseat</a> e <a href="https://www.cursoemvideo.com/meus-cursos/">Curso em video</a>, considerando todas de excelentes conteudos e também aprendi com varios professores cujo tenho como objetivo de conhecimento: <a href="https://www.linkedin.com/in/guanabara/">Gustavo Guanabara</a>, <a href="https://www.linkedin.com/in/diego-schell-fernandes/">Diego Fernandes</a>, <a href="https://www.linkedin.com/in/rodrigo-goncalves-santana/">Rodrigo Santana</a> e <a href="https://www.linkedin.com/in/matheusbattisti/">Matheus Battisti</a>.
                </p>
            </dir>
        </div>
    </article>
  )
}

