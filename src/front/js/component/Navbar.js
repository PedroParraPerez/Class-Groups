import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { ModalForSignUp } from "./Modals/modalForSignUp";



export const Navbar = () => {

  const [modalforSignUp, setModalforSignUp] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <Link to="/">
          <span
            className="navbarBrand spanNavbarLink"
            id="sacameelpadding"
            href="#"
          >
            Home
          </span>
        </Link>
        {/* HAMBURGER MENU START  */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#dropdownlinks"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* HAMBURGER MENU END  */}

        {/* LINKS START */}
        <div id="dropdownlinks" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-3 links">
            <li className="nav-item dropdown">
              <Link to="/attendancy">
                <span className="spanNavbarLink">
                  <b>Asistencia</b>
                </span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/randomgroups">
                <span className="spanNavbarLink">
                  <b>Grupos Aleatorios</b>
                </span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="spanNavbarLink">
                  <b>Perfil</b>
                </span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
            <Link to="/login">
                <span className="spanNavbarLink">
                  <b>Iniciar Sesión</b>
                </span>
              </Link>
              </li>
              <li className="nav-item dropdown">
              
                <span onClick={()=>{setModalforSignUp(!modalforSignUp)}} className="spanNavbarLink">
                  <b>Registrarse</b>
                </span>
             
            </li>
          </ul>
        </div>
        {/* LINKS START */}
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 193">
        <path
          fill="#3062be"
          d="M0,64L30,96C60,128,120,192,180,186.7C240,181,300,107,360,85.3C420,64,480,96,540,112C600,128,660,128,720,112C780,96,840,64,900,53.3C960,43,1020,53,1080,85.3C1140,117,1200,171,1260,186.7C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      </nav>
      {/* Modals START */}
      {modalforSignUp ? <ModalForSignUp stateModal="is_open"/> :  ""}
      {/* Modals END */}
     
    
    </>
  );
};
