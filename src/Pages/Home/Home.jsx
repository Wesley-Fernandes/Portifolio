import React, { useEffect, useState } from 'react'
import "./Home.sass"
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import {AiFillStar, AiOutlineStar, AiFillPlayCircle, AiFillPauseCircle} from 'react-icons/ai'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../../Components/Main/Main"
import Header from "../../Components/Header/Header"	
import Contacts from '../Contacts/Contacts';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Footer from '../../Components/Footer/Footer';
import song from "../../audio/Breezy.ogg"
import Tecnologys from '../Tecnologys';
export default function Home() {
    const [play, setPlay] = useState("stoped");
    const [page, setPage] = useState("Home");



    function play_song(){
      const player = document.getElementById('player');
      console.log("Tentando iniciar...");
      player.volume = 0.2;
      player.loop = "true"
      player.play();
      setPlay("playing");
      
    }

    function stop_song(){
      setPlay("stoped");
      const player = document.getElementById('player');
      player.pause();
      
    }



  return (
    <div>
        <Header setPage={setPage}/>
        <Main>
          <div className='main-contents'>
            <div className='left-side'>


              <audio loop id='player' preload='true' >
                <source src={song}  type="audio/ogg"/>
              </audio>

              {play === "stoped" ? (
                <div className='Player'>
                  <AiFillPlayCircle onClick={play_song} className="animate__infinite animate__animated animate__heartBeat"/>
                </div>
              ):(
                  <div className='Player'>
                    <AiFillPauseCircle onClick={stop_song} className="animate__infinite animate__animated animate__heartBeat"/>
                  </div>
              )}





              <img src="https://i.ibb.co/v4g9h1T/IMG-20221204-WA0037.jpg"/>
              <div className='info-user'>
                  <h1>Wesley Fernandes</h1>
                  <span>
                    <AiFillStar className='stars'/>
                    <AiFillStar className='stars'/>
                    <AiFillStar className='stars'/>
                    <AiFillStar className='stars'/>
                    <AiOutlineStar className='stars'/>
                    Front-end Developer
                  </span>
                  <span>
                    <AiFillStar className='stars'/>
                    <AiFillStar className='stars'/>
                    <AiOutlineStar className='stars'/>
                    <AiOutlineStar className='stars'/>
                    <AiOutlineStar className='stars'/>
                    Back-end Developer
                  </span>
              </div>
            </div>
            <div className='right-side'>
              {page==="Home" && <About/>}
              {page==="Contacts" && <Contacts/>}
              {page==="Tecnologias" && <Tecnologys/>}
              {page==="Projects" && <Projects/>}
            </div>
          </div>
        </Main>
        <Footer/>
    </div>
  )
}
