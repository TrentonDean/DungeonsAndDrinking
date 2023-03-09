import {React, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {

    const [numPlayers, setNumPlayers] = useState("default")
    const [error, setError] = useState([])

    const navigate = useNavigate()

    const players = (e) => {
        e.preventDefault()

        if(isNaN(numPlayers)){
            setError("Are you already drunk? Pick a number!")
        }else{
            props.onPlayers(numPlayers)
    
            navigate('/class-select')
        }
    }

    return(
        <div className="welcome">
            <div className="wel-header">
                <h2>Welcome Adventurers!</h2>
                <p>Prepare to embark on a journey of grand proportions and even grander drinking! Grab your drink of choice and let's begin!</p>
            </div>
            <div className="player-num">
                <h4>How many adventurers are in your party?</h4>
                <form className="num-form mt-3" onSubmit={players}>
                    <p>Parties of 3 or more are recommended</p>
                    { error ? <p className="red-text">{error}</p> : null }
                    <select className="form-select" name="num" id="num" aria-label="num-players" onChange = {(e) => {setNumPlayers(e.target.value)}}>
                        <option defaultValue={"default"}>Pick # of Players</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button className="btn btn-success mt-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Welcome