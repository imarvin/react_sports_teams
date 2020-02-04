import React, { createContext, useContext, useEffect, useState } from "react";
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


// teams
// api: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA
const TeamsContext = createContext();
const TeamsContextProvider = props => {
  const [ teams, setTeams ] = useState('');
  // teams api url
  const GET_URL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA'

  useEffect(() => {
    console.log('fetching all teams...');
    // fetch
    fetch(GET_URL)
    .then(res => res.json())
    .then(data => {
      console.log('>> fetched data', data);
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


// team
// api (lookup): https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604
const TeamContext = createContext();
const TeamContextProvider = props => {
  //const [ teamId, setTeamId ] = useState('');
  const [ team, setTeam ] = useState('');

  // const GET_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`

  // useEffect(() => {
  //   if(teamId !== "") {
  //     console.log('fetching team data...');
  //     fetch(GET_URL)
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log('>> fetched data', data.teams);
  //         setTeam(data);
  //       })
  //       .catch(error => {
  //         console.log('>> fetch error', error);
  //       })
  //     }
  // }, [GET_URL, teamId])

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {props.children}
    </TeamContext.Provider>
  )
}


// COMPONENTS

// nav
const Nav = () => {
  return (
    <>
      <nav className="nav">
        <TeamsList />
      </nav>
    </>
  )
}

// teams list
const TeamsList = () => {
  const { teams } = useContext(TeamsContext);
  const { setTeam } = useContext(TeamContext);
  return (
    <>
        {teams &&
          <Autocomplete
            id="sports-teams-options"
            options={teams}
            getOptionLabel={option => option.strTeam}
            onChange={(event, teamObj) => {
              console.log('>> teamObj:', teamObj);
              setTeam(teamObj);
            }}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Search Team" variant="outlined" fullWidth />
            )}
          />
        }
    </>
  )
}

// team page
const Team = () => {
  const { team } = useContext(TeamContext);
  return (
    <>
      <div className="team">
        {team && 
          <pre>{JSON.stringify(team, null, 2)}</pre>
        }
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
        <TeamsContextProvider>
          <TeamContextProvider>
            <Nav />
            <main className="main">
              <Team />
            </main>
          </TeamContextProvider>
        </TeamsContextProvider>
    </div>
  );
}

export default App;