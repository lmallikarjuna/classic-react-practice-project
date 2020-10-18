import React, { useState } from "react";
import { Link } from "react-router-dom";

import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import Instruction from "./Instructions";
import BattleResult from "./BattleResult";

export default ({ match }) => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const handleResetBothPlayers = () => {
    setPlayerOne(null);
    setPlayerTwo(null);
  };

  const handleResetPlayers = (id) => {
    if (id === "playerOne") setPlayerOne(null);
    else if (id === "playerTwo") setPlayerTwo(null);
  };

  const handleSetPlayer = (id, username) => {
    if (id === "playerOne") setPlayerOne(username);
    else if (id === "playerTwo") setPlayerTwo(username);
  };

  return (
    <div className="battle-container">
      <Instruction />
      <div className="input-preview-container">
        {playerOne ? (
          <PlayerPreview
            username={playerOne}
            onReset={() => handleResetPlayers("playerOne")}
          />
        ) : (
          <PlayerInput
            label="Player One"
            setPlayer={(username) => handleSetPlayer("playerOne", username)}
          />
        )}
        {playerTwo ? (
          <PlayerPreview
            username={playerTwo}
            onReset={() => handleResetPlayers("playerTwo")}
          />
        ) : (
          <PlayerInput
            label="Player Two"
            setPlayer={(username) => handleSetPlayer("playerTwo", username)}
          />
        )}
        {playerOne && playerTwo ? (
          <Link
            className="btn btn-battle"
            to={{
              pathname: "/battle/results",
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`,
            }}
          >
            Battle
          </Link>
        ) : null}
      </div>
    </div>
  );
};

