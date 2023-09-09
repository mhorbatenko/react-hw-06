
import BattlePlayerPreview from "../Battle/BattlePlayerPreview"

const Player = ({label, score, profile}) => {
    return (
        <div>
            <h1 className="header">{label}</h1>
            <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
            <BattlePlayerPreview
                avatar={profile.avatar_url}
                userName={profile.login}
            >
                <ul className="space-list-items">
                   {profile.name ? <li>{profile.name}</li>: null}
                   {profile.location ? <li>{profile.location}</li>: null}
                   {profile.company ? <li>{profile.company}</li>: null}
                   <li>Followers: {profile.followers}</li>
                   <li>Following: {profile.following}</li>
                   <li>Public Repos: {profile.public_repos}</li>
                   {profile.blog ?
                    <li>
                        <a href={profile.blog}>{profile.blog}</a>
                    </li>: null}
                </ul>
            </BattlePlayerPreview>
        </div>
    )
}

export default Player