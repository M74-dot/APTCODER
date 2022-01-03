import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import logo from '../images/logo-svg.svg';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="APTCODER" height="60px" className="ms-3"/>
            {/* <NavLink className="navbar-brand" to="#">Apt - Coder</NavLink> */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link ms-3" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ms-3" to="/about">About</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Courses
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/">Spoon Course ( Class 1-3 )</NavLink>
                    <NavLink className="dropdown-item" to="/">Kiddo Course ( Class 4-5 ) </NavLink>
                    <NavLink className="dropdown-item" to="/">Buddy Course ( Class 6-8 ) </NavLink>
                    <NavLink className="dropdown-item" to="/">Pro Course ( Class 9-12 ) </NavLink>
                    <NavLink className="dropdown-item" to="/">Summer Coding Camp</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ms-3" to="/buy">Buy Course</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ms-3" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ms-3" to="/schools">Schools</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ms-3" to="login">Sign IN</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ms-3" to="/signup">Sign UP</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link ms-3 me-4" to="freeclass">Book a FREE Class</NavLink>
                </li>
            </ul>
    </div>
    </nav>
    </>
    )
}

export default Navbar
