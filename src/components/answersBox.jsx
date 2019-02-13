import React, { Component } from "react";
import RadioButton from "./RadioButton";

class AnswersBox extends Component {
  onButtonClick(text) {
    alert(text);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   alert("clicked submit");
  // }

  render() {
    const { answers, correct, selectedCity } = this.props;

    return correct ? (
      <div id="answers-box">
        <h1>{`You selected: ${this.props.selectedState[1]}`}</h1>
        <form onSubmit={this.props.onSubmit}>
          <RadioButton
            selectedCity={selectedCity}
            correct={correct}
            city={answers[0]}
            onRadioClick={this.props.onRadioClick}
            disabled={this.props.played ? true : false }
          />
          <RadioButton
            selectedCity={selectedCity}
            correct={correct}
            city={answers[1]}
            onRadioClick={this.props.onRadioClick}
            disabled={this.props.played ? true : false }
          />
          <RadioButton
            selectedCity={selectedCity}
            correct={correct}
            city={answers[2]}
            onRadioClick={this.props.onRadioClick}
            disabled={this.props.played ? true : false }
          />
          <RadioButton
            selectedCity={selectedCity}
            correct={correct}
            city={answers[3]}
            onRadioClick={this.props.onRadioClick}
            disabled={this.props.played ? true : false }
          />
          <button
            id="submit-answer"
            type="submit"
            disabled={!this.props.played && selectedCity ? false : true}
          >
            Submit
          </button>
        </form>
      </div>
    ) : (
      <div>
        <h1>Select a state</h1>
      </div>
    );
  }
}

export default AnswersBox;
