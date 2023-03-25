import React from 'react'
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import Login from "../login/Login";
import Footer from '../footer/Footer';
const Home = () => {
    return (
        <div className='main-container-me'>
            <Header />
            <div className="row">
                <div className="col-12 col-lg-6 "> <Login /></div>
                <div className="col-12 col-lg-6 sidebar-image-me "> <SideBar /></div>
            </div>
            <Footer />
        </div>
    )
}

export default Home