import React from "react";

export default function PlayerPreview({ username, onReset }) {
  return (
    <div className="player-preview-container">
      <img src={`https://github.com/${username}.png?size=200`} />
      <a href={`https://github.com/${username}`}>{username}</a>
      <button className='btn' onClick={onReset}>Reset</button>
    </div>
  );
}
