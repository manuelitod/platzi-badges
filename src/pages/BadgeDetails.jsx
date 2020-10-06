import React from "react";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";
import api from "../api";

class BadgeDetails extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      badge: undefined,
    };
  }

  fetchBadge = async () => {
    let badgeId = this.props.match.params.badgeId;
    this.setState({ loading: true, error: null });

    try {
      const badge = await api.badges.read(badgeId);
      this.setState({ loading: false, badge: badge });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchBadge();
  }

  render() {
    if (this.state.loading) return <PageLoading />;

    if (this.state.error) return <PageError error={this.state.error} />;

    const badge = this.state.badge;

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.LastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                twitterUsername={badge.twitter}
                jobTitle={badge.jobTitle}
                email={badge.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default BadgeDetails;
