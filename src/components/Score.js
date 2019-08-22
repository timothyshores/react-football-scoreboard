import React from "react";

const Home = ({ score, team }) => {
    return (
        <div className={team}>
            <h2 className={`${team}__name`}>Lions</h2>
            <div className={`${team}__score`}>{score}</div>
        </div>
    );
}

export default Home;
