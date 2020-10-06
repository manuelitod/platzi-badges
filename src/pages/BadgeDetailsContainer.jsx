import React from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";
import "./styles/BadgeDetails.css";
import api from "../api";

class BadgeDetailsContainer extends React.PureComponent {
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

    return <BadgeDetails badge={this.state.badge} />;
  }
}

export default BadgeDetailsContainer;
