import React from 'react'

function Teams({team}) {
    return (
        <div className="team-container">
				<div className="teams">
					<h5>{team.team1.name}: ${team.team1.score}</h5>
				</div>
				<div className="teams">
					<h5>{team.team2.name}: ${team.team2.score}</h5>
				</div>
				<div className="teams">
					<h5>{team.team3.name}: ${team.team3.score}</h5>
				</div>
				<div className="teams">
					<h5>{team.team4.name}: ${team.team4.score}</h5>
				</div>
			</div>
    )
}

export default Teams
