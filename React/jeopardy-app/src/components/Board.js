import React, { useState } from 'react';

import Teams from './Teams';
import Questions from './Questions';

function Board() {
	const [ team, setTeam ] = useState({
		team1: { name: 'Chris', score: 0 },
		team2: { name: 'Marma', score: 0 },
		team3: { name: 'Amos', score: 0 },
		team4: { name: 'Allison', score: 0 }
	});
	const [ game, setGame ] = useState({
		set1: [
			{ money: '$100', q: '', clicked: false },
			{ money: '$200', q: '', clicked: false },
			{ money: '$300', q: '', clicked: false },
			{ money: '$400', q: '', clicked: false },
			{ money: '$500', q: '', clicked: false }
		],
		set2: [
			{ money: '$100', q: '', clicked: false },
			{ money: '$200', q: '', clicked: false },
			{ money: '$300', q: '', clicked: false },
			{ money: '$400', q: '', clicked: false },
			{ money: '$500', q: '', clicked: false }
		],
		set3: [
			{ money: '$100', q: '', clicked: false },
			{ money: '$200', q: '', clicked: false },
			{ money: '$300', q: '', clicked: false },
			{ money: '$400', q: '', clicked: false },
			{ money: '$500', q: '', clicked: false }
		],
		set4: [
			{ money: '$100', q: '', clicked: false },
			{ money: '$200', q: '', clicked: false },
			{ money: '$300', q: '', clicked: false },
			{ money: '$400', q: '', clicked: false },
			{ money: '$500', q: '', clicked: false }
		],
		set5: [
			{ money: '$100', q: '', clicked: false },
			{ money: '$200', q: '', clicked: false },
			{ money: '$300', q: '', clicked: false },
			{ money: '$400', q: '', clicked: false },
			{ money: '$500', q: '', clicked: false }
		],
		set6: [
			{ money: '$100', q: '', clicked: false },
			{ money: '$200', q: '', clicked: false },
			{ money: '$300', q: '', clicked: false },
			{ money: '$400', q: '', clicked: false },
			{ money: '$500', q: '', clicked: false }
		]
	});

	const revealQuestion = () => {
		document.style.display = 'none';
		document.style.display = 'block';
	};

	return (
		<div className="container">
			<h1>Jeopardy</h1>
			<Teams team={team} />
			<Questions game={game} />
		</div>
	);
}

export default Board;
