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
        classes.push(<Class key={i} />)
    }

    return(
        <div>
            <h1>num of players is {sessionStorage.getItem('num')}</h1>
            <button className="btn btn-danger" onClick={home}>Return home</button>
            <div className="class-container">
                {classes}
            </div>
        </div>
    )
}

export default ClassSelect