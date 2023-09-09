import axios from "axios"


export const getLanguagePopularRepos = (language) => {
    const URI = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
    return axios.get(URI)
        .then(response => response.data.items)
}


export const getUserProfile = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}`)
        .then(user => user.data)
}

export const getUserRepos = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos`)
        .then(repos => repos.data)
}

export const getStarsCount = (repos) => {
    return repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)
}

export const calculateStore = (userProfile, userRepos) => {
    const followers = userProfile.followers
    const totalStars = getStarsCount(userRepos)
    return followers + totalStars
}

export const getUserData = (userName) => {
    return Promise.all([
        getUserProfile(userName),
        getUserRepos(userName)
    ])
    .then(([profile, repos]) => {
        return {
            profile,
            score: calculateStore(profile, repos)
        }
    })
}


export const sortPlayers = (battlePlayers) => battlePlayers.sort(
    (battlePlayerOne, battlePlayerTwo) => battlePlayerTwo.score - battlePlayerOne.score)


export const makeUserBattle = (battlePlayers) => {
    return Promise.all(battlePlayers.map(getUserData))
    .then(sortPlayers)
}
