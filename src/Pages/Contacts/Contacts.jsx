import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from "emailjs-com"
import  "./Contacts.sass"


export default function Contacts() {
  const Secret = Encoder =>({
    getSecret: ()=> Encoder
  })

  const serviceID = function(){return "service_by5gpb9"}()
  const templateID = function(){return "template_hqlf6kt"}() 
  const userID =  function(){return "zaLPaOtefvwYURTkq"}()

  function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm(
      serviceID,
	    templateID,
      e.target,
      userID
    ).then((msgResponse=>{
      alert("Email enviado!");
      e.target.reset();
    })).catch((error)=>{
      alert("Houve um erro: tente mais tarde.");
      console.log("developer error =" + error);
    })
  }



  const modal = document.getElementsByTagName("dialog");




  return (
    <div className="Contact-Page">

      <div className='Contacts-Hud animate__animated animate__bounceIn'>
          <form onSubmit={sendEmail}>
            <AiOutlineMail/>
            <hr />
            <input type="text" placeholder='Seu nome...' name="nome_contator" required/>

            <input type="email" placeholder='O seu email...' name="email_contator" required />

            <input type="tel" placeholder='Seu número de celular...' name="numero_contator" required/>

            <textarea name="mensagem_contador" placeholder='Sua mensagem...' required/>
            <hr />
            <button type="submit">Enviar o email</button>
          </form>
      </div>
    </div>
  )
}
