import React from 'react';
import PropTypes from 'prop-types';

const Table = ({data}) => {

	return(
		<table>
			<thead>
				<tr>
					<th>Drinks</th>
				</tr>
			</thead>
			<tbody>
				{data.map(function (item) {
					let cocktail = item.strDrink;
					return (
						<tr><td>{cocktail}</td></tr>
					);
				})}
			</tbody>
		</table>
	);

};

export default Table;