import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

const SearchFilter = ({ query, setQuery }) => (
  <div className="form-group">
    <label>Filter Badges</label>
    <input
      type="text"
      className="form-control"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  </div>
);

const useSearchBadges = (badges) => {
  const [query, setQuery] = useState("");
  const [filteredBadges, setFilteredBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
};

const BadgesList = (props) => {
  const badges = props.badges;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <>
        <SearchFilter query={query} setQuery={setQuery} />
        <h3>No badges were found.</h3>
      </>
    );
  }

  return (
    <>
      <SearchFilter query={query} setQuery={setQuery} />
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BadgesList;
