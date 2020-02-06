import React from 'react';

function Questions({ game }) {
	return (
		<div className="board">
			<div className="column">
				<div className="category">
					<h5>Category 1</h5>
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
					<h5>Category 2</h5>
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
					<h5>Category 3</h5>
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
					<h5>Category 4</h5>
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
					<h5>Category 5</h5>
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
					<h5>Category 6</h5>
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
