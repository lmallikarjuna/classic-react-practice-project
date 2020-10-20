import React from "react";
import PropTypes from "prop-types";

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default function PlayerPreview({ username, onReset }) {
  return (
    <div className="player-preview-container">
      <img
        src={`https://github.com/${username}.png?size=200`}
        onClick={() => window.open(`https://github.com/${username}`, "_blank")}
      />
      <a href={`https://github.com/${username}`}>{username}</a>
      <button className="btn" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
