import React, { useState } from 'react';

import Teams from './Teams';
import Questions from './Questions';

function Board() {
	const [ team, setTeam ] = useState({
		team1: { name: 'Name 1', score: 0 },
		team2: { name: 'Name 2', score: 0 },
		team3: { name: 'Name 3', score: 0 },
		team4: { name: 'Name 4', score: 0 }
	});
	const [ game, setGame ] = useState({
		categories: [
			{cName: 'Category 1'},
			{cName: 'Category 2'},
			{cName: 'Category 3'},
			{cName: 'Category 4'},
			{cName: 'Category 5'},
			{cName: 'Category 6'},
		],
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
