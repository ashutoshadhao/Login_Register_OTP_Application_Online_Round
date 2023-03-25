import React from 'react'
import logoImage from "../../images/Logo.png"
import { NavLink } from "react-router-dom";
import "./header.css"
const Header = () => {
    return (

        <NavLink to="/" className='navbar-brand '>
            <img src={logoImage} alt="Logo" className='main-img-me' />
        </NavLink>


    )
}

export default Header 