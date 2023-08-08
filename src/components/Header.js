import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from '../assets/kingsley-image.jpg';

function Header(props) {
  const { theme } = useContext(ThemeContext);

  const linkColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div id='header'>
      <header>
        <div className={`container py-5 bg-${theme}`}>
          <div className="row">
            <div className="col-xs-3 col-lg-2 text-center">
              <img src={Image}
                alt="Person - Avatar Placeholder@seekpng.com"
                className="border border-dark border-5 rounded-circle img-fluid"
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <div className="col text-center text-lg-start">
              <h1 className={`card-title text-${linkColor}`}>Kingsley Robert-Ezenta</h1>
              <p className="lead">Software development student at SAIT (Southern Alberta Institute of Technology)</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="mailto:krobertezenta@gmail.com"
                     className={`fs-5 link-light text-decoration-none text-${linkColor}`}
                     style={{ textDecoration: 'none' }}>
                    <i className="bi bi-envelope pe-1"></i>
                    <span className={`text-center`}>E-mail</span>
                  </a>
                </li>
                <li className="list-inline-item my-2">
                  <a href="https://www.linkedin.com/in/kingsley-robert-ezenta/"
                     className={`fs-5 link-light text-decoration-none text-${linkColor}`}
                     style={{ textDecoration: 'none' }}>
                    <i className="bi bi-linkedin pe-1"></i>
                    <span className={`text-center`}>LinkedIn</span>
                  </a>
                </li>
                <li className="list-inline-item my-2">
                  <a href="https://github.com/Kingsleyre"
                     className={`fs-5 link-light text-decoration-none text-${linkColor}`}
                     style={{ textDecoration: 'none' }}>
                    <i className="bi bi-github pe-1"></i>
                    <span className={`text-center`}>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
