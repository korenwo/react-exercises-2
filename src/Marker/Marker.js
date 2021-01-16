import React, { useState } from 'react';
import './Marker.scss';

function Marker() {
	const [input, setInput] = useState('')

	function inputHandler (e) {
		setInput(e.target.value);
	}

	const [items, setItems] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);

	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
				If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
				Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
				Apply the marker for <u>all items</u>.
			</p>

			<input type="text" onInput={inputHandler} placeholder="Text to marker..." />

			<ul>
				{items.map((item, i)=>{ 
					if (input.length > 1 && item.indexOf(input) > -1) {				
						const partsArr = item.split(input); 
						return <li key={i}>{partsArr[0]}<span class="marker">{input}</span>{partsArr[1]}</li>
					} else {
						return <li key={i}>{item}</li>;
					 }
				})}
			</ul>
		</div>
	)
}

export default Marker;
