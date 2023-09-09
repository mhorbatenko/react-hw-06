
import Star from "../../static/star"


const Repo = ({id, index, avatar_url, login, stargazers_count, name, html_url}) => {
    return (
        <li key={id} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
                <ul className="space-list-items">
                    <li>
                        <img className="avatar" src={avatar_url} alt='Avatar' />
                    </li>
                    <li>
                        <a href={html_url} target="_blank">{name}</a>
                    </li>
                    <li>@{login}</li>
                    <li>{stargazers_count} stars<img style={{width: '18px', padding: '1px'}} src={Star} alt='star image'/></li>
                </ul>
        </li>
    )
};

export default Repo;