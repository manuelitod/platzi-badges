import React from "react";
import header from "../images/badge-header.svg";
import NavBar from "../components/Navbar";
import Badge from "../components/Badge";
import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Manuel"
                lastName="Rodrigues"
                twitterUsername="manuelitod"
                jobTitle="Software Engineer"
                userAvatarUrl="https://avatars3.githubusercontent.com/u/22405900?s=460&u=575d009b58ef917b1d9f6fb43a635e3edaab82c2&v=4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
