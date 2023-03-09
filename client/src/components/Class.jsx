import {React, useState} from "react";

const Class = (props) => {

    const id = props.id
    const [playerName, setPlayerName] = useState('')
    const [playerClass, setPlayerClass] = useState('default')
    const [classBio, setClassBio] = useState("Pick your class, Adventurer")

    const buttonId = "button" + id                                          // I used these as element id's so I can disable that specific players choices when they're ready                   
    const playerNId = "playerName" + id
    const playerCId = "playerClass" + id

    const [error, setError] = useState([])

    const bioFunction = (e) => {                                            // brings up bio based on class
        e.preventDefault()
        setPlayerClass(e.target.value)

        switch (parseInt(e.target.value)){
            case 1:
                setClassBio("The Wizard, a master of the mystic arts, also the most pompous ass you've ever met. Using Mana, the Wizard makes both close range and long range attacks.")
                break
    
            case 2:
                setClassBio("The Rogue, a sneaky bastard, using the shadows as cover and attacking when the time is right. Using Luck, the Rogue makes his attacks from close range, but can score critical hits when hidden.")
                break
    
            case 3:
                setClassBio("The Paladin, a chivalrous knight, known best for standing right in the way and having the most health. Using Prayer, the Paladin can attack, brace to defend, or even bless their party members.")
                break
    
            case 4:
                setClassBio("The Monk, a solitary melee fighter, not quite as pompous as the Wizard but close enough. Using Ki, the Monk makes melee attacks, and can even make multiple quick strikes.")
                break

            case 5: 
                setClassBio("The Ranger, often looked at as the weakest, and sometimes is. Using Intuition, the Ranger fires arrows and can debuff enemies with various trick arrows.")
                break
    
            default: 
                setClassBio("Pick your class, Adventurer")
                break
        }
    }

    const classSelect = (e) => {
        e.preventDefault()

        if(isNaN(playerClass)){
            setError('Pick a class!!!')
        }else{
            document.getElementById('button'+id).disabled = true               // lock in the player info 
            document.getElementById('playerName'+id).disabled = true
            document.getElementById('playerClass'+id).disabled = true

            switch (id){                                                    // adds player info to session storage
                case 1: 
                    const player1 = {
                        'id': id,
                        'name': playerName,
                        'class': playerClass
                    }
                    sessionStorage.setItem('player1',JSON.stringify(player1))
                    break

                case 2:
                    const player2 = {
                        'id': id,
                        'name': playerName,
                        'class': playerClass
                    }
                    sessionStorage.setItem('player2',JSON.stringify(player2))
                    break

                case 3:
                    const player3 = {
                        'id': id,
                        'name': playerName,
                        'class': playerClass
                    }
                    sessionStorage.setItem('player3',JSON.stringify(player3))
                    break

                case 4:
                    const player4 = {
                        'id': id,
                        'name': playerName,
                        'class': playerClass
                    }
                    sessionStorage.setItem('player4',JSON.stringify(player4))
                    break

                case 5:
                    const player5 = {
                        'id': id,
                        'name': playerName,
                        'class': playerClass
                    }
                    sessionStorage.setItem('player5',JSON.stringify(player5))
                    break
            }
        }
    }

    return(
        <div className="class mt-3">
            <h1>Player {id} </h1>
            <form onSubmit={classSelect}>
                <input className="form-control text-center" type="text" placeholder="Player Name" id={playerNId} onChange={(e) => {setPlayerName(e.target.value)}}/>
                <select className="form-select text-center" aria-label="Default select example" id={playerCId} onChange={bioFunction}>
                    <option value={'default'}>Pick Your Class</option>
                    <option value={1}>Wizard</option>
                    <option value={2}>Rogue</option>
                    <option value={3}>Paladin</option>
                    <option value={4}>Monk</option>
                    <option value={5}>Ranger</option>
                </select>
                { classBio ? <p className="classBio">{classBio}</p> : null }
                { error ? <p className="red-text">{error}</p> : null }
                <button type="submit" className="btn btn-success" id={buttonId}>Ready!</button>
            </form>
        </div>
    )
}

export default Class