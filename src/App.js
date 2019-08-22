import React, { useState } from "react";

import BottomRow from "./BottomRow";
import Score from "./components/Score";
import Button from "./components/Button";

import "./App.css";

const App = () => {
	const [homeScore, setHomeScore] = useState(0);
	const [awayScore, setAwayScore] = useState(0);

	const handleScore = (team, scoredBy) => {
		if (team === "home" && scoredBy === "touchdown") {
			setHomeScore(homeScore + 7);
		} else if (team === "home" && scoredBy === "fieldGoal") {
			setHomeScore(homeScore + 3);
		} else if (team === "away" && scoredBy === "touchdown") {
			setAwayScore(awayScore + 7);
		} else {
			setAwayScore(awayScore + 3);
		}
	};

	return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<Score team="home" score={homeScore} />
					<div className="timer">00:03</div>
					<Score team="away" score={awayScore} />
				</div>
				<BottomRow />
			</section>
			<section className="buttons">
				<div className="homeButtons">
					<Button team="home" scoredBy="touchdown" handleScore={handleScore} />
					<Button team="home" scoredBy="fieldGoal" handleScore={handleScore} />
				</div>
				<div className="awayButtons">
					<Button team="away" scoredBy="touchdown" handleScore={handleScore} />
					<Button team="away" scoredBy="fieldGoal" handleScore={handleScore} />
				</div>
			</section>
		</div>
	);
};

export default App;
