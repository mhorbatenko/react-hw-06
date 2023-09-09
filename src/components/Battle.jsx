
import { useState } from 'react';
import BattlePlayerInput from './BattlePlayerInput'

import BattlePlayerPreview from "./BattlePlayerPreview";
import { Link } from 'react-router-dom';

const Battle = () => {

    const [battlePlayerData, setBattlePlayerData] = useState({
        battlePlayerOneName: '',
        battlePlayerTwoName: '',
        battlePlayerOneImage: null,
        battlePlayerTwoImage: null
    })

    const handleBattlePlayerSubmit = (id, userName) => {

        setBattlePlayerData(
            (prevState) => (
                {
                ...prevState,
                    [`${id}Image`] : `https://github.com/${userName}.png?size=200`,
                    [`${id}Name`]: userName
                }
        )
        )
    }


    const handleReset = (id) => {
        console.log('id', id)
        setBattlePlayerData(
            (prevState) => (
                {
                ...prevState,
                    [`${id}Image`]: null,
                    [`${id}Name`]: ''
                }
            )
        )
        console.log('render', battlePlayerData)
    }


    return (
        <div>
            <div className='row'>
                {battlePlayerData.battlePlayerOneImage ?
                    <BattlePlayerPreview
                            avatar={battlePlayerData.battlePlayerOneImage}
                            userName={battlePlayerData.battlePlayerOneName}
                    >
                        <button className='reset' onClick={() => handleReset('battlePlayerOne')}>Reset</button>
                    </BattlePlayerPreview>:
                    <BattlePlayerInput
                        id='battlePlayerOne'
                        label='Player One'
                        handlePlayerSubmit={handleBattlePlayerSubmit}
                    />
                }
                {battlePlayerData.battlePlayerTwoImage ?
                <BattlePlayerPreview
                    avatar={battlePlayerData.battlePlayerTwoImage}
                    userName={battlePlayerData.battlePlayerTwoName}
                >
                    <button className='reset' onClick={() => handleReset('battlePlayerTwo')}>Reset</button>
                </BattlePlayerPreview>:
                    <BattlePlayerInput
                        id='battlePlayerTwo'
                        label='Player Two'
                        handlePlayerSubmit={handleBattlePlayerSubmit}
                    />
                }
            </div>
            {
                battlePlayerData.battlePlayerOneImage &&
                    battlePlayerData.battlePlayerTwoImage ?
                        <Link to='/' className='button'>Battle</Link>
                : null
            }
        </div>
    )
}

export default Battle;
