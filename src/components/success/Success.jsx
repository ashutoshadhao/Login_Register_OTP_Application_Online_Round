import React from 'react'
import logoImage from "../../images/Logo.png"
const Success = () => {
    return (
        <div className='d-flex align-items-center justify-content-center success-me flex-column '>
            <img src={logoImage} alt="logo" srcset="" />
            <p className='success-text-me'>Success !</p>
        </div>
    )
}

export default Success