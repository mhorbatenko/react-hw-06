
import { useEffect, useState } from "react"
import { getLanguagePopularRepos } from "../api"
import { useSearchParams } from "react-router-dom";

import Repos from "../Repos/Repos"
import Loading from "../Loading"

const languages = ['all', 'javascript', 'python', 'java', 'c', 'go']


const Popular = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [currentLanguage, setCurrentLanguage] = useState(searchParams.get("language"));

    const [loading, setLoading] = useState(false)

    const [repos, setRepos] = useState([])

    useEffect(() => {
        setLoading(true)
        getLanguagePopularRepos(currentLanguage)
            .then(
                repos => setRepos(repos)
            )
            .finally(
                () => setLoading(false)
            )
    }, [currentLanguage])

    const handleSelectedLanguage = (index) => {
        if (loading) {
            return
        }
        setSearchParams({language: languages[index]})
        setCurrentLanguage(languages[index])
    }

    return (
        <>
        <div >
            <ul className="languages">
                {
                    languages.map(
                        (language, index) => (
                            <li
                                key={index}
                                style={{ color:  languages[index] === currentLanguage ? '#d0021b': '#000000'}}
                                onClick={() => handleSelectedLanguage(index)}
                            >{language}</li>
                        )
                    )
                }
            </ul>
            {
                loading ? <Loading /> : <Repos repos={repos} />
            }
        </div>
        </>
    )
}

export default Popular;
