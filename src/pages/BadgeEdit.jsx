import React from "react";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import "./styles/BadgeEdit.css";
import api from "../api";

class BadgeEdit extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      badgeFormValues: {
        firstName: "",
        lastName: "",
        email: "",
        twitter: "",
        jobTitle: "",
        error: null,
      },
    };
  }

  fetchBadge = async () => {
    let badgeId = this.props.match.params.badgeId;
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(badgeId);
      this.setState({ loading: false, badgeFormValues: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  updateBadge = (field, value) => {
    this.setState({
      badgeFormValues: {
        ...this.state.badgeFormValues,
        [field]: value,
      },
    });
  };

  componentDidMount() {
    this.fetchBadge();
  }

  render() {
    return (
      <>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
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
                twitterUsername={this.state.badgeFormValues.twitter}
                jobTitle={this.state.badgeFormValues.jobTitle}
                email={this.state.badgeFormValues.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                updateBadge={this.updateBadge}
                badgeFormValues={this.state.badgeFormValues}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeEdit;
