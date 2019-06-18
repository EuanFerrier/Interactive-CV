import React, { Component } from "react";
import "./contentPanel.css";
import Profile from "./profilePicture.jpg";
import ExperiencePanel from "../experiencePanel/experiencePanel.js"

class DateSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  aboutPage() {
    return (
      <div className="mainBody">
        <div className="LeftPanel">
          <img id="image" src={Profile} />
        </div>
        <div className="RightPanel">
          <h1 id="title">Hello! I'm Euan Ferrier</h1>
          <h2 id="subTitle">Full-Stack Developer</h2>
          <p className="bodyHeading">About Me</p>
          <p className="body">
            A highly motivated and hard working individual who has a keen
            passion in software development and keeping informed with upcoming
            trends within technology. I am a proficient person who looks to
            enhance there skill set by persistently challenging myself through
            daily occurrences. I feel that my consistent enthusiasm and
            dedication towards technology accompanied by my fresh, intuitive
            outlook on problems can be used to contribute towards solutions in
            assignments.
          </p>
        </div>
      </div>
    );
  }

  experiencePage(){
    return (
      <div className="mainBody">
        <div className="LeftPanel">
          <h2 id="subTitle">Work Experience</h2>
          <ExperiencePanel position="Customer Assistant" companyName="Game Digital" date="2015-2016" body="I'm a paragraph. change here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."/>
          <ExperiencePanel position="Customer Assistant" companyName="Tesco" date="2016 - 2018" body="I'm a paragraph. change here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."/>
          <ExperiencePanel position="Software Engineer" companyName="Accenture" date="2018 - Current" body="I'm a paragraph. change here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."/>
        </div>
        <div className="RightPanel">
          <h2 id="subTitle">Education</h2>
          <ExperiencePanel position="Interactive Design" companyName="Edinburgh Napier" date="2016 - 2018" body="test"/>
          <ExperiencePanel position="Software Development" companyName="Heriot Watt" date="2018 - Current" body="test"/>
        </div>
      </div>
      )
  }

  contactPage() {
    return (
      <div className="mainBody">
        <div className="LeftPanel">
          <img id="image" src={Profile} />
        </div>
        <div className="RightPanel">
          <h1 id="title">Hello! I'm Euan Ferrier</h1>
          <h2 id="subTitle">Full-Stack Developer</h2>
          <p className="bodyHeading">Phone Number</p>
          <p className="body">07658 988654</p>
          <p className="bodyHeading">Email Address</p>
          <p className="body">Euan.Ferrier@Accenture.com</p>
          <p className="bodyHeading">House Address</p>
          <p className="body">Atria One, Edinburgh, EH14 3JK</p>
          <p className="bodyHeading">Date of Birth</p>
          <p className="body">4th June 1998</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="contentPanel">
        {this.props.menuTab === "About"
          ? this.aboutPage()
          : this.props.menuTab === "Contact"
          ? this.contactPage()
          : this.props.menuTab === "Experience"
          ? this.experiencePage()
          : this.props.menuTab}
      </div>
    );
  }
}

export default DateSelector;
