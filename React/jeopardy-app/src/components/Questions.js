import React from 'react';

function Questions({ game }) {
	return (
		<div className="board">
			<div className="column">
				<div className="category">
                    <h5>{game.categories[0].cName}</h5>
				</div>
				{game.set1.map((game, i) => {
					return (
						<div className="block">
							<h5 key={i}>{game.money}</h5>
						</div>
					);
				})}
			</div>
			<div className="column">
				<div className="category">
					<h5>{game.categories[1].cName}</h5>
				</div>
				{game.set2.map((game, i) => {
					return (
						<div className="block">
							<h5 key={i}>{game.money}</h5>
						</div>
					);
				})}
			</div>
			<div className="column">
				<div className="category">
					<h5>{game.categories[2].cName}</h5>
				</div>
				{game.set3.map((game, i) => {
					return (
						<div className="block">
							<h5 key={i}>{game.money}</h5>
						</div>
					);
				})}
			</div>
			<div className="column">
				<div className="category">
					<h5>{game.categories[3].cName}</h5>
				</div>
				{game.set4.map((game, i) => {
					return (
						<div className="block">
							<h5 key={i}>{game.money}</h5>
						</div>
					);
				})}
			</div>
			<div className="column">
				<div className="category">
					<h5>{game.categories[4].cName}</h5>
				</div>
				{game.set5.map((game, i) => {
					return (
						<div className="block">
							<h5 key={i}>{game.money}</h5>
						</div>
					);
				})}
			</div>
			<div className="column">
				<div className="category">
					<h5>{game.categories[5].cName}</h5>
				</div>
				{game.set6.map((game, i) => {
					return (
						<div className="block">
							<h5 key={i}>{game.money}</h5>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Questions;
