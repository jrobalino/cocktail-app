import React from 'react';
import PropTypes from 'prop-types';

const FeelingBoozy = ({
	handleBoozy
}) => {

	return (
		<button onClick={handleBoozy}>I'm feeling boozy</button>
	);
};

FeelingBoozy.propTypes = {
	handleBoozy: PropTypes.func
};

export default FeelingBoozy;