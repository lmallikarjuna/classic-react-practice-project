import React from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";

import { getWinnerLoser } from "../../utils/getWinnerLoser.api";
import Card from "../card/Card";
import Loading from "../loading/Loading";
import ProfileList from "./ProfileList";

export default class BattleResult extends React.Component {
  state = {
    winner: null,
    loser: null,
  };

  componentDidMount = () => {
    console.log(this.props);
    const { playerOne, playerTwo } = queryString.parse(
      this.props.location.search
    );
    getWinnerLoser([playerOne, playerTwo]).then((result) =>
      this.setState({ winner: result[0], loser: result[1] })
    );
  };

  render() {
    const { reset } = this.props;
    const { winner, loser } = this.state;
    if (winner) {
      return (
        <div className="battle-results-container">
          <div className="cards-container">
            <Card
              header="Winner"
              avatar_url={winner.profile.avatar_url}
              score={winner.score}
              html_url={winner.profile.html_url}
              username={winner.profile.login}
            >
              <ProfileList profile={winner.profile} />
            </Card>

            <Card
              header="Loser"
              avatar_url={loser.profile.avatar_url}
              html_url={loser.profile.html_url}
              score={loser.score}
              username={loser.profile.login}
            >
              <ProfileList profile={loser.profile} />
            </Card>
          </div>
          <Link className="btn" to="/battle">
            Reset
          </Link>
        </div>
      );
    }
    return <Loading text="Battling" speed={300} />;
  }
}
