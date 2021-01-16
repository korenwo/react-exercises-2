import React, {useState} from 'react'; 
import './Todo.scss';

function Todo() {
	const [list, setList]= useState([]);
	const [input, setInput] = useState('')

	function addToList (input) {
		setList([...list, input]);
	}

	function inputHandler (e) {
		setInput(e.target.value);
	}

	function deleteFromList (item) {
		const index = list.indexOf(item);
		list.splice(index, 1);
		setList([...list]);
	}

	

	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<input  placeholder="Your task..." onInput={inputHandler} /> <button onClick={() => addToList(input)}>Add task</button>
			<ul>
				{list.map((item, i) => <li key={i}>{item}<button onClick={()=> deleteFromList(item)}>delete</button></li>)}
			</ul>
		</div>
	)
}

export default Todo;
