import React, { useState } from "react";
import BottomRow from "./BottomRow";
import Home from "./components/Home"
import "./App.css";

const App = () => {
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    return (
        <div className="container">
            <section className="scoreboard">
                <div className="topRow">
                    <Home score={homeScore} />
                    <div className="timer">00:03</div>
                    <div className="away">
                        <h2 className="away__name">Tigers</h2>
                        <div className="away__score">{awayScore}</div>
                    </div>
                </div>
                <BottomRow />
            </section>
            <section className="buttons">
                <div className="homeButtons">
                    <button
                        className="homeButtons__touchdown"
                        onClick={() => setHomeScore(homeScore + 7)}
                    >
                        Home Touchdown
					</button>
                    <button
                        className="homeButtons__fieldGoal"
                        onClick={() => setHomeScore(homeScore + 3)}
                    >
                        Home Field Goal
					</button>
                </div>
                <div className="awayButtons">
                    <button
                        className="awayButtons__touchdown"
                        onClick={() => setAwayScore(awayScore + 7)}
                    >
                        Away Touchdown
					</button>
                    <button
                        className="awayButtons__fieldGoal"
                        onClick={() => setAwayScore(awayScore + 3)}
                    >
                        Away Field Goal
					</button>
                </div>
            </section>
        </div>
    );
}

export default App;
