import { memo } from "react";

const BattlePlayerPreview = memo(({avatar, userName, children}) => {
    console.log('render')
    return (
        <div>
            <div className="column">
                <img className="avatar" src={avatar} alt='battle player avatar'/>
                <h2 className="username">@{userName}</h2>
            </div>
            {children}
        </div>
    )
})


export default BattlePlayerPreview;