import { useState } from "react";



const BattlePlayerInput = ({id, label, handlePlayerSubmit}) => {

    const [userName, setUserName] = useState('')

    const handleBattlePlayerSubmit = (event) => {
        event.preventDefault()
        console.log(userName)
        handlePlayerSubmit(id, userName)
    }

    return (
        <form className="column" onSubmit={(event) => handleBattlePlayerSubmit(event)}>
            <label className="header" htmlFor={id}>{label}</label>
            <input
                id={id}
                type='text'
                placeholder="Github user name"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                >
            </input>
            <button className="button" disabled={!userName.length}>Submit</button>
        </form>
    )
}

export default BattlePlayerInput;