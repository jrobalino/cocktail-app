import React from 'react';
import PropTypes from 'prop-types';

const Table = ({data}) => {
	return(
		<table>
			<thead>
				<tr>
					<th>Drink Image</th>
					<th>Drink Name</th>
				</tr>
			</thead>
			<tbody>
				{data.map(function (item) {
					let cocktail = item.strDrink;
					let image = item.strDrinkThumb;
					return (
						<tr key={cocktail}><td><img src={image} style={{maxWidth:300, maxHeight:300}}/></td><td>{cocktail}</td></tr>
					);
				})}
			</tbody>
		</table>
	);

};

Table.propTypes = {
	data: PropTypes.array
};

export default Table;