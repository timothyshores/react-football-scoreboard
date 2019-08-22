import React from "react";

const Home = props => {
	const { score, team } = props;
	return (
		<div className={team}>
			<h2 className={`${team}__name`}>{team}</h2>
			<div className={`${team}__score`}>{score}</div>
		</div>
	);
};

export default Home;
