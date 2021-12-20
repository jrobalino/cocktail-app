import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/table/table.js';

const A = () => {

	const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(apiUrl);
			const responseJSON = await response.json(response);
			setData(responseJSON["drinks"]);
		}
		fetchData();

	}, []);	


	return (
		<div>
			<Link to="/">Home</Link>
			<h2>Cocktails that start with 'A'</h2>
			<Table data={data} />
		</div>
	);
};

export default A;