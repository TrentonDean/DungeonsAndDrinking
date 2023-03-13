import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Class from "./Class";

const ClassSelect = () => {

    const navigate = useNavigate()

    const classes = []

    const [ready, setReady] = useState('')

    const home = () => {
        sessionStorage.clear()
        navigate('/')
    }

    const isReady = (ready) => {
        if(ready===true){
            setReady(true)
        }
    }

    for(let i=1; i<=sessionStorage.getItem('num'); i++){        // puts the correct number of player select screens up
        classes.push(<Class id={i} key={i} isReady={isReady}/>)
    }

    return(
        <div className="class-select">
            <h1>Time to Pick Your Class!</h1>
            <div className="class-container">
                {classes}
            </div>
            { ready ? 
                <div>
                    <p>All players ready?</p> 
                    <p><button className="btn btn-success" onClick={(e)=>{navigate('/intro')}}>Ready</button> | <button className="btn btn-danger" onClick={(e)=>{window.location.reload(false);}}>Not Ready</button></p>
                </div>
            : null }
            <button className="btn btn-danger" onClick={home}>Return home</button>
        </div>
    )
}

export default ClassSelect