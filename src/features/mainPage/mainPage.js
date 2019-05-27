import React, { Component } from "react";
import "./mainPage.css";

import NavBar from "../navigationBar/navigationBar";
import ContentPanel from "../ContentPanel/contentPanel";

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTab: "About"
    };
    this.navigationMenuHandler = this.navigationMenuHandler.bind(this);
  }

  navigationMenuHandler(tab) {
    this.setState({ menuTab: tab });
  }

  render() {
    return (
      <div id="mainPage">
        <div id="navigationPanel">
          <NavBar dataPasser={this.navigationMenuHandler} />
        </div>
        <div id="mainPageBody">
          <ContentPanel menuTab={this.state.menuTab} />
        </div>
      </div>
    );
  }
}

export default DateSelector;
