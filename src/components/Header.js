import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from '../assets/kingsley-image.jpg';


function Header(props) {
    return (
        <div id='header'>
            <header className="text-black">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-xs-3 col-lg-2 text-center">
                            <img src={Image}
                                alt="Person - Avatar Placeholder@seekpng.com" className="border border-dark border-5  rounded-circle img-fluid " style={{ width: '150px', height: '150px' }} />
                        </div>
                        <div className="col text-center text-lg-start">
                            <h1>Kingsley Robert-Ezenta</h1>

                            <p className="lead">Software development student at SAIT (Southern Alberta Institute of Technology)</p>

                            <ul className="list-inline">
                                <li className="list-inline-item my-2"><a href="mailto:krobertezenta@gmail.com" className="fs-5 link-light text-decoration-none text-black"><i
                                    className="bi bi-envelope pe-1"></i>
                                    <span className="text-center">E-mail</span></a></li>
                                <li className="list-inline-item my-2"><a href="https://www.linkedin.com/in/kingsley-robert-ezenta/" className="fs-5 link-light text-decoration-none text-black"><i
                                    className="bi bi-linkedin pe-1"></i>
                                    LinkedIn</a></li>
                                <li className="list-inline-item my-2"><a href="https://github.com/Kingsleyre" className="fs-5 link-light text-decoration-none text-black"><i
                                    className="bi bi-github pe-1"></i>
                                    GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
