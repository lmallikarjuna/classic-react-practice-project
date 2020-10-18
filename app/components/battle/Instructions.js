import React, { useContext } from "react";
import {
  FaUserFriends,
  FaFighterJet,
  FaTrophy,
  FaTimesCircle,
} from "react-icons/fa";
import ThemeContext from "../../contexts/theme";

export default () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="instruction-container">
      <h1>Instructions</h1>
      <ul className="instruction-list-container">
        <li className="instruction-list-item">
          <h2>Enter two users</h2>
          <FaUserFriends
            className="bg-light"
            color="rgb(255, 191, 116)"
            size={140}
          />
        </li>
        <li className="instruction-list-item">
          <h2>Battle</h2>
          <FaFighterJet className="bg-light" color="#727272" size={140} />
        </li>
        <li className="instruction-list-item">
          <h2>See the winner</h2>
          <FaTrophy className="bg-light" color="rgb(255, 215, 0)" size={140} />
        </li>
      </ul>
    </div>
  );
};
