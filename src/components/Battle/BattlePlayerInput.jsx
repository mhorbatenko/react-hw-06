import { useState, memo } from "react";


const BattlePlayerInput = memo(({id, label, handlePlayerSubmit}) => {

    const [userName, setUserName] = useState('')

    const handleBattlePlayerSubmit = (event) => {
        event.preventDefault()
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
})

export default BattlePlayerInput;