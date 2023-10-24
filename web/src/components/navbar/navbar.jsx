import React from "react";
import './navbar.css'
// import { Routes, Route, Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "../pages/Home/home";

let Navbar = () => {


    
    


    return (

        
        <>

         <nav className="navbar">

            <ul>
                <li>
                <Link to={'/'}>Home</Link>
                </li>
                <li>
                <Link to={'/profile'}>Profile</Link>
                </li>
                <li>
                <Link to={'/signup'}>Signup</Link>
                </li>
                <li>
                <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    Chat
                </li>
            </ul>

         </nav>

        

        
        </>

    );




}

export default Navbar;