import React from "react";

const Button = props => {
	const { team, scoredBy, handleHome, handleAway, handleScore } = props;

	const className = `${team}Buttons__${scoredBy}`;

	const handleClick =
		team === "home"
			? () => handleHome(scoredBy === "touchdown" ? 7 : 3)
			: () => handleAway(scoredBy === "touchdown" ? 7 : 3);

	const upperCase = str => str[0].toUpperCase() + str.slice(1);

	return (
		<button className={className} onClick={() => handleScore(team, scoredBy)}>
			{upperCase(team) + " " + upperCase(scoredBy)}
		</button>
	);
};

export default Button;
