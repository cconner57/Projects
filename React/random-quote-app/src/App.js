import React, { useState } from 'react';
import './App.css';

function App() {
	const [ quote, setQuote ] = useState([]);

	const getQuote = () => {
		fetch('https://api.quotable.io/random')
			.then((results) => results.json())
			.then((data) => {
				setQuote(`"${data.content}" - ${data.author}`);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="container">
			<h5>Quote Generator</h5>
			<p>{quote}</p>
			<input type="button" value="New Quote" onClick={getQuote} />
		</div>
	);
}

export default App;
