import React from "react";

const Button = ({ team, scoredBy, handleScore }) => {
	const className = `${team}Buttons__${scoredBy}`;
	const upperCase = str => str[0].toUpperCase() + str.slice(1);

	return (
		<button className={className} onClick={() => handleScore(team, scoredBy)}>
			{upperCase(team) + " " + upperCase(scoredBy)}
		</button>
	);
};

export default Button;
