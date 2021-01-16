import React, {useState} from 'react';
import './RealNumber.scss';

function RealNumber() {

	const [input, setInput] = useState('')

	function inputHandler (e) {
		setInput(e.target.value);
	}

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" onInput={inputHandler} className="text-box" />
			{!isNaN(input) ? <button className="Submit">submit</button> : ''}
		</div>
	)
}

export default RealNumber;
