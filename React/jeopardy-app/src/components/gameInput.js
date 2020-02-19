import React, { Fragment } from 'react';
import Board from './Board';

function gameInput() {
	return (
		<Fragment>
			<form className="Form-Container">
				<div className="Input-Teams">
					<label>Team Name</label>
					<input type="text" placeholder="(optional)" />
					<input type="button" value="&#43; AddTeam" />
				</div>
				<div className="Input-Categories">
					<div className="Input-Questions">
						<input className="Input-Title" type="text" placeholder="Category 1" />
						<div className="Input-Group">
							<input type="text" placeholder="$100 Question" />
                            <input type="text" placeholder="$100 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$200 Question" />
                            <input type="text" placeholder="$200 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$300 Question" />
                            <input type="text" placeholder="$300 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$400 Question" />
                            <input type="text" placeholder="$400 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$500 Question" />
                            <input type="text" placeholder="$500 Answer" />
						</div>
					</div>
					<div className="Input-Questions">
						<input className="Input-Title" type="text" placeholder="Category 2" />
						<div className="Input-Group">
							<input type="text" placeholder="$100 Question" />
                            <input type="text" placeholder="$100 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$200 Question" />
                            <input type="text" placeholder="$200 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$300 Question" />
                            <input type="text" placeholder="$300 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$400 Question" />
                            <input type="text" placeholder="$400 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$500 Question" />
                            <input type="text" placeholder="$500 Answer" />
						</div>
					</div>
					<div className="Input-Questions">
						<input className="Input-Title" type="text" placeholder="Category 3" />
						<div className="Input-Group">
							<input type="text" placeholder="$100 Question" />
                            <input type="text" placeholder="$100 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$200 Question" />
                            <input type="text" placeholder="$200 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$300 Question" />
                            <input type="text" placeholder="$300 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$400 Question" />
                            <input type="text" placeholder="$400 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$500 Question" />
                            <input type="text" placeholder="$500 Answer" />
						</div>
					</div>
					<div className="Input-Questions">
						<input className="Input-Title" type="text" placeholder="Category 4" />
						<div className="Input-Group">
							<input type="text" placeholder="$100 Question" />
                            <input type="text" placeholder="$100 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$200 Question" />
                            <input type="text" placeholder="$200 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$300 Question" />
                            <input type="text" placeholder="$300 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$400 Question" />
                            <input type="text" placeholder="$400 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$500 Question" />
                            <input type="text" placeholder="$500 Answer" />
						</div>
					</div>
					<div className="Input-Questions">
						<input className="Input-Title" type="text" placeholder="Category 5" />
						<div className="Input-Group">
							<input type="text" placeholder="$100 Question" />
                            <input type="text" placeholder="$100 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$200 Question" />
                            <input type="text" placeholder="$200 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$300 Question" />
                            <input type="text" placeholder="$300 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$400 Question" />
                            <input type="text" placeholder="$400 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$500 Question" />
                            <input type="text" placeholder="$500 Answer" />
						</div>
					</div>
					<div className="Input-Questions">
						<input className="Input-Title" type="text" placeholder="Category 6" />
						<div className="Input-Group">
							<input type="text" placeholder="$100 Question" />
                            <input type="text" placeholder="$100 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$200 Question" />
                            <input type="text" placeholder="$200 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$300 Question" />
                            <input type="text" placeholder="$300 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$400 Question" />
                            <input type="text" placeholder="$400 Answer" />
						</div>
						<div className="Input-Group">
							<input type="text" placeholder="$500 Question" />
                            <input type="text" placeholder="$500 Answer" />
						</div>
					</div>
				</div>
			</form>
		</Fragment>
	);
}

export default gameInput;
