import React, { createContext, useContext, useState, useEffect } from 'react'
import { TeamsContext } from './TeamsContext';

export const TeamContext = createContext();

const TeamContextProvider = (props) => {
    const [teamStr, setTeamStr] = useState('');
    const [team, setTeam] = useState('');
    const { teams } = useContext(TeamsContext);

    // to be used on the search api
    const defaultTeam = "New York Knicks";
    // search api
    const GET_URL = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamStr}`;

    // team look up api with a specific team id
    //const GET_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`

    useEffect(() => {
        if (teamStr !== "") {
            fetch(GET_URL)
            .then(res => res.json())
            .then(data => {
                //console.log('>> fetched data', data.teams);
                setTeam(data.teams[0]);
            })
            .catch(error => {
                console.log('>> fetch error', error);
            })
        }
    }, [GET_URL, teamStr])

    useEffect(() => {
        if (teams.length > 0) {
            setTeamStr(defaultTeam.toLowerCase().replace(/ /g, "_"));
        }
    }, [teams])

    return (
        <TeamContext.Provider value={{ team, setTeam, setTeamStr }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export default TeamContextProvider;