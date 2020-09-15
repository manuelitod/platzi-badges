import React from "react";
import header from "../images/badge-header.svg";
import NavBar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";

class BadgeNew extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      badgeFormValues: {
        firstName: "",
        lastName: "",
        email: "",
        twitterUsername: "",
        jobTitle: "",
      },
    };
  }

  updateBadge = (field, value) => {
    this.setState({
      badgeFormValues: {
        ...this.state.badgeFormValues,
        [field]: value,
      },
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.badgeFormValues.firstName}
                lastName={this.state.badgeFormValues.lastName}
                twitterUsername={this.state.badgeFormValues.twitterUsername}
                jobTitle={this.state.badgeFormValues.jobTitle}
                userAvatarUrl="https://avatars3.githubusercontent.com/u/22405900?s=460&u=575d009b58ef917b1d9f6fb43a635e3edaab82c2&v=4"
              />
            </div>
            <div className="col-6">
              <BadgeForm updateBadge={this.updateBadge} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
