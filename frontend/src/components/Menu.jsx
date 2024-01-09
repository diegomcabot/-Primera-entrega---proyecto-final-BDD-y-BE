import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {

    return (
        <>
            <header className="text-center" name="home">
                <div className="intro-text">
                <h1 className="wow fadeInDown"><strong><font color="#1E90FF" face="Comic Sans MS">PESCAS</font></strong></h1>
                    <p className="wow fadeInDown"><strong><font color="#DC143C" face="Comic Sans MS"> </font></strong></p>
                    <p className="wow fadeInDown"><strong><font color="#DC143C" face="Comic Sans MS">Capturas de Diferentes Especies</font></strong></p>
                </div>
            </header>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <font color="#DC143C" face="Comic Sans MS">Inicio</font></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll navmenu">
                                <li className="nav-item">
                                    <Link className="nav-button" to="/Publicar"> <font color="#00008B" face="Comic Sans MS">Publicar Pesca</font></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );

};

export default Menu;