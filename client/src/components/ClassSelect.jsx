import {React, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Class from "./Class";

const ClassSelect = () => {

    const navigate = useNavigate()

    const classes = []

    const home = () => {
        navigate('/')
    }

    for(let i=1; i<=sessionStorage.getItem('num'); i++){
        classes.push(<Class id={i} key={i}/>)
    }

    return(
        <div className="class-select">
            <h1>Time to Pick Your Class!</h1>
            <div className="class-container">
                {classes}
            </div>
            <button className="btn btn-danger" onClick={home}>Return home</button>
        </div>
    )
}

export default ClassSelect