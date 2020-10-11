import React from "react";
import { Link } from 'react-router-dom';

import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import Instruction from "./Instructions";
import BattleResult from "./BattleResult";

export default class Battle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      playerOne: null,
      playerTwo: null,
    };

    this.handleResetBothPlayers = this.handleResetBothPlayers.bind(this);
  }

  handleResetBothPlayers(){
    this.setState({
      playerOne: null,
      playerTwo: null,
    });
  }

  handleResetPlayers(player) {
    this.setState({ [player]: null, battle: false });
  }

  handleSetPlayer(id, username) {
    this.setState({
      [id]: username,
    });
  }
  render() {
    const { playerOne, playerTwo } = this.state; 
    const { match } = this.props;
    return (
      <div className='battle-container'>
        <Instruction />
        <div className="input-preview-container">
          {playerOne ? (
            <PlayerPreview
              username={playerOne}
              onReset={() => this.handleResetPlayers("playerOne")}
            />
          ) : (
            <PlayerInput
              label="Player One"
              setPlayer={(username) =>
                this.handleSetPlayer("playerOne", username)
              }
            />
          )}
          {playerTwo ? (
            <PlayerPreview
              username={playerTwo}
              onReset={() => this.handleResetPlayers("playerTwo")}
            />
          ) : (
            <PlayerInput
              label="Player Two"
              setPlayer={(username) =>
                this.handleSetPlayer("playerTwo", username)
              }
            />
          )}
          {playerOne && playerTwo ? (
            <Link className='btn btn-battle' to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
            }}>
              Battle
              </Link>
          ) : null}
        </div>
      </div>
    );
  }
}
