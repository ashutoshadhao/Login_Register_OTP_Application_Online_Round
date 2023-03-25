import React from 'react'
import FBC from "../../images/FBC.png"
import "./sidebar.css"
const SideBar = () => {
    return (
        <div className='image-sidebar-me '>
            <img src={FBC} alt="" className='banner-me img-fluid' />
        </div>
    )
}

export default SideBar