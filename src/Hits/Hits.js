import React, {useState, useEffect} from 'react';
import './Hits.scss';

function Hits() {
	const [hits, setHits]= useState([]);

	useEffect (()=> {
		fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json")
			.then(response => response.json())
			.then(hitList => setHits(hitList))
	},[]);

	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
				{hits.map((hit, i)=>{
					return <li key={i}>{hit.title}</li>
				})}
			</ul>
		</div>
	)
}

export default Hits;
