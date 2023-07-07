// ScoreButtons.js
import React, { Component } from "react";

class ScoreButtons extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      wickets: 0,
    };
  }

  addScore = (num) => {
    const { score, wickets } = this.state;

    if (wickets >= 10) {
      return; // Do not update the score or wickets after reaching the limit
    }

    this.setState((prevState) => ({
      score: prevState.score + num,
    }));

    this.props.onScoreChange(num);
  };

  addWickets = () => {
    const { score, wickets } = this.state;

    if (wickets >= 10) {
      return; // Do not update the wickets or score after reaching the limit
    }

    this.setState((prevState) => ({
      wickets: prevState.wickets + 1,
    }));

    this.props.onScoreChange("W");
  };

  render() {
    const { score, wickets } = this.state;
    return (
      <div>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE: {score}/{wickets}</h2>
        <button onClick={() => this.addScore(0)}>0</button>
        <button onClick={() => this.addScore(1)}>1</button>
        <button onClick={() => this.addScore(2)}>2</button>
        <button onClick={() => this.addScore(3)}>3</button>
        <button onClick={() => this.addScore(4)}>4</button>
        <button onClick={() => this.addScore(5)}>5</button>
        <button onClick={() => this.addScore(6)}>6</button>
        <button onClick={this.addWickets}>Wickets</button>
      </div>
    );
  }
}

export default ScoreButtons;
