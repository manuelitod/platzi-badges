import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeNew.css";

class BadgeNew extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      badgeFormValues: {
        firstName: "",
        lastName: "",
        email: "",
        twitterUsername: "",
        jobTitle: "",
        error: null,
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
      <>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.badgeFormValues.firstName}
                lastName={this.state.badgeFormValues.lastName}
                twitterUsername={this.state.badgeFormValues.twitterUsername}
                jobTitle={this.state.badgeFormValues.jobTitle}
                email={this.state.badgeFormValues.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
              <BadgeForm updateBadge={this.updateBadge} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
