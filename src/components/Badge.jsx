import React from "react";
import Gravatar from "./Gravatar";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="User Header"></img>
        </div>
        <div>
          <div className="Badge__section-name">
            <Gravatar
              className="Badge__avatar"
              email={this.props.email}
              alt="User Avatar"
            ></Gravatar>
            <h1>
              {this.props.firstName} <br /> {this.props.lastName}
            </h1>
          </div>
          <div className="Badge__section-info">
            <h3>{this.props.jobTitle}</h3>
            <div>@{this.props.twitterUsername}</div>
          </div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
