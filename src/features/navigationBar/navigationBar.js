import React, { Component } from "react";
import "./navigationBar.css";

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonActive: "About"
    };
  }

  sendDataToParent(tab) {
    this.props.dataPasser(tab);
    this.setState({ buttonActive: tab });
  }

  renderButtons() {
    let buttons = [];
    let tabNames = ["About", "Experience", "Skills", "Contact"];
    for (let i = 0; i < tabNames.length; i++) {
      buttons.push(
        <button
          key={i}
          className="navButton"
          id={
            this.state.buttonActive === tabNames[i] ? "navButtonActive" : null
          }
          onClick={() => this.sendDataToParent(tabNames[i])}
        >
          {tabNames[i]}
        </button>
      );
    }
    return buttons;
  }

  render() {
    return <div id="navigationBar">{this.renderButtons()}</div>;
  }
}

export default DateSelector;
