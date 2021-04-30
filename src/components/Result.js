import React from 'react';

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score"> You have {score} / 5 Correct answers!</div>
        <button className="playBtn" onClick={playAgain}>
        Play Again
        </button>
    </div>
);

export default Result;