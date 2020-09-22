import React from "react";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import { Link } from "react-router-dom";
import confLogo from "../images/badge-header.svg";
import api from "../api";
import "./styles/Badges.css";

class Badges extends React.Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
      error: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchBadgeData();

    this.intervalId = setInterval(this.fetchBadgeData, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchBadgeData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    let badgeList;
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    } else {
      badgeList = <BadgesList badges={this.state.data} />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error}></PageError>;
    }

    return (
      <>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                src={confLogo}
                alt="Conf logo"
                className="Badges_conf-long"
              ></img>
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        {this.state.loading && <p className="text-center">Refreshing...</p>}

        <div className="Badges__list">
          <div className="Badges__container">{badgeList}</div>
        </div>
      </>
    );
  }
}

export default Badges;
