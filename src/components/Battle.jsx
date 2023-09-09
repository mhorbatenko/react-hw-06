
import { useState } from 'react';
import BattlePlayerInput from './BattlePlayerInput'

import BattlePlayerPreview from "./BattlePlayerPreview";

const Battle = () => {

    const [battlePlayerData, setBattlePlayerData] = useState({
        battlePlayerOneName: '',
        battlePlayerTwoName: '',
        battlePlayerOneImage: null,
        battlePlayerTwoImage: null
    })

    const handleBattlePlayerSubmit = (id, userName) => {

        setBattlePlayerData(prevState => ({
            ...prevState,
                [`${id}Image`] : `https://github.com/${userName}.png?size=200`,
                [`${id}Name`]: userName
            }))
        console.log(battlePlayerData)
    }


    return (
        <div>
            <div className='row'>
                {battlePlayerData.battlePlayerOneImage ?
                    <BattlePlayerPreview
                            avatar={battlePlayerData.battlePlayerOneImage}
                            userName={battlePlayerData.battlePlayerOneName}
                    />:
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
                />:
                    <BattlePlayerInput
                        id='battlePlayerTwo'
                        label='Player Two'
                        handlePlayerSubmit={handleBattlePlayerSubmit}
                    />
                }
            </div>
        </div>
    )
}

export default Battle;
