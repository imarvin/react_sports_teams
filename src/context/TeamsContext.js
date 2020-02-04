import React, { createContext, useState, useEffect } from 'react';

export const TeamsContext = createContext();

const TeamsContextProvider = (props) => {
    const [teams, setTeams] = useState([]);

    // teams api url
    const GET_URL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA'

    useEffect(() => {
        // fetch
        fetch(GET_URL)
            .then(res => res.json())
            .then(data => {
                //console.log('>> fetched data', data);
                setTeams(data.teams);
            })
            .catch(error => {
                console.log('>> fetch error', error);
            })
    }, [GET_URL])

    return (
        <TeamsContext.Provider value={{ teams, setTeams }}>
            {props.children}
        </TeamsContext.Provider>
    )
}

export default TeamsContextProvider;