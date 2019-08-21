import React from "react";

const Home = ({ score }) => {
    console.log(score);
    return (
        <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{score}</div>
        </div>
    );
}

export default Home;
