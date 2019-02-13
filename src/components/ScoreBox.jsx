import React, { Component } from "react";

class ScoreBox extends Component {
  render() {
    let percentage = (this.props.score / this.props.numberAnswered) * 100;
    return (
      <div>
        <h3>{`Your score: ${this.props.score}`}</h3>
        <h3>
          {this.props.numberAnswered > 0
            ? `Number answered: ${this.props.numberAnswered} (${percentage}%)`
            : "Start the game!"}
        </h3>
        <h4>{`${51 - this.props.numberAnswered} states remaining!`}</h4>
      </div>
    );
  }
}

export default ScoreBox;
