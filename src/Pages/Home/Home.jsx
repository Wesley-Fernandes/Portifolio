import React, { useState } from 'react'
import "./Home.sass"
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../../Components/Main/Main"
import Header from "../../Components/Header/Header"	
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  
    const [page, setPage] = useState("Home");

  return (
    <div>

        <Header setPage={setPage}/>
        <Main>
          <div className='main-contents'>
            <div className='left-side'>
              <img src="https://avatars.githubusercontent.com/u/89518536?v=4"/>
              <div className='Hud__socialNewtorks'>
                  <a href="https://github.com/Wesley-Fernandes"><FaGithub/></a>
                  <a href="https://www.linkedin.com/in/wesley-israel-fernandes"><FaLinkedin/></a>
                  <a href="https://web.whatsapp.com/send/?1=pt_br&phone=5553981283952"><FaWhatsapp/></a>
              </div>
            </div>
            <div className='right-side'>
              {page==="Home" && <About/>}
              {page==="Contacts" && <Contacts/>}
              {page==="Projects" && <Projects/>}
            </div>
          </div>
        </Main>
        <Footer/>
    </div>
  )
}
