
const BattlePlayerPreview = ({avatar, userName}) => {
    return (
        <div className="column">
            <img className="avatar" src={avatar} alt='battle player avatar'/>
            <h2 className="username">@{userName}</h2>
        </div>
    )
}


export default BattlePlayerPreview;