import React from 'react';
import PropTypes from 'prop-types';

const Table = ({data}) => {
	let instructionsVisible = false;

	const handleCocktailClick = (cocktail) => {
		instructionsVisible = !instructionsVisible;
		let element = document.getElementById(cocktail);
		instructionsVisible ? element.style.visibility = 'visible' : element.style.visibility = 'hidden';
	};

	const htmlDecode = (input) => {
    	var e = document.createElement('div');
    	e.innerHTML = input;
    	return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  	};

	const listIngredients = (cocktail) => {
		let string = '<ul>';
		for (var key in cocktail) {
			if (key.includes('strIngredient') && cocktail[key] != null) {
				string += '<li>' + cocktail[key] + '</li>'
			}
		}
		string += '</ul>';
		htmlDecode(string);
		return string;
	};

	return(
		<table>
			<thead>
				<tr>
					<th>Drink Image</th>
					<th>Drink Name</th>
					<th>Ingredients</th>
					<th>Instructions</th>
				</tr>
			</thead>
			<tbody>
				{data.map(item => {
					let cocktail = item.strDrink;
					let image = item.strDrinkThumb;
					let instructions = item.strInstructions;
					let list = listIngredients(item);
					return (
						<tr key={cocktail} onClick={() => handleCocktailClick(cocktail)}>
							<td><img src={image} style={{maxWidth:300, maxHeight:300}}/></td>
							<td>{cocktail}</td>
							<td dangerouslySetInnerHTML={{ __html: list }}></td>
							<td id={cocktail} style={{visibility: "hidden"}}>{instructions}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);

};

Table.propTypes = {
	data: PropTypes.array,
	handleCocktailClick: PropTypes.func
};

export default Table;