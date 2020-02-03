import React, { createContext, useContext, useEffect, useState } from "react";
import './App.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


// CONTEXTS

// leagues
// api: https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=Usa
// const LeagueContext = createContext();
// const LeagueContextProvider = props => {
//   const [ league, setLeague ] = useState('');
//   return (
//     <LeagueContext.Provider value={{ league, setLeague }}>
//       {props.children}
//     </LeagueContext.Provider>
//   )
// }

// teams
// api: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA
const TeamsContext = createContext();
const TeamsContextProvider = props => {
  const [ teams, setTeams ] = useState('');
  // teams api url
  const GET_URL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA'

  useEffect(() => {
    // fetch
    fetch(GET_URL)
    .then(res => res.json())
    .then(data => {
      console.log('fetch data', data);
      setTeams(data.teams);
    })
    .catch(error => {
      console.log('fetch error', error);
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
  const [ team, setTeam ] = useState('');
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
  //const { setTeam } = useContext(TeamContext);
  return (
    <>
    <Autocomplete
      id="sports-teams-options"
      options={teams}
      getOptionLabel={option => option.strTeam}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label="Search Team" variant="outlined" fullWidth />
      )}
    />
    </>
  )
}

// teams page
const Team = () => {

  return (
    <>
    </>
  )
}

function App() {
  return (
    <div className="App">
        <TeamsContextProvider>
          <TeamContextProvider>
            <Nav />
            <main>
              <Team />
            </main>
          </TeamContextProvider>
        </TeamsContextProvider>
    </div>
  );
}

export default App;