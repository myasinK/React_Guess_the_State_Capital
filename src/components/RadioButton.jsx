import React, { Component } from "react";

class RadioButton extends Component {
  render() {
    let cityOption = this.props.city;
    let selectedCity = this.props.selectedCity;
    return (
      <div className="radio" disabled>
        <label>
          <input
            type="radio"
            value={cityOption}
            onChange={() => this.props.onRadioClick(cityOption)}
            checked={
              this.props.selectedCity ? cityOption === selectedCity : false
            }
            disabled={this.props.disabled}
          />
          {cityOption}
        </label>
      </div>
    );
  }
}

export default RadioButton;
