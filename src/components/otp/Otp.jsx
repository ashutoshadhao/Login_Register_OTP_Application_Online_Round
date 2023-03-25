import React, { useState, useEffect } from 'react'
import Header from "../header/Header";
import SideBar from "../sideBar/SideBar";
import { useNavigate } from 'react-router-dom';
import "./otp.css"
import Footer from '../footer/Footer';
const Otp = () => {
    const history = useNavigate();
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");
    const [five, setFive] = useState("");
    const [six, setSix] = useState("");
    const [counter, setCounter] = useState(10);
    const [color, setcolor] = useState("#cacace");
    useEffect(() => {

        if (one !== "" && two !== "" && three !== "" && four !== "" && five !== "" && six !== "") {
            setTimeout(() => {
                history("/success")
            }, 500);
        }

        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        if (counter === 0) {
            setcolor("black");
        }
        return () => clearInterval(timer);


    });
    const backHistory = () => {
        history(-1)
    }
    const counterControl = () => {
        setcolor("#cacace")
        setCounter(10);
    }
    const handelInputOne = (e) => {
        setOne(e.target.value.slice(0, 1));

    }
    const handelInputTwo = (e) => {
        setTwo(e.target.value.slice(0, 1));


    }
    const handelInputThree = (e) => {
        setThree(e.target.value.slice(0, 1));


    }
    const handelInputFour = (e) => {
        setFour(e.target.value.slice(0, 1));


    }
    const handelInputFive = (e) => {
        setFive(e.target.value.slice(0, 1));


    }
    const handelInputSix = (e) => {
        setSix(e.target.value.slice(0, 1));


    }
    return (
        <div className='main-container-me'>
            <Header />
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className=' d-flex align-items-center justify-content-center flex-column main-outer-container-me'>
                        <div>
                            <div className='heading-me '>
                                <p>Enter the verification <br />code to continue </p>
                            </div>
                            <div>
                                <p className='para-otp-me'>
                                    We sent to hellouser@heads.design. If you <br />don’t see it, check your spam.
                                </p>
                            </div>
                        </div>
                        <div className="inputfield">
                            <input type="number"
                                className="input" value={one} onChange={handelInputOne} />
                            <input type="number" className="input" value={two} onChange={handelInputTwo} />
                            <input type="number" className="input" value={three} onChange={handelInputThree} />
                            <input type="number" className="input" value={four} onChange={handelInputFour} />
                            <input type="number" className="input" value={five} onChange={handelInputFive} />
                            <input type="number" className="input" value={six} onChange={handelInputSix} />
                        </div>
                        <div className=" last-div-otp-me " >
                            <p className='back-button-me' onClick={backHistory}>
                                Back
                            </p>
                            <p className='resend-button' onClick={counterControl} style={{ color: color }}>
                                Resend {counter ? counter : ""}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12 "> <SideBar /></div>
            </div>
            <Footer />
        </div>
    )
}

export default Otp