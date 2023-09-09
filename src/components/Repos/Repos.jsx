

import Repo from "./Repo"


const Repos = ({repos}) => {
    return (
        <ul className="popular-list">
            {
                repos.map(
                    (repo, index) => {
                        return <Repo
                            key={repo.id}
                            id={repo.id}
                            index={index}
                            avatar_url={repo.owner.avatar_url}
                            html_url={repo.html_url}
                            login={repo.owner.login}
                            name={repo.name}
                            stargazers_count={repo.stargazers_count}
                        />
                    }
                )
            }
        </ul>
    )
}

export default Repos;