// forms.js
import React, { Component, createRef } from "react";
import ScoreButtons from "./scorebuttons";

class Forms extends Component {
  constructor() {
    super();
    this.ballWise = [];
    this.inputRef = createRef();
    this.state = {
      hit: 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.ballWise.unshift(
      <p key={this.ballWise.length}>
        {`${this.state.hit}, ${this.inputRef.current.value}`}
      </p>
    );

    this.inputRef.current.value = "";

    this.forceUpdate();
  };

  handleScoreChange = (score) => {
    this.setState({
      hit: score,
    });
  };

  render() {
    return (
      <>
        <ScoreButtons
          onScoreChange={this.handleScoreChange}
          currentScore={this.state.hit}
        />
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.hit}
            onChange={(e) => this.handleScoreChange(e.target.value)}
          />
          <input ref={this.inputRef} placeholder="Add a comment" />
          <button type="submit">Submit</button>
          <hr/>
          <div>{this.ballWise}</div>
        </form>

      </>
    );
  }
}

export default Forms;
