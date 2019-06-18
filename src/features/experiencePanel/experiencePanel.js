import React, { Component } from "react";
import "./experiencePanel.css";

class ExperiencePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTab: "About"
    };
  }

  render() {
    return (
      <div id="experiencePanel">
        <div id="experienceHeader">
          <h1 className="experienceHeading" id="experienceTitle">{this.props.title}</h1>
          <h1 className="experienceHeading" id="experienceDate">{this.props.date}</h1>
        </div>
        <div id="experienceBody">
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default ExperiencePanel;
