import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TeamsContext } from '../context/TeamsContext';
import { TeamContext } from '../context/TeamContext';

const TeamsList = () => {
    const { teams } = useContext(TeamsContext);
    const { team, setTeamStr } = useContext(TeamContext);

    return (
        <div className="nav__search-input">
            {teams &&
                <Autocomplete
                    id="sports-teams-options"
                    value={team}
                    options={teams}
                    getOptionLabel={option => option.strTeam ? option.strTeam : ''}
                    onChange={(event, teamObj) => {
                        //console.log('>> teamObj:', teamObj);
                        //setTeam(teamObj);
                        setTeamStr(teamObj.strTeam.toLowerCase().replace(/ /g, "_"))
                    }}
                    blurOnSelect={true}
                    style={{ width: 300 }}
                    renderInput={params => (
                        <TextField {...params} label="Search Team" variant="outlined" fullWidth />
                    )}
                />
            }
        </div>
    )
}

export default TeamsList;
