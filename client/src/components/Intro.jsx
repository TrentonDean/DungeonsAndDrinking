import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import openingBar from '../assets/images/openingBar.jpg'

const Intro = () => {

    const navigate = useNavigate()

    const home = () => {
        sessionStorage.clear()
        navigate('/')
    }

    return(
        <div className="intro-page mt-3">
            <h6 className="text-start mt-3 ms-3">The party's story begins in a bar... </h6>
            <img src={openingBar} alt="bar" className="bar-img mt-1" />
            <p className="mt-3">
                Unbeknownst to our characters, we're all at the bar together, trying to enjoy a night of drinks and conversation.
                We've never met before, this being a random bar in the outskirts of the capital, but
                the bar is lively and friendly until... 
            </p>
            <button className="btn btn-warning" >Next...</button>
            <button onClick={home}>emergency exit</button>
        </div>
    )
}

export default Intro