import React, { Component } from "react";
import "./experiencePanel.css";

class ExperiencePanel extends Component {
  render() {
    return (
      <div id="experiencePanel">
        <div id="experienceHeader">
          <h1 className="experienceHeading" id="experienceDate">{this.props.date}</h1>
          <h1 className="experienceHeading" id="experiencePosition">{this.props.position}</h1>
        </div>
        <div id="experienceContent">
          <h1 className="experienceBody" id="experienceCompany">{this.props.companyName}</h1>
          <p className="experienceBody" id="experienceBody">{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default ExperiencePanel;
