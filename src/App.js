import React, { createContext, useContext, useEffect, useState } from "react";
import './App.scss';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

// teams
// api: https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA
const TeamsContext = createContext();
const TeamsContextProvider = props => {
  const [ teams, setTeams ] = useState([]);
  
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
  const [ teamStr, setTeamStr ] = useState('');
  const [ team, setTeam ] = useState('');
  const { teams } = useContext(TeamsContext);

  // to be used on the search api
  const defaultTeam = "New York Knicks";
  // search api
  const GET_URL = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${teamStr}`;

  // team look up api with a specific team id
  //const GET_URL = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`

  useEffect(() => {
    console.log('useEffect fetch url', GET_URL);
    if(teamStr !== "") {
      console.log('fetching team data...');
      fetch(GET_URL)
        .then(res => res.json())
        .then(data => {
          console.log('>> fetched data', data.teams);
          setTeam(data.teams[0]);
        })
        .catch(error => {
          console.log('>> fetch error', error);
        })
      }
  }, [GET_URL, teamStr])

  useEffect(() => {
    console.log('useEffect default team, teams:', teams);
    if(teams.length>0) {
      console.log('useEffect default Team');
      setTeamStr(defaultTeam.toLowerCase().replace(/ /g,"_"));
    }
  }, [teams])

  return (
    <TeamContext.Provider value={{ team, setTeam, setTeamStr }}>
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
        <SocialNav />
      </nav>
    </>
  )
}

// teams list
const TeamsList = () => {
  const { teams } = useContext(TeamsContext);
  const { team, setTeamStr } = useContext(TeamContext);

  return (
    <>
      <div className="nav__search-input">
        {teams &&
          <Autocomplete
            id="sports-teams-options"
            value={team}
            options={teams}
            getOptionLabel={option => option.strTeam ? option.strTeam : ''}
            onChange={(event, teamObj) => {
              console.log('>> teamObj:', teamObj);
              //setTeam(teamObj);
              setTeamStr(teamObj.strTeam.toLowerCase().replace(/ /g,"_"))
            }}
            blurOnSelect={true}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label="Search Team" variant="outlined" fullWidth />
            )}
          />
        }
      </div>
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
          <>
          <div className="team__wrapper" style={{ backgroundImage: `url(${team.strTeamFanart1})`}}>
            <div className="team__details">
              <img src={team.strTeamBadge} className="team__badge" alt={team.strTeam} />
              <ul>
                <li>Team Name: <a href={`//${team.strWebsite}`}>{team.strTeam}</a></li>
                <li>Year Formed: {team.intFormedYear}</li>
                <li>Sport: {team.strSport}</li>
                <li>Stadium: {team.strStadium}</li>
              </ul>
            </div>
            <div className="team__description"><p>{team.strDescriptionEN}</p></div>
          </div>
          {/* <pre>{JSON.stringify(team, null, 2)}</pre> */}
          </>
        }
      </div>
    </>
  )
}


// social navbar
const SocialNav = () => {
  const { team } = useContext(TeamContext);
  return (
    <div className="nav__social">
        <ul className="nav__social-ul">
          <li className="nav__social-facebook">
              <a href={`//${team.strFacebook}`} ><FacebookIcon /></a>
          </li>
          <li className="nav__social-instagram">
              <a href={`//${team.strInstagram}`} ><InstagramIcon /></a>
          </li>
          <li className="nav__social-twitter">
              <a href={`//${team.strTwitter}`} ><TwitterIcon /></a>
          </li>
          <li className="nav__social-youtube">
              <a href={`//${team.strYoutube}`} ><YouTubeIcon /></a>
          </li>
        </ul>
    </div>
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