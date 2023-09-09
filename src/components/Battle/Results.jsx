
import { makeUserBattle } from "../api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Player from "../Player/Player";
import Loading from "../Loading";

const Results = () => {
    const location = useLocation()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [winner, setWinner] = useState(null)
    const [loser, setLoser] = useState(null)


    useEffect(() => {
        const params = new URLSearchParams(location.search)

        setLoading(true)
        makeUserBattle(
            [
                params.get('battlePlayerOneName'),
                params.get('battlePlayerTwoName')
            ]
        ).then(([winner, loser]) => {
            setWinner(winner);
            setLoser(loser);
        })
        .catch((error) => {setError(error)})
        .finally(() => {
            setLoading(false)
        })
    }, [])

    console.log(winner)
    console.log(loser)

    if(loading) {
        return ( <Loading /> )
    }

    return (
        
            <div className="row">
                <Player
                    label='Winner'
                    score={winner.score}
                    profile={winner.profile}
                />
                <Player
                    label='Loser'
                    score={loser.score}
                    profile={loser.profile}
                />
            </div>
    )
}

export default Results;
