
import { useCallback, useState } from 'react';
import BattlePlayerInput from './BattlePlayerInput';

import BattlePlayerPreview from "./BattlePlayerPreview";
import { Link } from 'react-router-dom';

import BattleImage from '../../static/battle';

const Battle = () => {

    const [battlePlayerData, setBattlePlayerData] = useState({
        battlePlayerOneName: '',
        battlePlayerTwoName: '',
        battlePlayerOneImage: null,
        battlePlayerTwoImage: null
    })

    const handleBattlePlayerSubmit = useCallback((id, userName) => {

        setBattlePlayerData(
            (prevState) => (
                {
                ...prevState,
                    [`${id}Image`] : `https://github.com/${userName}.png?size=200`,
                    [`${id}Name`]: userName
                }
        )
        )
    }, [])


    const handleReset = (id) => {
        setBattlePlayerData(
            (prevState) => (
                {
                ...prevState,
                    [`${id}Image`]: null,
                    [`${id}Name`]: ''
                }
            )
        )
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
                <img src={BattleImage}></img>
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
                        <Link to={
                            {
                                pathname: '/battle/results',
                                search: `battlePlayerOneName=${battlePlayerData.battlePlayerOneName}&battlePlayerTwoName=${battlePlayerData.battlePlayerTwoName}`
                            }
                        }
                        className='button'>Battle</Link>
                : null
            }
        </div>
    )
}

export default Battle;
