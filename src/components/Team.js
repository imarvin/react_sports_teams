import React, { useContext } from 'react';
import { TeamContext } from '../context/TeamContext';

const Team = () => {
    const { team } = useContext(TeamContext);
    return (
        <>
            <div className="team">
                {team &&
                    <>
                        <div className="team__wrapper" style={{ backgroundImage: `url(${team.strTeamFanart1})` }}>
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


export default Team;
