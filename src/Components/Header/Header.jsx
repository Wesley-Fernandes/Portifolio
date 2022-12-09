import React, {useState} from "react";
import logo from "../../Imgs/infinitum.gif";
import { Link } from "react-router-dom";
import { ImMenu, ImArrowRight } from "react-icons/im";
import "./Header.sass";
export default function Header({ setPage }) {
  const [show, setShow] = useState(false)
  function changePage(page) {
    setPage(page);
  }
//https://api.github.com/users/wesley-fernandes
  function menu_changer(){
    if(show===false){
      setShow(true);
      return
    }else{
      setShow(false);
      return
    }
  }

  return (
    <header className="header-site">
      <nav className="header-nav">
        <ImMenu className="header-menu" onClick={menu_changer}/>
        <div className="header--menu--macro">
          <span className="item" onClick={() => changePage("Home")}>
              Sobre mim
          </span>
          <span className="item" onClick={() => changePage("Contacts")}>
              Redes Sociais
          </span>
          <span className="item" onClick={() => changePage("Tecnologias")}>
              Tecnologias
          </span>
          <span className="item" onClick={() => changePage("Projects")}>
              Projetos
          </span>
        </div>
        <div className="header--menu--items">
          {!show ? (
           <>

           </>  
          ):(
            <>
              <span className="item" onClick={() => changePage("Home")}>
              Sobre mim
              </span>
              <span className="item" onClick={() => changePage("Contacts")}>
              Redes Sociais
              </span>
              <span className="item" onClick={() => changePage("Tecnologias")}>
              Tecnologias
              </span>
              <span className="item" onClick={() => changePage("Projects")}>
              Projetos
              </span>
            </>
          )}
          
        </div>
      </nav>
    </header>
  );
}
