import React, { useState } from 'react';
import './App.css';

function App() {
	const [ count, setCount ] = useState(0);

	return (
		<div className="container">
			<h5>React Clicker</h5>
			<div className="display">
				<p className="count">Count: {count}</p>
				<div className="buttons">
					<input type="button" value="-1" onClick={() => setCount(count - 1)} />
					<input type="button" value="Reset" onClick={() => setCount(0)} />
					<input type="button" value="+1" onClick={() => setCount(count + 1)} />
				</div>
			</div>
		</div>
	);
}

export default App;
